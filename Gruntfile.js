module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      target: {
        files: {
          'css/style.min.css': [
            'css/source/bootstrap.css',
            'css/source/bootstrap-glyphicons.css',
            'css/source/stack-interface.css',
            'css/source/theme.css',
            'css/source/custom.css',
            'css/source/font-sourcesanspro.css'
          ]
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      custom: {
        files: {
          'js/scripts.min.js': ['js/source/scripts.js']
        }
      },
      libs: {
        files: {
          'js/libs.min.js': ['js/source/isotope.min.js', 'js/source/smooth-scroll.min.js']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['cssmin', 'uglify']);

};
