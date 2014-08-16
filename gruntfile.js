module.exports = function(grunt) {
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    jshint: {
      scripts: ['app/scripts/app.js'],
      test: ['test/unit/spec/controllersSpec.js'],
      all: ['app/scripts/app.js', 'test/unit/spec/controllersSpec.js']
    },
    copy: {
      scripts: {
        files: [
            { expand: true, src: ['**/*.js'], cwd: 'app', dest: 'build' }
        ]
      },
      styles: {
        files: [
          { expand: true, src: ['**/*.css'], cwd: 'app', dest: 'build' }  
        ]
      },
      view: {
        files: [
          { expand: true, src: 'index.html', cwd: 'app', dest: 'build/app.html' }  
        ]
      },
    },
    connect: {
      server: {
        options: {
          port: 8000
        }
      }
    },
    watch: {
      scripts: {
        files: ['app/scripts/*',],
        tasks: ['jshint:scripts', 'copy:scripts'],
        options: {
          spawn: false
        }
      },
      styles: {
        files: ['app/style/*'],
        tasks: ['copy:styles'],
        options: {
          spawn: false
        }
      },
      view: {
        files: ['app/index.html'],
        tasks: ['copy:view'],
        options: {
          spawn: false
        }
      },
      test: {
        files: ['test/unit/spec/*'],
        tasks: ['jshint:test'],
        options: {
          spawn: false
        }
      }
    }
    
  });
  
  grunt.registerTask('default', ['jshint:all', 'connect', 'watch',]);
};
