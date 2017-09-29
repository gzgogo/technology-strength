const PATH = {
  src: 'src',
  dst: 'dst'
};


module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      //Compact Format
      all: {
        src: [PATH.dst + '/**', '!' + PATH.dst]
      },
      html: {
        src: [PATH.dst + '/*.html']
      },
      css: {
        src: [PATH.dst + '/**.css']
      },
      js: {
        src: [PATH.dst + '/**.js']
      }
    },
    copy: {
      all: {
        files: [
          {
            expand: true,
            cwd: PATH.src,
            src: ['**'],
            dest: PATH.dst
          }
        ]
      },
      lib: {
        files: [
          {
            expand: true,
            cwd: PATH.src + '/lib',
            src: ['*'],
            dest: PATH.dst + '/lib'
          }
        ]
      },
      assets: {
        files: [
          {
            expand: true,
            cwd: PATH.src + '/assets',
            src: ['*'],
            dest: PATH.dst + '/assets'
          }
        ]
      },
      html: {
        files: [
          {
            expand: true,
            cwd: PATH.src,
            src: ['*.html'],
            dest: PATH.dst
          }
        ]
      },
      css: {
        files: [
          {
            expand: true,
            cwd: PATH.src,
            src: ['**.css'],
            dest: PATH.dst
          }
        ]
      },
      js: {
        files: [
          {
            expand: true,
            cwd: PATH.src,
            src: ['**.js'],
            dest: PATH.dst
          }
        ]
      }
    },
    less: {
      dev: {
        options: {
          paths: [PATH.src]  // @import 加载文件的路径
        },
        files: {
          "src/style.css": PATH.src + "/style.less"
        }
      },
      prod: {
        options: {
          paths: [PATH.src]  // @import 加载文件的路径
        },
        files: {
          "dst/style.css": PATH.src + "/style.less"
        }
      }
    },
    //为css3属性添加前缀
    autoprefixer: {
      build: {
        //动态文件对象
        file: [
          {
            expand: true,
            cwd: PATH.src,
            src: [ '*.css' ],
            dest: PATH.dst
          }
        ]
      }
    },
    //压缩css
    cssmin: {
      //文件头部输出信息
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        //美化代码
        beautify: {
          //中文ascii化，非常有用！防止中文乱码的神配置
          ascii_only: true
        }
      },
      build: {
        files: [
          {
            expand: true,
            //相对路径
            cwd: PATH.src,
            src: '*.css',
            dest: PATH.dst
          }
        ]
      }
    },
    //压缩js
    uglify: {
      build: {
        options: {
          mangle: false, //不混淆变量名
          preserveComments: 'all', //不删除注释，还可以为 false（删除全部注释），some（保留@preserve @license @cc_on等注释）
          footer:'\n/*! <%= pkg.name %> 最后修改于： <%= grunt.template.today("yyyy-mm-dd") %> */'//添加footer
        },
        files: [
          {
            expand: true,
            //相对路径
            cwd: PATH.src,
            src: '*.js',
            dest: PATH.dst
          }
        ]
      }
    },
    jshint: {
      src: PATH.dst + '/*.js'
    },
    //压缩HTML
    htmlmin: {
      options: {
        removeComments: true,
        removeCommentsFromCDATA: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: false,
        removeRedundantAttributes: false,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeOptionalTags: true
      },
      html: {
        files: [
          {
            expand: true,
            cwd: PATH.src,
            src: ['*.html'],
            dest: PATH.dst
          }
        ]
      }
    },
    watch: {
      css: {
        files: [PATH.src + '/*.less'],
        tasks: ['less:dev']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          PATH.src + '/index.html',
          PATH.src + '/index.js',
          PATH.src + '/style.less'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        open: true,
        livereload: 35729,
        // Change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      server: {
        options: {
          port: 9001,
          base: PATH.src
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('c', ['clean:all']);
  grunt.registerTask('less2css', ['less']);
  grunt.registerTask('mincss', ['cssmin']);
  grunt.registerTask('addprefix', ['autoprefixer']);
  grunt.registerTask('minjs', ['uglify']);
  grunt.registerTask('checkjs', ['jshint']);

  grunt.registerTask('w',['connect','watch']);
  grunt.registerTask('default',['clean:all','copy:lib','copy:assets','less2css:prod','autoprefixer','cssmin','jshint','uglify','htmlmin']);
};