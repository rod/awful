# Awful [![Build Status](https://travis-ci.org/rod/awful.svg?branch=master)](https://travis-ci.org/rod/awful)

> Get awful like words

## Install
~~~
$ npm install --save awful
~~~

## Usage

~~~
const awful = require('awful');

awful();
//=> dreadful

awful();
//=> terrible

awful.words;
//=> ['dreadful', 'terrible', ...]
~~~

## API

### awful()

Type: `string`
Random awful like word.

### awful.words

Type: `array`
All the words

## CLI

~~~
$npm install --global awful
~~~

~~~
$ awful --help

  Examples
    $ awful
    miserable

    $ awful --all
    lousy
    miserable
    ...

  Options
    --all Get all the words instead of a random word
~~~

## License
MIT © [Rodney Dennis](https://github.com/rod)
