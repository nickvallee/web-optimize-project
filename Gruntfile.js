module.exports = function (grunt) {

grunt.initConfig({
critical: {
  dist: {
    options: {
      base: './',
      dimensions: [{
        width: 1300,
        height: 900
       },
       {
        width: 500,
        height: 900
      }]
    },
    files: [
      {src: ['docs/*.html'], dest: './'},
      {src: ['docs/assets/views/pizza.html'], dest: './docs/assets/views/pizza.html'}
    ]
  }
}
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-critical');

  // Default tasks.
  grunt.registerTask('default', ['critical']);
};