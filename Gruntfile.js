module.exports = function(grunt) {

  grunt.initConfig({

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Generate pictures in different sizes */
    responsive_images: {
      dev: {
        options: {
          sizes: [{

            name: 'small',
            width: 400,
            /*suffix: '_small',*/
            quality: 30
          },{
            name: 'medium',
            width: 750,
            /*suffix: '_medium',*/
            quality: 30
          },{
            name: 'large',
            width: 1500,
            /*suffix: '_large_1x',*/
            quality: 30
          },{
            name: 'xlarge',
            width: 3000,
            /*suffix: '_large_2x',*/
            quality: 30
          }]
        },

        files: [{
          expand: true,
          src: ['*.{gif,JPG,png}'],
          cwd: 'images_old/',
          dest: 'images/'
        }]
      }
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};