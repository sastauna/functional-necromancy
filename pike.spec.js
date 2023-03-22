import test from "ava";
import {pike} from "./pike.js";

const a = Math.random() * 1000 | 0;
const b = Math.random() * 1000 | 0;
test(`multiplication ${a} * ${b}`, t => {
   const mul = pike(2, [(a, b) => a * b], [[0, 1]]);
   t.is(mul(a, b), a * b);
});
