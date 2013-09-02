module.exports = function (grunt) {
    grunt.initConfig({
        // The clean task ensures the parsed css is removed
        clean: ["_site/css/"],

        // Compress generated css files
        cssmin: {
            "css/screen.css": ["css/screen.css"]
        },

        // Automatically run a task when a file changes
        watch: {
            styles: {
                files: ["less/*"],
                tasks: "less"
            }
        },

        // Compile specified less files
        less: {
            development: {
                options: {
                    paths: ["bower_components/bootstrap/less", "less"]
                },
                files: {
                    "miller.css": "less/main.less"
                }
            },
            production: {
                options: {
                    paths: ["bower_components/bootstrap/less", "less"],
                    yuicompress: true
                },
                files: {
                    "miller.css": "less/main.less"
                }
            }
        },

        // Add shell tasks
        shell: {
            copyCss: {

            }
        }
    });

	// Load tasks so we can use them
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-shell");

    // The default task will show the usage
    grunt.registerTask("default", "Prints usage", function () {
        grunt.log.writeln("");
        grunt.log.writeln("Product site development");
        grunt.log.writeln("------------------------");
        grunt.log.writeln("");
        grunt.log.writeln("* run 'grunt --help' to get an overview of all commands.");
        grunt.log.writeln("* run 'grunt dev' to start developing.");
    });

    // The dev task will be used during development
    grunt.registerTask("dev", ["clean", "less:compile", "watch:styles"]);
};