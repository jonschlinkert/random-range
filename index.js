/*!
 * random-range <https://github.com/jonschlinkert/random-range>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(max, repeat) {
  repeat = repeat || 1;
  var arr = [];

  for (var i = 0; i < repeat; i++) {
    arr.push(randRange(max));
  }

  if (arr.length === 1) {
    return arr[0];
  }

  return arr;
};

function randRange(max) {
  var from = randInt(0, max);
  var to = randInt(from, max);
  return [from, to];
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
