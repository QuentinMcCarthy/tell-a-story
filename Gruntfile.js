module.exports = function(grunt){
	grunt.initConfig({
		csslint: {
			strict: {
				options: {
					import: 2
				},
				src: ["css/master.css"]
			},
			lax: {
				options: {
					import: false
				},
				src: ["css/master.css"]
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'css/',
					src: ['*.css', '!*.min.css'],
					dest: 'css/',
					ext: '.min.css'
				}]
			}
		},
		jshint: {
			all: ["js/script.js"]
		},
		uglify: {
			my_target: {
				files: {
					"js/script.min.js": ["js/script.js"]
				}
			}
		},
		watch: {
			css: {
				files: ["css/master.css"],
				tasks: ["csslint:lax", "cssmin"]
			},
			js: {
				files: ["js/script.js"],
				tasks: ["jshint:all", "uglify"]
			}
		}
	});

	// grunt.loadNpmTasks();
	grunt.loadNpmTasks("grunt-contrib-csslint");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");

	// grunt.registerTask();
};
