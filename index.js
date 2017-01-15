'use strict'

const isDefined = require('is-defined');

module.exports = function isDefinedEval (identifier) {
  return eval(isDefined(identifier));
}
