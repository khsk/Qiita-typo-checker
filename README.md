# Qiita-typo-checker
Qiitaの投稿からtypoを検出します。

現在はSlackに通知するようにしています。

# インストール

`npm install -S khsk/qiita-typo-checker`
`yarn add khsk/qiita-typo-checker`

# 実行

`.env.sample`
を参考に、Slackの投稿先を設定した`.envファイル`を設置するか、環境変数を設定してください。


## 手動実行
`npx khsk/qiita-typo-checker`
で実行します。


## プログラム中での実行

```
require('qiita-typo-checker')();
```


# 検索範囲


昨日から現在までの投稿を対象としています。

# 使い方

`crontab`や`cron`パッケージを使い、毎日定期実行する方法がよろしいかと思います。
時刻設定ができないので、日付更新直後が取りこぼしも少なく、翌日に重複検知されにくい時刻でオススメです。

