module.exports = function(grunt) {
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    jshint: {
      scripts: ['app/scripts/app.js'],
      test: ['test/unit/spec/*Spec.js'],
      patterns: ['lib/design/scripts/visual-patterns.js'],
      all: ['app/scripts/app.js', 'test/unit/spec/*Spec.js', 'lib/design/scripts/visual-patterns.js']
    },
    copy: {
      scripts: {
        files: [
            { expand: true, src: ['*.js'], dest: 'build/scripts/', cwd: 'app/scripts/' }
        ]
      },
      styles: {
        files: [
          { expand: true, src: ['*'], dest: 'build/style/', cwd: 'app/style/' }  
        ]
      },
      view: {
        files: [
          { expand: true, src: ['index.html'], dest: 'build/', cwd: 'app/', 
          rename: function(dest, src) {
            return dest + src.replace('index', 'app');
          }
        }]
      },
      templates: {
        files: [
          { expand: true, src: '*.html', dest: 'build/views/', cwd: 'app/views/' }
        ]
      }
    },
    clean: {
      build: [ 'build/index.html' ]
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
      patterns: {
        files: ['lib/design/scripts/visual-patterns.js'],
        tasks: ['jshint:patterns'],
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
        tasks: ['copy:view', 'clean'],
        options: {
          spawn: false
        }
      },
      templates: {
        files: ['app/views/*.html'],
        tasks: ['copy:templates'],
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
  
  grunt.registerTask('default', ['jshint:all', 'copy', 'clean', 'connect', 'watch',]);
};
