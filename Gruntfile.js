'use strict';

module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  require('time-grunt')(grunt);
  grunt.file.defaultEncoding = 'utf8';
  grunt.initConfig({
    project: {
      'dev': '.',
      'tmp': 'tmp',
      'css': 'stylus'
    },

    stylus: {
      'dev': {
        'options': {
          'compress': false,
          'paths': [
              'node_modules/node_modules/nib',
              'node_modules/jeet/stylus',
              'node_modules/rupture'
          ],
          'import': [
            'nib',
            'jeet',
            'rupture'
          ],
        },
        'files': [{
          'expand': true,
          'flatten': false,
          'cwd': '<%= project.css %>',
          'src': ['*.styl'],
          'dest': '<%= project.tmp %>/css',
          'ext': '.css'
        }]
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer-core')({browsers: 'last 1 version'}),
          require('csswring')
        ]
      },
      files: {
        'expand': true,
        'flatten': false,
        'cwd': '<%= project.tmp %>/css',
        'src': ['*.css'],
        'dest': '<%= project.dev %>/css',
        'ext': '.css'
      }
    },

    watch: {
      css: {
        files: ['<%= project.css %>/**/*'],
        tasks: ['styles']
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: '<%= project.dev %>/css/*.css'
        },
        options: {
          notify: true,
          watchTask: true,
          port: 8183,
          server: {
            baseDir: ['<%= project.dev %>']
          }
        }
      }
    },

    clean: {
      tmp: ['<%= project.tmp %>']
    }
  });

  grunt.registerTask('styles', [
    'stylus',
    'postcss'
  ]);

  grunt.registerTask('default', [
    'clean:tmp',
    'styles',
  ]);

  grunt.registerTask('serve', [
    'default',
    'browserSync',
    'watch'
  ]);
};
