#!/usr/bin/env node
'use strict';
const meow = require('meow');
const awful = require('.');

const cli = meow({
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
