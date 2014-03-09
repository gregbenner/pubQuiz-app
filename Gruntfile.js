module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },

    coffee: {
      compile: {
        flatten: true,
        expand: true,
        cwd: "./",
        src: ['coffee/*.coffee'],
        dest: './script/',
        ext: '.js',
        options: {
          bare: true,
          sourceMap: true
        }
      }
    },

    jasmine: {
      src: 'js/**/*.js',
      options: {
        specs: 'test/spec/*Spec.js',
        helpers: 'test/spec/*Helper.js'
      }
    },

    watch: {
      grunt: {
        files: ['Gruntfile.js']
      },
      coffee: {
         files: 'coffee/**/*.coffee',
         tasks: ['coffee:compile']
      },
      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.registerTask('test', ['jasmine']);
  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
};