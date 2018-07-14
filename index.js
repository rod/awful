'use strict';
const uniqueRandomArray = require('unique-random-array');
const awful = require('./awful.json');

exports.all = awful;
exports.random = uniqueRandomArray(awful);
