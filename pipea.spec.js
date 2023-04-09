import test from "ava";
import {pipea} from "./pipea.js";

const a = Math.random() * 1000 | 0;

function REAL(a) {
   const b = a + 1;
   return a * b;
}

const id = x => x;
const add1 = x => x + 1;
const mul = (a, b) => a * b;
const app = fn => ary => fn(...ary);
const FICTION = pipea([id, add1], app(mul));

test("mul works", t => {
   t.is(app(mul)([3, 4]), 12);
});

test(`REAL/FICTION ${a}`, t => {
   t.is(REAL(a), FICTION(a));
});
