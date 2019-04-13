#!/usr/bin/env node
var markdown2text = require('./');

var data = '';
process.stdin.on('data', function (chunk) {
  data += chunk.toString('utf-8');
});

process.stdin.on('end', function () {
  process.stdout.write(markdown2text(data));
});
