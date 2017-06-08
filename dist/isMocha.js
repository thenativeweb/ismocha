'use strict';

var isMocha = function isMocha() {
  return process.argv[1].includes('_mocha');
};

module.exports = isMocha;