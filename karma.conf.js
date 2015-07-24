module.exports = function(config) {
  var configuration = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // { pattern: 'test/**/*.spec.ts', watched: false }
      { pattern: 'spec.bundle.js', watched: false }
    ],

    // list of files to exclude
    exclude: [
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      moduleName: 'mpy'
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'spec.bundle.js': ['webpack', 'sourcemap']
    },

    webpack: {

      resolve: {
        root: __dirname,
        extensions: ['','.ts','.js','.json'],
        alias: {
          'app': 'src/app',
          'common': 'src/common',
        }
      },
      devtool: 'inline-source-map',
      module: {
        loaders: [
          // Support for *.json files.
          { test: /\.json$/,  loader: 'json' },

          // Support for CSS
          { test: /\.css$/,   loader: 'to-string!css' },

          // Support for sass files
          { test: /\.scss$/, loader: 'to-string!css!sass?' +
            'includePaths[]=' + (path.resolve(__dirname, './src/common/styles'))
          },

          // support for .html as raw text
          { test: /\.html$/,  loader: 'raw' },

          // support for .jade as html
          { test: /\.jade$/,  loader: 'jade' },

          // support for .png files as inline base64
          { test: /\.png$/, loader: 'url-loader?limit=100000' },

          // support for .jpg files
          { test: /\.jpg$/, loader: 'file-loader' }
        ]
      },
      stats: { colors: true, reasons: true },
      debug: false
    },

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers : ['PhantomJS'],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    plugins : [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ],

    preprocessors: {
      'src/**/*.html': ['ng-html2js']
    }
  };

  config.set(configuration);
};
