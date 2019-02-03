'use strict';
const uniqueRandomArray = require('unique-random-array');
const words = require('./words.json');

exports.all = words;
exports.random = uniqueRandomArray(words);
