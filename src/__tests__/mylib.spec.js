import { myfetch, mycalc } from "../mylib.js"

describe("mysuite1",() => {
  test("mytest1", () => {
    const result = mycalc(4,5)
    expect(result).toBe(9)
  })

  test("testfetch", async () => {
    const res = await myfetch()
    expect(res).toMatch(/nix/)
  })
} )
