module.exports = function(grunt) {

  var config = {
    frente: {
      js: ['libs/jquery-2.0.3.js','libs/jquery.mobile-1.4.0.js','libs/angular.js','libs/angular-mocks.js'],
      css: ['themes/angular-csp.css','themes/goddy-theme.min.css','themes/jquery.mobile.flatui.icons.css','themes/jquery.mobile.structure-1.4.0.min.css']
    }
  };

  grunt.initConfig({
    // pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      js: {
        src: config.frente.js,
        dest: 'libs/libs.js'
      },
      css: {
        src: config.frente.css,
        dest: 'themes/libs.css'
      }
    },
    uglify: {
      dist: {
        files: {
          'libs/libs.js': ['<%= concat.js.dest %>']
        }
      }
    },
    cssmin: {
      options: {
        keepSpecialComments: 0
      },
      dist: {
        src: ['themes/libs.css'],
        dest: 'themes/libs.css'
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('test', ['qunit']);

  grunt.registerTask('default', ['concat','uglify','cssmin']);
}