module.exports = function(grunt) {
    grunt.initConfig({

        /* Babel task.
         * Compile all ES6 js files into ES5 files. They will be stored in a
         * temporary directory called <.build>.
         */
        babel: {
            options: {
                sourceMap: false,
                presets: [
                    'babel-preset-es2015',
                    'babel-preset-react'
                ],
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.js'],
                    ext: '.js',
                    dest: '.build',
                }]
            }
        },

        /* Require task.
         * Precompile all files into a single file.
         * - Everything will be minified and uglyfied.
         */
        requirejs: {
            build: {
                options: {
                    baseUrl: '.build/',
                    paths: {
                        'jquery': '../bower_components/jquery/dist/jquery.min',
                        'react': '../bower_components/react/react.min',
                        'react-dom': '../bower_components/react/react-dom.min',
                    },
                    include: ['test-library'],
                    out: 'dist/library.js',
                    optimize: 'none',
                },
            },
        },

        /* Clean task.
         * Clean the temporary <.build> dir.
         */
        clean: {
            build: {
                src: ['.build/**/*.js', '.build']
            }
        }
    });

    // Load grunt tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-babel');

    // Register build task.
    grunt.registerTask('build', ['babel', 'requirejs', 'clean']);
}
