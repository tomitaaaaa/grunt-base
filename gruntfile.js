
var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var folderMount = function folderMount(connect, point) {
	return connect.static(path.resolve(point));
};

module.exports = function(grunt) {
	/* package.jsonの内容を読み込む */
	var pkg = grunt.file.readJSON('package.json');
	grunt.initConfig({
		/* ライブリロード */
		connect: {
			livereload: {
				options: {
					port: 9001,
					middleware: function(connect, options) {
						return [lrSnippet, folderMount(connect, '.')];
					}
				}
			}
		},
		/* jsファイルを結合 */
		concat : {
			basic : {
				// 結合元となるファイル
				src : [
					'htdocs/js/_dev/libs/*.js'
				],
				// 結合先のファイル名
				dest : 'htdocs/js/libs/libs.js'
			}//,
			// extras: {
			// 	// 結合元となるファイル
			// 	src : [
			// 		'htdocs/js/_dev/_js/*.js'
			// 	],
			// 	// 結合先のファイル名
			// 	dest : 'htdocs/js/_dev/common.js'
			// }
		},
		/* jsファイルをminify */
		uglify: {
			my_target: {
				options: {
					// true にすると難読化がかかる。false だと関数や変数の名前はそのまま
					mangle: true
				},
				files: {
					'htdocs/js/common.js':['htdocs/js/_dev/*.js']
				}
			}
		},
		/* compassでsassをコンパイル */
		compass: {
			/* minifyしたバージョン */
			dist: {
				options: {
					config: 'config/config.rb',
					environment: 'production'
				}
			},
			/* minifyしてないバージョン */
			dev: {
				options: {
					config: 'config/config.rb',
					cssDir: 'htdocs/css/_dev'
				}
			}
		},
		coffee: {
			options: {
				bare: true
				// sourceMap: true
			},
			compile: {
				files: {
					'htdocs/js/_dev/common.js': ['htdocs/js/_dev/_coffee/*.coffee']
				}
			},
			glob_to_multiple: {
				expand: true,
				flatten: true,
				cwd: 'htdocs/js/_dev/_coffee/',
				src: ['*.coffee'],
				dest: 'htdocs/js/_dev/_js/',
				ext: '.js'
			}
		},
        jshint: {
            files: ['htdocs/js/_dev/_concat/*.js']
        },
		/* 余計なフォルダ・ファイルを削除 */
		clean: ["htdocs/css/import"],
		/* ファイルを監視 */
		regarde: {
			/* htmlファイルの監視設定 */
			html: {
				files: '**/*.html',
				tasks: ['livereload']
			},
			/* scssファイルの監視設定 */
			sass: {
				files: '**/css/**/scss/*.scss',
				tasks: ['compass','livereload']
			},
			/* jsファイルの監視設定 */
			// js: {
			// 	files: '**/js/_dev/*.js',
			// 	tasks: ['concat','uglify','livereload']
			// },
			/* jsライブラリの監視設定 */
			jslib: {
				files: '**/js/_dev/libs/*.js',
				tasks: ['concat','livereload']
			},
			/* jsファイルの監視設定 */
			coffee: {
				files: '**/js/_dev/_coffee/*.coffee',
				tasks: ['coffee','jshint','uglify','livereload']
			}
		}
	});

	// loadNpmTasksを変更
	var taskName;
	for(taskName in pkg.devDependencies) {
		if(taskName.substring(0, 6) == 'grunt-') {
			grunt.loadNpmTasks(taskName);
		}
	}
	grunt.registerTask('default', [ 'connect', 'livereload-start','regarde']);
	grunt.registerTask('eatwarnings', function() {
		process.exit = function() {};
	});
};


