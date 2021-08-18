/**
 * This file contains the source code for utility functions in the HTML
 * Minifier library.
 *
 * @author Juriy "kangax" Zaytsev, ChowderMan
 * @license AGPLv3
 * @see https://github.com/kangax/html-minifier
 * @see https://github.com/kangax/html-minifier/blob/gh-pages/LICENSE
 * @todo rewrite this library from scratch in TypeScript and using newer ES6+
 * features.
 */

'use strict';

function createMap(values, ignoreCase) {
  var map = {};
  values.forEach(function(value) {
    map[value] = 1;
  });
  return ignoreCase ? function(value) {
    return map[value.toLowerCase()] === 1;
  } : function(value) {
    return map[value] === 1;
  };
}

exports.createMap = createMap;
exports.createMapFromString = function(values, ignoreCase) {
  return createMap(values.split(/,/), ignoreCase);
};
