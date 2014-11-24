#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var schemas = require('../');

var opts = require("nomnom")
  .option('version', {
    flag: true,
    help: 'Print version and exit',
    callback: function() {
      fs.readFile(path.resolve(__dirname, '../package.json'), 'utf-8', function(err, file) {
        console.log(JSON.parse(file).version);
      });
    }
  })
  .parse();