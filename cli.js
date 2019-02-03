#!/usr/bin/env node
'use strict';
const meow = require('meow');
const awful = require('.');

const cli = meow(`
  Examples
    $ awful
      terrible

    $ awful --all
      abominable
      abysmal
      appalling
      ...

  Options
    --all   Get all the words instead of a random word
`);

console.log(cli.flags.all ? awful.all.join('\n') : awful.random());
