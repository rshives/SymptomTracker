module.exports = function(grunt) {
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    jshint: {
      all: ['app/scripts/app.js', 'test/angular/controllerSpec.js']
    },
    connect: {
      server: {
        options: {
          port: 8000,
          keepalive: true,
          /*livereload: true*/
        }
      }
    },
    watch: {
      scripts: {
        files: ['app/index.html', 'app/scripts/app.js', 'test/angular/controllerSpec.js'],
        tasks: ['jshint'],
        options: {
          spawn: false,
          
        }
      }
    }
    
  });
  
  grunt.registerTask('default', ['jshint', 'connect','watch']);
};