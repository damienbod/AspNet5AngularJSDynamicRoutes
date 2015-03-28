module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		bower: {
			install: {
				options: {
					targetDir: "wwwroot/lib",
					layout: "byComponent",
					cleanTargetDir: false
				}
			}
		},
		uglify: {
			my_target: {
				files: { 'wwwroot/app.js': ['app/app.js', 'app/**/*.js'] }
			}
		},
		watch: {
			scripts: {
				files: ['app/**/*.js'],
				tasks: ['uglify']
			}
		}
	});

	grunt.registerTask("default", ["bower:install"]);
	grunt.registerTask('default', ['uglify', 'watch']);

	grunt.loadNpmTasks("grunt-bower-task");
};