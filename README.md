#Gruntベース
自分用のGruntによる構築環境、とりあえず必要最低限のもの

[http://gruntjs.com/](http://gruntjs.com/)

（2013/05/12 UPDATE）


##タスク
* jsファイルを結合（複数のjsファイルでコードを管理したい）
* jsファイルをminify
* compassでsassをビルド
* 仮想サーバを立ち上げてブラウザのオートリロード
* coffeeスクリプトのコンパイル
* minify前にjshint
* 上記のタスクをファイル監視で自動化

##前回からの変更点
* とりあえずブラウザのオートリロードの機能を追加。
* compassはちゃんとconfig.rbの設定を読み込むように修正。
* coffee scriptの自動コンパイルをタスクに追加。
* ファイル監視のプラグインをcontrib-watchからgrunt-regardeに変更（どうもcontribのライブリロードするのにはこっちでないといけないらしい？）

##使用プラグイン
* "grunt-contrib-watch": "~0.3.1",
* "grunt-contrib-cssmin": "~0.4.2",
* "grunt-contrib-concat": "~0.1.2",
* "grunt-contrib-clean": "~0.4.0",
* "grunt-contrib-uglify": "~0.1.1",
* "grunt-contrib-compass": "~0.1.2",
* "grunt-contrib-livereload": "~0.1.2",
* "grunt-contrib-connect": "~0.3.0",
* "grunt-regarde": "~0.1.1",
* "grunt-contrib-coffee": "~0.7.0",
* "grunt-contrib-jshint": "~0.4.3"


##TODO
* js、cssドキュメントの作成を自動化（Yuidocsとか）
* compassはちゃんとconfig.rbで設定する（そもそもまだcompassがよくわからん）

##雑感

うーんなんとか欲しかった機能の導入にゅうに成功、coffee scriptはこれから挑戦するのでjsを直に書くパターンには戻りやすくしておいた

grunt-regardeにしたせいなのか、コンパイルに失敗するとgruntの監視が全てストップすることがあるのに対応はしているがなんか見逃しがありそう。運用しながら調整する予定。。。


##参考記事
* [http://havelog.ayumusato.com/tag/Grunt/](http://havelog.ayumusato.com/tag/Grunt/)
* [http://1000ch.net/2012/12/08/ReconsideringGruntJs/](http://1000ch.net/2012/12/08/ReconsideringGruntJs/)
* [http://qiita.com/users/ANTON072@github](http://qiita.com/users/ANTON072@github)


