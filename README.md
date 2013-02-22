#Gruntベース
自分用のGruntによる構築環境、とりあえず必要最低限のもの

[http://gruntjs.com/](http://gruntjs.com/)


##タスク
* jsファイルを結合（複数のjsファイルでコードを管理したい）
* jsファイルをminify
* compassでsassをビルド
* 上記のタスクをファイル監視で自動化



##使用プラグイン
* [https://github.com/gruntjs/grunt-contrib-compass](https://github.com/gruntjs/grunt-contrib-compass)　//compass  
* [https://github.com/gruntjs/grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)　//ファイル監視  
* [https://github.com/gruntjs/grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat)　//jsファイル結合
* [https://github.com/gruntjs/grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)　//jsファイルのminify
* [https://github.com/gruntjs/grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)　//ファイル、フォルダの削除


##補足
cleanを使ってるのは書き方調べきれてなくてcompassのimport用のファイルまでhtdocs配下にビルドされてしまうので、importフォルダ内にまとめて吐き出されたimportフォルダごと消し去っているため。。。   なんとかするべきじゃね。。。


##TODO
* ブラウザのオートリロード
* jsドキュメントの作成を自動化（Yuidocsとか）
* compassはちゃんとconfig.rbで設定する（そもそもまだcompassがよくわからん）

##雑感

はじめてgrunt環境を構築してみたけど、すごい楽な気がする。いちいちsass --watch　〜みたいに書かなくていいのがスゴイいい。

そんなにcompass使ってないのでsassのビルドにcompassじゃなくてもいいんじゃねとか思ってるけど、とりあえずcompassの力を体験してみるまでやってみる。

プラグイン類はよくわからんのでとりあえずメジャーっぽいものをチョイス。

##参考記事
* [http://havelog.ayumusato.com/tag/Grunt/](http://havelog.ayumusato.com/tag/Grunt/)
* [http://1000ch.net/2012/12/08/ReconsideringGruntJs/](http://1000ch.net/2012/12/08/ReconsideringGruntJs/)
* [http://qiita.com/users/ANTON072@github](http://qiita.com/users/ANTON072@github)


