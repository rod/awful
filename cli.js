#!/usr/bin/env node
'use strict';
var meow = require('meow');
var awful = require('./');

var cli = meow({
  help: [
    'Examples',
    '  $ awful',
    '  terrible',
    '',
    '  $ awful --all',
    '  abominable',
    '  abysmal',
    '  ...',
    '',
    'Options',
    '  --all   Get all names instead of a random name'
  ]
});

console.log(cli.flags.all ? awful.all.join('\n') : awful.random());
