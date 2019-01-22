'use strict';

const childProcess = require('child_process'),
      path = require('path');

const assert = require('assertthat');

const isMocha = require('../../src/isMocha');

suite('isMocha', () => {
  test('is a function.', done => {
    assert.that(isMocha).is.ofType('function');
    done();
  });

  test('returns true.', done => {
    assert.that(isMocha()).is.true();
    done();
  });

  test('returns false when not run using Mocha.', done => {
    /* eslint-disable no-sync */
    const result = childProcess.execSync('node runIsMocha.js', {
      cwd: path.join(__dirname, '..', 'shared', 'helpers'),
      encoding: 'utf8'
    });
    /* eslint-enable no-sync */

    assert.that(result.trim()).is.equalTo('false');
    done();
  });
});
