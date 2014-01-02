module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // transport: {
        //     dialog: {
        //         files : [
        //             {
        //                 src : '*',
        //                 dest : '.build/styles/component/dialog/src'
        //             }
        //         ]
        //     }
        // },
        // concat: {
        //     dialog: {
        //         files: {
        //             "dist/styles/component/dialog/src/dialog.js": [".build/styles/component/dialog/src/dialog.js"]
        //         }
        //     }
        // },
        uglify: {
            build: {
                src: "build/global_min.js",
                dest: "build/min.js"
            }
        },
        concat: {
            options: {
                separator: ';',
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                src: ['javascripts/*.js'],
                dest: 'build/global_min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // grunt.registerTask('default', ['uglify']);
    grunt.registerTask('default', ['concat','uglify']);
};