'use strict';
var uniqueRandomArray = require('unique-random');
var words = require('./words.json');

module.exports = uniqueRandomArray(words);
module.exports.words = words;
