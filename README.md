# seamless-immutable-patch

[![npm version](https://badge.fury.io/js/seamless-immutable-patch.svg)](https://badge.fury.io/js/seamless-immutable-patch)
[![Test Status](https://github.com/UniversalDataTool/seamless-immutable-patch/workflows/Release/badge.svg)](https://github.com/UniversalDataTool/seamless-immutable-patch/actions)

Execute [JSON Patches](https://tools.ietf.org/html/rfc6902#section-4.5) on [seamless-immutable](https://github.com/rtfeldman/seamless-immutable) objects.

## Installation

`npm install seamless-immutable-patch`

## Usage

```javascript
const immutable = require("seamless-immutable")
const seamlessImmutablePatch = require("seamless-immutable-patch")

const obj = immutable({
  a: 1,
  b: {
    c: 2,
  },
})

const patched = seamlessImmutablePatch(obj, [
  {
    op: "replace",
    path: "/b/c",
    value: 3,
  },
])

/*

> patched

immutable({
  a: 1,
  b: {
    c: 3,
  },
})


*/
```
