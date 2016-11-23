# awful

[![Travis](https://img.shields.io/travis/rod/awful.svg)]() [![npm](https://img.shields.io/npm/v/awful.svg)]() [![Libraries.io for GitHub](https://img.shields.io/librariesio/github/rod/awful.svg)]()

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
