var seleniumServer = require('selenium-server');
var phantomjs = require('phantomjs-prebuilt');
var chromeDriver = require('chromedriver');
var geckoDriver = require('geckodriver');
module.exports = {
  'src_folders': ['tests'],
  'output_folder': 'reports',
  'custom_commands_path': '',
  'custom_assertions_path': '',
  'page_objects_path': 'page-objects',
  'globals_path': '',
  'test_workers': {'enabled': false, 'workers': 'auto'},
  'live_output': true,
  'selenium': {
    'start_process': true,
    'server_path': seleniumServer.path,
    'host': '127.0.0.1',
    'port': 4444,
    'cli_args': {
      'webdriver.chrome.driver': chromeDriver.path,
      'webdriver.gecko.driver': geckoDriver.path,
    },
  },
};