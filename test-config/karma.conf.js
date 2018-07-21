/**
 * 
 * This a karma file for handling multiple environments. 
 * 
 */

var webpackConfig = require('./webpack.test.js');

module.exports = function(config) {
  var _config = {
    basePath: '../',

    frameworks: ['jasmine'],

    files: [
      {
        pattern: './test-config/karma-test-shim.js',
        watched: true
      },
      {
        pattern: './src/assets/**/*',
        watched: false,
        included: false,
        served: true,
        nocache: false
      },
      'src/**/*.spec.*'
    ],
    customLaunchers: {
      Chrome_travis_ci: {
          base: 'Chrome',
          flags: ['--no-sandbox']
      },
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--headless',
          '--disable-gpu',
          '--disable-translate',
          '--disable-extensions',
          // Without a remote debugging port, Google Chrome exits immediately.
          '--remote-debugging-port=9876'
        ]
      }
    },
    proxies: {
      '/assets/': './src/assets/'
    },

    preprocessors: {
      './test-config/karma-test-shim.js': ['webpack'],
      './src/**/*.spec.*':['webpack']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: false
    },

    browserConsoleLogOptions: {
      level: 'log',
      format: '%b %T: %m',
      terminal: true
    },

    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },

    reporters: config.coverage ? ['kjhtml', 'dots'] : ['kjhtml', 'dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
  };

  // Overrides parameters if in CI environment
  if (process.env.TRAVIS || process.env.CIRCLECI) {
    _config.browsers = ['ChromeHeadlessNoSandbox'];
    _config.singleRun = true;
    _config.concurrency = 1;
    _config.browserDisconnectTimeout = 25000;
    _config.browserNoActivityTimeout = 25000;
  }
 
  config.set(_config);
};
