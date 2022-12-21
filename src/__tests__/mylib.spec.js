import { mycalc } from "../mylib.js"

describe("mysuite1",() => {
  test("mytest1", () => {
    const result = mycalc(4,5)
    expect(result).toBe(9)
  })
} )
