# awful [![Build Status](https://travis-ci.org/rod/awful.svg?branch=master)](https://travis-ci.org/rod/awful)

> 👎 A terrible, horrible, no good, very bad npm package


## Install
~~~ bash
npm install [--global] awful
~~~


## Usage

~~~ javascript
const awful = require('awful');

awful.random();
//=> 'terrible'

awful.random();
//=> 'no good'

awful.all
//=> ['abominable', 'abysmal', 'appalling', ...]
~~~


## API

### `.all`

Type: `Array`

All the words in alphabetical order.

### `.random()`

- Type: `Function`

- Single random word.


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


## Want the opposite of this package?
- [superb](https://github.com/sindresorhus/superb)/[superb-cli](https://github.com/sindresorhus/superb-cli) - Get superb like words

## License
MIT © [Rodney Dennis](https://github.com/rod)
