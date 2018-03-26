require('dotenv').config();
require('date-utils');
const axios = require('axios');

const DICTIONARY = require('./dictionary');

const { IncomingWebhook } = require('@slack/client');
const slackDefaultValue = {
    username   : 'Qiita typo checker',
    icon_emoji : ':books:',
    channel    : process.env.SLACK_CHANNEL,
    text       : 'Typoの可能性がある記事です',
};
const webhook = new IncomingWebhook(process.env.SLACK_INCOMING_URL, slackDefaultValue);

const makeMessage = (item) => {
    let fields = [];
    Object.keys(item.typos).forEach(correct => {
        fields.push({
            title : correct,
            value : item.typos[correct],
            short : true,
        });
    });

    return {
        attachments:[
            {
                color       : '#55c500',
                author_icon : item.user.profile_image_url,
                author_name : item.user.name,
                author_link : item.user.id,
                title       : item.title,
                title_link  : item.url,
                text        : item.body.slice(0, 117),
                footer      : item.tags,
                ts          : new Date(item.updated_at) / 1000,
                fields      : fields,
            }
        ]
    };
};

const sendSlack = item => {
    webhook.send(makeMessage(item), (err, res) => {
        if (err) {
            console.log('Error:', err);
        } else {
            console.log('Message sent: ', res);
        }
    });
};

// qiita apiから昨日から今日までの投稿を全て取得する
const getItems = async () => {
    const api_url   = 'https://qiita.com/api/v2/items';
    const per_page  = 100;
    const yesterday = (new Date.yesterday()).toFormat('YYYY-MM-DD');
    let query       = 'created:>' + yesterday;
    let page        = 1;

    let items = [];
    while(page) {
        let url = api_url + '?per_page=' + per_page + '&page=' + page + '&query=' + query;
        let res = await axios.get(url).catch(e => {
            console.log('catch e',e.toString());
            page = 0;
            return false;
        });

        if (!res || res.data.length == 0) {
            break;
        }
        items = items.concat(res.data);
        page++;
    }
    return items;
};



module.exports = async () => {
    const items = await getItems();

    items.forEach(item => {
        // tagはバージョン情報などは不要なので、連結してしまう
        item.tags = Object.keys(item.tags).map(key => item.tags[key].name).join(', ');
        // 検索対象はタイトル、タグ、本文。一度に検索するためつなげてしまう(メモリだいぶ増)
        let searchTarget = item.title + '\n' + item.body + '\n' + item.tags;

        item.typos = {};
        // 検索！
        Object.keys(DICTIONARY).forEach(correct => {
            let regexp = new RegExp('(' + DICTIONARY[correct].join('|') + ')', 'gi');
            let matches = searchTarget.match(regexp);
            if(!matches) {
                return;
            }
            item.typos[correct] = matches.join(', ');
        });

        if (Object.keys(item.typos).length == 0) {
            return;
        }

        // console.log(item.typos); // debug

        sendSlack(item);
    });
};





