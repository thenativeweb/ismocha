'use strict';

var isMocha = function isMocha() {
  // If we run this in the browser, e.g. by using webpack, there is no
  // process.argv array. Anyway, then, we are also not run using Mocha.
  if (!process || !process.argv || !process.argv[1]) {
    return false;
  }

  return process.argv[1].includes('_mocha');
};

module.exports = isMocha;