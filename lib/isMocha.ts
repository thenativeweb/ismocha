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

  const globals = Object.keys(global);
  let hasTestInterface = false;

  /* eslint-disable no-labels */
  nextInterface: for (const testInterface of testInterfaces) {
    for (const functionName of testInterface) {
      if (!globals.includes(functionName)) {
        continue nextInterface;
      }
    }
    hasTestInterface = true;
    break;
  }
  /* eslint-enable no-labels */

  return process.argv[1].includes('.bin/mocha') || hasTestInterface;
};

export { isMocha };
