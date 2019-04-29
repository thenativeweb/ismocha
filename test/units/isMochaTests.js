'use strict';

const childProcess = require('child_process'),
      path = require('path');

const assert = require('assertthat');

const isMocha = require('../../lib/isMocha');

suite('isMocha', () => {
  test('is a function.', async () => {
    assert.that(isMocha).is.ofType('function');
  });

  test('returns true.', async () => {
    assert.that(isMocha()).is.true();
  });

  test('returns false when not run using Mocha.', async () => {
    /* eslint-disable no-sync */
    const result = childProcess.execSync('node runIsMocha.js', {
      cwd: path.join(__dirname, '..', 'shared', 'helpers'),
      encoding: 'utf8'
    });
    /* eslint-enable no-sync */

    assert.that(result.trim()).is.equalTo('false');
  });
});
