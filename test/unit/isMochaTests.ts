import { assert } from 'assertthat';
import childProcess from 'child_process';
import { isMocha } from '../../lib/isMocha';
import path from 'path';

suite('isMocha', (): void => {
  test('is a function.', async (): Promise<void> => {
    assert.that(isMocha).is.ofType('function');
  });

  test('returns true.', async (): Promise<void> => {
    assert.that(isMocha()).is.true();
  });

  test('returns false when not run using Mocha.', async function (): Promise<void> {
    this.timeout(5 * 1000);
    /* eslint-disable no-sync */
    const result = childProcess.execSync('ts-node runIsMocha.ts', {
      cwd: path.join(__dirname, '..', 'shared', 'helpers'),
      encoding: 'utf8'
    });
    /* eslint-enable no-sync */

    assert.that(result.trim()).is.equalTo('false');
  });
});
