module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

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

	compass: {
	 	dist:{
	 		options: {              
				raw: 'preferred_syntax = :sass\n',
				relativeAssets: true,
				sassDir: 'css/sass',
				cssDir: 'css',
				imagesDir: 'img',
				outputStyle: 'compressed'
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
            tasks: ['compass']
        }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');

  
  grunt.registerTask('default', ['concat', 'uglify', 'compass']);
  //grunt.registerTask('default', ['compass']);
};