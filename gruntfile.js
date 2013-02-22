module.exports = function(grunt) {
	grunt.initConfig({
		/* package.jsonの内容を読み込む */
		pkg: grunt.file.readJSON('package.json'),
		
		/* jsファイルを結合 */
		concat : {
			basic : {
				// 結合元となるファイル
				src : [
					'dev/_js/libs/jquery.js',
					'dev/_js/libs/*.js'
				],
				// 結合先のファイル名
				dest : 'htdocs/js/libs.js'
			},
			extras : {
				// 結合元となるファイル
				src : [
					'dev/_js/*.js'
				],
				// 結合先のファイル名
				dest : 'htdocs/js/all.js'
			}
		},

		/* jsファイルをminify */
		uglify: {
			my_target: {
				files: {
					'htdocs/js/all.min.js': ['htdocs/js/all.js']
				}
			}
		},

		/* compassでsassをコンパイル */
		compass: {
			/* minifyしたバージョン */
			dist: {
				options: {
					sassDir: 'dev/_scss/',
					cssDir: 'htdocs/css',
					environment: 'production'
				}
			},
			/* minifyしてないバージョン */
			dev: {
				options: {
					sassDir: 'dev/_scss/',
					cssDir: 'dev/_css/'
				}
			}
		},

		/* 余計なフォルダ・ファイルを削除 */
		clean: ["htdocs/css/import"],

		/* ファイルを監視 片方だけを監視したい場合はwatch:***で監視できる */
		watch: {
			/* jsファイルの監視設定 */
			js: {
				files: 'dev/_js/*.js',
				tasks: ['concat','uglify'],
				options: {
					interrupt: true
				}
			},
			/* scssファイルの監視設定 */
			sass: {
				files: ['dev/_scss/*.scss','dev/_scss/import/*.scss'],
				tasks: ['compass','clean'],
				options: {
					interrupt: true
				}
			}
		}
	});

	/* プラグインたち */
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	/* デフォルトのタスク　ターミナルにgruntで起動できる */
	grunt.registerTask('default', 'watch');
};