/* jshint node: true */

module.exports = function(grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    // Task configuration.
    clean: {
      dist: ['dist']
    },

    recess: {
      options: {
        compile: true
      },
      css: {
        src: ['less/bootstrap-table-responsive.less'],
        dest: 'dist/css/<%= pkg.name %>.css'
      },
      min: {
        options: {
          compress: true
        },
          src: ['less/bootstrap-table-responsive.less'],
        dest: 'dist/css/<%= pkg.name %>.min.css'
      }
    },

    watch: {
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src', 'qunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'qunit']
      },
      recess: {
        files: 'less/*.less',
        tasks: ['recess']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-recess');

  // CSS distribution task.
  grunt.registerTask('dist', ['recess']);

  // Default task.
  grunt.registerTask('default', ['dist']);
};
