'use strict';

module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        docco: {
            debug: {
                src: ['*.js'],
                options: {
                    output: 'docs/'
                }
            }
        }
    });

    // Load docco pluging
    grunt.loadNpmTasks('grunt-docco');

    // Register task to generate the documentation
    grunt.registerTask('default', ['docco']);
};