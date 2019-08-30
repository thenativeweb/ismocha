# ismocha

ismocha checks whether code is run using Mocha.

## Installation

```shell
$ npm install ismocha
```

## Quick start

First you need to integrate ismocha into your application.

```javascript
const isMocha = require('ismocha');
```

Then call the `isMocha` function. If you run this in a process started by Mocha, the function will return `true`; otherwise it will return `false`:

```javascript
if (isMocha()) {
  // ...
}
```

## Running the build

To build this module use [roboter](https://www.npmjs.com/package/roboter).

```shell
$ npx roboter
```
