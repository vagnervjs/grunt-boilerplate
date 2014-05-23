module.exports = function(grunt) {
	'use strict';
	var gruntConfig = {
		pkg: grunt.file.readJSON('package.json'),
		min: {
			dist: {
				src: ['src/assets/js/main.js'],
				dest: 'src/assets/js/all.min.js'
			}
		},
        cssmin: {
            dist: {
                src: ['src/assets/css/main.css'],
                dest: 'src/assets/css/all.min.css'
            }
        },
        imageoptim: {
            dist: {
                options: {
                    jpegMini: false,
                    imageAlpha: true,
                    quitAfter: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/assets/img',
                    src: '**/*.{png,jpg,jpeg}',
                    dest: 'src/assets/img-opt'
                }]
            }
        },
        // uncomment for use less and comment cssmin configs
		// less: {
        //     development: {
        //         options: {
        //             yuicompress: true
        //         },
        //         files: {
        //             "./src/assets/css/all.min.css":
        //             ["./src/assets/css/less/main.less"]
        //         }
        //     }
        // },
		// rsync: {
		// 	dist: {
		// 		src: './src/',
		// 		dest: './dist',
		// 		recursive: true,
		// 		syncDest: true,
		// 		exclude: ['main.*', 'less']
		// 	},
  //           // uncomment and config
		// 	// deploy: {
		// 	// 	src: './dist/',
		// 	// 	dest: '/var/www',
		// 	// 	host: 'root@vagnersantana.com',
		// 	// 	recursive: true,
		// 	// 	syncDest: true
		// 	// }
		// }
	};
	grunt.initConfig(gruntConfig);

	var keys = Object.keys(gruntConfig);
	var tasks = [];

	for(var i = 1, l = keys.length; i < l; i++) {
		tasks.push(keys[i]);
	}

	grunt.loadNpmTasks('grunt-yui-compressor');
	grunt.loadNpmTasks('grunt-imageoptim');
	grunt.loadNpmTasks('grunt-rsync');
    // uncomment for use less
	// grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default', tasks);
};