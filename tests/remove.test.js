const test = require("ava")
const immutable = require("seamless-immutable")
const seamlessImmutablePatch = require("../")

test("remove op", (t) => {
  const obj = immutable({
    b: {
      c: 2,
    },
  })

  const patched = seamlessImmutablePatch(obj, [
    {
      op: "remove",
      path: "/b/c",
    },
  ])

  t.deepEqual(patched, {
    b: {},
  })
})
