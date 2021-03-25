# ismocha

ismocha checks whether code is run using Mocha.

## Status

| Category         | Status                                                                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Version          | [![npm](https://img.shields.io/npm/v/ismocha)](https://www.npmjs.com/package/ismocha)                                                      |
| Dependencies     | ![David](https://img.shields.io/david/thenativeweb/ismocha)                                                                                |
| Dev dependencies | ![David](https://img.shields.io/david/dev/thenativeweb/ismocha)                                                                            |
| Build            | ![GitHub Actions](https://github.com/thenativeweb/ismocha/workflows/Release/badge.svg?branch=main) |
| License          | ![GitHub](https://img.shields.io/github/license/thenativeweb/ismocha)                                                                      |

## Installation

```shell
$ npm install ismocha
```

## Quick start

First you need to integrate ismocha into your application.

```javascript
const { isMocha } = require('ismocha');
```

If you use TypeScript, use the following code instead:

```typescript
import { isMocha } from 'ismocha';
```

Then call the `isMocha` function. If you run this in a process started by Mocha, the function will return `true`; otherwise it will return `false`:

```javascript
if (isMocha()) {
  // ...
}
```

## Running quality assurance

To run quality assurance for this module use [roboter](https://www.npmjs.com/package/roboter):

```shell
$ npx roboter
```
