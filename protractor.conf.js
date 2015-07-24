'use strict';

exports.config = {
  baseUrl: 'http://localhost:3000',

  allScriptsTimeout: 11000,

  framework: 'jasmine',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000,
    showTiming: true
  },

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },

  specs: [
    'e3e/**/*.spec.js'
  ],

  onPrepare: function() {
    browser.ignoreSynchronization = true;
  }
};
