import path from 'path';

const testInterfaces = [
  [ 'describe', 'context', 'it', 'specify', 'before', 'after', 'beforeEach', 'afterEach' ],
  [ 'suite', 'test', 'suiteSetup', 'suiteTeardown', 'setup', 'teardown' ],
  [ 'suite', 'test', 'before', 'after', 'beforeEach', 'afterEach' ]
];

const isMocha = function (): boolean {
  // If we run this in the browser, e.g. by using webpack, there is no
  // process.argv array. Anyway, then, we are also not run using Mocha.
  if (!process.argv[1]) {
    return false;
  }
  if (process.argv[1].includes(path.join('.bin', 'mocha'))) {
    return true;
  }

  // We can also use mocha via the API. In this case, argv might not contain
  // the mocha executable and we have to check the execution environment.
  const globals = Object.keys(global);

  /* eslint-disable no-labels */
  nextInterface: for (const testInterface of testInterfaces) {
    for (const functionName of testInterface) {
      if (!globals.includes(functionName)) {
        continue nextInterface;
      }
    }

    return true;
  }
  /* eslint-enable no-labels */

  return false;
};

export { isMocha };
