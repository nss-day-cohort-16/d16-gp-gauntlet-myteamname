module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      '../dist/gauntlet.js': ['../javascripts/app.js']
    },
    jshint: {
      files: ['../javascripts/**/*.js'],
      options: {
        predef: ["document", "console", "$", "event", "window", "alert", "location" ],
        esnext: true,
        globalstrict: true,
        globals: { "Gauntlet": true, "require": true, "module": true, "Enemies": true }
      }
    },
    sass: {
      dist: {
        files: {
// target: source
          '../styles/gauntlet.css': '../sass/gauntlet.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      },
      browserify: {
        files: ['../javascripts/*.js'],
        tasks: ["browserify"]
      }
   }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
};