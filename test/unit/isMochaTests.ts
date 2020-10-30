import { assert } from 'assertthat';
import childProcess from 'child_process';
import { isMocha } from '../../lib/isMocha';
import path from 'path';

suite('isMocha', (): void => {
  test('returns true.', async (): Promise<void> => {
    assert.that(isMocha()).is.true();
  });

  test('returns false when not run using Mocha.', async function (): Promise<void> {
    this.timeout(5_000);
    // eslint-disable-next-line no-sync
    const result = childProcess.execSync('ts-node runIsMocha.ts', {
      cwd: path.join(__dirname, '..', 'shared', 'helpers'),
      encoding: 'utf8'
    });

    assert.that(result.trim()).is.equalTo('false');
  });
});
