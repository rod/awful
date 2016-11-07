# awful [![Build Status](https://travis-ci.org/rod/awful.svg?branch=master)](https://travis-ci.org/rod/awful)

> Get words like awful

## Install
~~~ bash
$ npm install --save awful
~~~

## Usage

~~~ javascript
const awful = require('awful');

awful();
//=> crummy

awful();
//=> vile

awful.words;
//=> ['abominable', 'abysmal', ...]
~~~

## API

|| Type | Description|
|---|---|---|
| **awful()** | `string` | Random word like awful |
| **awful.words** | `array` | All the words |     

## CLI

~~~ bash
$npm install --global awful
~~~

~~~ bash
$ awful --help

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
