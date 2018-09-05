module.exports = {
    access                 : ['(?<!e)acces(?!s)', 'acess', 'aceess',],
    action                 : ['aciton', 'actoin',],
    android                : ['andriod',],
    analyze                : ['analize',],
    arduino                : ['ardino','aruduino','arudino',],
    behavior               : ['(?<!mono)behaviour',],
    browser                : ['brawser',],
    bootstrap              : ['boostrap','bootsrap','bootstap',],
    bottom                 : ['botton','buttom',],
    button                 : ['botton','buttom',],
    calendar               : ['calender',],
    callback               : ['calback','collback',],
    chainer                : ['chiner',],
    channel                : ['chanel','channnel',],
    chocolatey             : ['chocolatery',],
    chrome                 : ['chorome',],
    chromium               : ['chronium',],
    coffee                 : ['cofee', 'coffe(?!e)',],
    command                : ['comand',],
    commit                 : ['comit',],
    communication          : ['comunication',],
    community              : ['comunity',],
    composer               : ['compoesr','compsoer','conposer'],
    configure              : ['configre',],
    console                : ['conosle',],
    construct              : ['constract',],
    controller             : ['controler',],
    cors                   : ['(?<!mi|ma)cros(?!s)',],
    create                 : ['(?<!o_)creat(?!e|ion|ive|ing|or)',],
    creator                : ['creater(?!ole)',],
    css                    : ['(?<!a)ccs',],
    datetime               : ['datatime',],
    default                : ['defualt',],
    description            : ['discription',],
    developer              : ['developper',],
    diff                   : ['diif',],
    eclipse                : ['eclipce','eclips(?!e)'],
    edge                   : ['egde',],
    elasticsearch          : ['elatic',],
    enable                 : ['enalbe',],
    environment            : ['enviroment',],
    error                  : ['erorr',],
    filter                 : ['fillter',],
    finally                : ['finaly',],
    form                   : ['<from',],
    foundation             : ['fundation',],
    function               : ['fucntion', 'funciton',],
    getElementById         : ['getElementsById',],
    getElementsByClassName : ['getElementByClassName',],
    githubpages            : ['github(\\s|-|_)?page(?!s)'],
    global                 : ['gloval',],
    googleappsscript       : ['google\\s?app\\s?script',],
    gradle                 : ['gladle',],
    hello                  : ['(?<!s)hallo','hellow(?!orld)',],
    http                   : ['htttp','htpp','htp(?!asswd)',],
    ifttt                  : ['ifftt','iffft','itfff',],
    imagemagick            : ['imagemagic(?!k)',],
    import                 : ['inport',],
    information            : ['infomation',],
    integer                : ['intger',],
    intellij               : ['intelij','intellj','intelj',],
    install                : ['isntall','instal(?!l)',],
    jupyter                : ['(?<!junit.)jupiter',],
    kotlin                 : ['kotolin',],
    kubernetes             : ['kubernates',],
    language               : ['langage',],
    lambda                 : ['lamda', 'lamba', 'lamdba',],
    laravel                : ['lalavel','laraval',],
    linux                  : ['linax',],
    license                : ['licence','lisence','(?<!intel)lisense',],
    mastodon               : ['mastdon',],
    merge                  : ['marge'],
    message                : ['mesage',],
    mozilla                : ['mozila',],
    nginx                  : ['enginx',],
    node                   : ['(?<!joh)ndoe',],
    notifier               : ['notifer',],
    origin                 : ['origine','orign',],
    override               : ['overide',],
    parcel                 : ['percel',],
    performance            : ['peformance',],
    plugin                 : ['plagin',],
    postgresql             : ['postgressql',],
    programming            : ['programing',],
    property               : ['propety',],
    puppeteer              : ['puppeter','pupeter','puppter','pappeter','pupetter',],
    python                 : ['pyton','pyhton','pyhon',],
    qiita                  : ['qita','qiit(?!a)','quiita','qitta',],
    raspberry              : ['rasberry','raspbery','rasbery',],
    raspbian               : ['rasbian',],
    require                : ['reqiure','requrie','reuqire'],
    receive                : ['recieve',],
    return                 : ['reutrn','retun',],
    scratch                : ['scrach',],
    script                 : ['scirpt','scrit',],
    search                 : ['seach','serach',],
    separate               : ['seperate',],
    service                : ['serivce',],
    share                  : ['shere',],
    sign                   : ['(?<!u|mis|proces|acces)sing(_|\\s)?(out|in|up|off)',],
    slack                  : ['slak',],
    standard               : ['standerd',],
    storage                : ['strage',],
    studio                 : ['stadio',],
    support                : ['suport',],
    swift                  : ['swfit',],
    switch                 : ['(?<!start|end)swith','swich',],
    table                  : ['tabel',],
    tampermonkey           : ['tempermonkey',],
    true                   : ['treu',],
    ubuntu                 : ['ubntu','ubutu',],
    unknown                : ['unkown',],
    update                 : ['updata(?!ble)','udpate',],
    url                    : ['ulr',],
    verbose                : ['varbose',],
    version                : ['varsion',],
    webhook                : ['webhock',],
    window                 : ['widow','windw',],
/*    word                   : ['(?<!for)ward',], // 一般的すぎるので除去 reward award ... */
    yarn                   : ['yarm',],
    yield                  : ['yeild',],
    zabbix                 : ['zabix',],
    未だに                 : ['今だに',],
    今まで                 : ['今ままで',],
    解決法                 : ['解決方(?!法)',],
    仮想                   : ['仮装',],
    後述                   : ['後術',],
    使用                   : ['仕様(され|する|した|して|しま|が?でき)',],
    対処法                 : ['対処方(?!法)',],
    捕捉                   : ['exceptionを補足','例外を補足',],
    復号                   : ['復号化','複合化','複号化',],
    プログラム             : ['ブログラ(ム|ミ)',],
    メソッド               : ['メッソド','メッソッド','メソッッド',],
    用意                   : ['容易(され|する|した|して|しま|が?でき)',],
    ライブラリ             : ['ライブライ',],
    リクエスト             : ['リクスト',],
    を比較して             : ['の比較して',],
    '\\n```'               : ['^([^#\\n\\s]+)(?<!```|<\\/h\\d>)\\n```[^\\n`]+\\n',], // 正規表現がヘタなので簡易版
    URL抜け                : ['\\]\\(\\)',], // 検出してもどのURLを入れればいいのか難しい
};
