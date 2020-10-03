const test = require("ava")
const immutable = require("seamless-immutable")
const seamlessImmutablePatch = require("../")

test("copy op", (t) => {
  const obj = immutable({
    a: 1,
    b: {
      c: 2,
    },
  })

  const patched = seamlessImmutablePatch(obj, [
    {
      op: "copy",
      from: "a",
      path: "/b",
    },
  ])

  t.deepEqual(patched, {
    a: 1,
    b: 1,
  })
})
