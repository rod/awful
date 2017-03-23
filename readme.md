# awful

[![Build Status](https://travis-ci.org/rod/awful.svg?branch=master)](https://travis-ci.org/rod/awful)

> 👎 Get words like awful

## Install
~~~ bash
npm install --save awful
~~~

## Usage

~~~ javascript
var awful = require('awful');

awful.random();
//=> 'terrible'
~~~

## API

### .all

Type: `array`

All the words

### .random()

Type: `string`

Single random word

## CLI

~~~ bash
npm install --global awful
~~~

~~~ bash
awful --help

Usage
  $ awful
  crummy

  $ awful --all
  abominable
  abysmal
  ...

Options
  --all Get all the words
~~~

## License
MIT © [Rodney Dennis](https://github.com/rod)
