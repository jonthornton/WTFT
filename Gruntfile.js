module.exports = function(grunt) {
	grunt.initConfig({

	less: {
		development: {
			files: {"dev/styles.css": "styles.less"}
		},
		production: {
			options: {
				cleancss: true
			},
			files: {"dist/styles.css": "styles.less"}
		}
	},
	uglify: {
		options: {
			report: 'gzip'
		},
		dist: {
			files: {
			'dist/fastclick.min.js': 'bower_components/fastclick/lib/fastclick.js',
			}
		}
	},
	watch: {
		scripts: {
			files: '**/*.less',
			tasks: ['less'],
			options: {
				debounceDelay: 250,
			},
		},
	},
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['less', 'uglify']);
};
