# seamless-immutable-patch

Execute [JSON Patches](https://tools.ietf.org/html/rfc6902#section-4.5) on [seamless-immutable]() objects.

## Installation

`npm install seamless-immutable-patch`

## Usage

import seamlessImmutablePatch from "seamless-immutable-patch"
import seamless from "seamless-immutable"


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

patched

/*
{
  a: 1,
  b: {
    c: 3,
  },
}
*/


```
