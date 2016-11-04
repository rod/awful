#!/usr/bin/env node
'use strict';

const argv = require('minimist')(process.argv.slice(2));
const pkg = require('./package.json');
const awful = require('./');

if (argv.help) {
  console.log([
    '',
    pkg.description,
    '',
    'Usage',
    '  $ awful',
    '  miserable',
    '',
    '  $ awful --all',
    '  lousy',
    '  miserable',
    '  ...',
    '',
    'Options',
    '  --all  Get all the words instead of a random word',
  ].join('\n'));
  return;
}

if (argv.version) {
  console.log(pkg.version);
  return;
}

if (argv.all) {
  console.log(awful.words.join('\n'));
  return;
}

console.log(awful());
