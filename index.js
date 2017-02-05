'use strict';
var uniqueRandomArray = require('unique-random-array');
var awful = require('./awful.json');

exports.all = awful;
exports.random = uniqueRandomArray(awful);
