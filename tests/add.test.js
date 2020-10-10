const test = require("ava")
const immutable = require("seamless-immutable")
const seamlessImmutablePatch = require("../")

test("add op", (t) => {
  const obj = immutable({
    a: 1,
    b: [1, 2],
  })

  const patched = seamlessImmutablePatch(obj, [
    {
      op: "add",
      path: "/b",
      value: 3,
    },
  ])

  t.deepEqual(patched, {
    a: 1,
    b: [1, 2, 3],
  })
})

test("add op with /a/b/-", (t) => {
  const obj = immutable({
    a: 1,
    b: [1, 2],
  })

  const patched = seamlessImmutablePatch(obj, [
    {
      op: "add",
      path: "b/-",
      value: 3,
    },
  ])

  t.deepEqual(patched, {
    a: 1,
    b: [1, 2, 3],
  })
})
