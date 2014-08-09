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
	 grunt.loadNpmTasks('grunt-contrib-less');
	 grunt.loadNpmTasks('grunt-contrib-watch');

	 grunt.registerTask('default', ['less']);
 };
