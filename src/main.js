import { mycalc, myfetch } from "./mylib.js"

const a = mycalc(3,4)
console.log(a)

const r = await myfetch()
console.log(r)

