module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    proj: {
        // Configurable paths
        app:  'app',
        dist: 'dist'
    },

    concat: {
  	  options: {
  	    separator: ';'
  	  },
  	  dist: {
  	    src: ['js/plugins.js','js/application.js'],
  	    dest: 'js/main.js'
  	  }
  	},

  	uglify: {
  	  dist: {
  	    files: {
  	      'js/main.min.js': ['<%= concat.dist.dest %>']
  	    }
  	  }
  	},

    stylus: {
      compile: {
        options: {
          // paths: ['path/to/import', 'another/to/import'],
          // urlfunc: 'embedurl', // use embedurl('test.png') in our code to trigger Data URI embedding
          // use: [
          //   require('fluidity') // use stylus plugin at compile time
          // ],
          // import: [      //  @import 'foo', 'bar/moo', etc. into every .styl file
          //   'foo',       //  that is compiled. These might be findable based on values you gave
          //   'bar/moo'    //  to `paths`, or a plugin you added under `use`
          // ]
        },
        files: {
          'css/main.css': 'css/main.styl' // 1:1 compile
          // 'path/to/another.css': ['path/to/sources/*.styl', 'path/to/more/*.styl'] // compile and concat into single file
        }
      }
    },

  	watch: {
      scripts: {
          files: 'js/**/*',
          tasks: ['concat','uglify']
      },
      styles: {
          files: 'css/**/*',
          tasks: ['stylus']
      }
    }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-stylus');


    grunt.registerTask('default', ['concat', 'uglify', 'stylus']);
};