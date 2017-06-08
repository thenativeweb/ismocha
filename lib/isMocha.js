'use strict';

const isMocha = function () {
  return process.argv[1].includes('_mocha');
};

module.exports = isMocha;
