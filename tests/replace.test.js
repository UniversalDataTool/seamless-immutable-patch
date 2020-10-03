const test = require("ava")
const immutable = require("seamless-immutable")
const seamlessImmutablePatch = require("../")

test("replace op", (t) => {
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

  t.deepEqual(patched, {
    a: 1,
    b: {
      c: 3,
    },
  })
})
