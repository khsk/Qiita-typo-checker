module.exports = {
    access                 : ['acces(?!s)', 'acess', 'aceess',],
    action                 : ['aciton', 'actoin',],
    android                : ['andriod',],
    arduino                : ['ardino','aruduino','arudino',],
    behavior               : ['(?<!mono)behaviour',],
    browser                : ['brawser',],
    bottom                 : ['botton','buttom',],
    button                 : ['botton','buttom',],
    calendar               : ['calender',],
    callback               : ['calback','collback',],
    chainer                : ['chiner',],
    chocolatey             : ['chocolatery',],
    chrome                 : ['chorome',],
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
    create                 : ['(?<!o_)creat(?!e|ion|ive|ing|or)',],
    creator                : ['creater',],
    css                    : ['ccs',],
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
    function               : ['fucntion', 'funciton',],
    getElementById         : ['getElementsById',],
    getElementsByClassName : ['getElementByClassName',],
    global                 : ['gloval',],
    gradle                 : ['gladle',],
    hello                  : ['hallo','hellow(?!orld)',],
    http                   : ['htttp','htpp','htp(?!asswd)',],
    ifttt                  : ['ifftt','iffft','itfff',],
    imagemagick            : ['imagemagic(?!k)',],
    import                 : ['inport',],
    information            : ['infomation',],
    integer                : ['intger',],
    intellij               : ['intelij','intellj','intelj',],
    install                : ['isntall','instal(?!l)',],
    kotlin                 : ['kotolin',],
    language               : ['langage',],
    lambda                 : ['lamda', 'lamba', 'lamdba',],
    laravel                : ['lalavel','laraval',],
    linux                  : ['linax',],
    license                : ['licence','lisence','lisense',],
    mastodon               : ['mastdon',],
    message                : ['mesage',],
    mozilla                : ['mozila',],
    nginx                  : ['enginx',],
    node                   : ['ndoe',],
    notifier               : ['notifer',],
    origin                 : ['origine','orign',],
    override               : ['overide',],
    parcel                 : ['percel',],
    plugin                 : ['plagin',],
    postgresql             : ['postgressql',],
    programming            : ['programing',],
    puppeteer              : ['puppeter','pupeter','puppter','pappeter','pupetter',],
    qiita                  : ['qita','qiit(?!a)',],
    raspberry              : ['rasberry',],
    raspbian               : ['rasbian',],
    require                : ['reqiure','requrie','reuqire'],
    receive                : ['recieve',],
    return                 : ['reutrn','retun',],
    scratch                : ['scrach',],
    script                 : ['scirpt',],
    search                 : ['seach','serach',],
    separate               : ['seperate',],
    service                : ['serivce',],
    share                  : ['shere',],
    sign                   : ['sing(_|\\s)?(out|in|up|off)',],
    slack                  : ['slak',],
    standard               : ['standerd',],
    studio                 : ['stadio',],
    support                : ['suport',],
    swift                  : ['swfit',],
    switch                 : ['(?<!start|end)swith','swich',],
    table                  : ['tabel',],
    tampermonkey           : ['tempermonkey',],
    true                   : ['treu',],
    ubuntu                 : ['ubntu',],
    unknown                : ['unkown',],
    update                 : ['updata',],
    url                    : ['ulr',],
    verbose                : ['varbose',],
    version                : ['varsion',],
    webhook                : ['webhock',],
/*    word                   : ['(?<!for)ward',], // 一般的すぎるので除去 reward award ... */
    yarn                   : ['yarm',],
    yield                  : ['yeild',],
    zabbix                 : ['zabix',],
    後述                   : ['後術',],
    捕捉                   : ['exceptionを補足','例外を補足',],
    復号                   : ['復号化','複合化','複号化',],
    リクエスト                : ['リクスト',],
    '\\n```'               : ['^[^#\\n]+?\\n```\\S+'], // 正規表現がヘタなので簡易版
};
