import test from "ava";
import {pipe} from "./pipe.js";

const a = Math.random() * 1000 | 0;
test(`(${a} + 1) * 2 works`, t => {
   const add1 = x => x + 1;
   const times2 = x => x * 2;
   const add1_times2 = pipe(add1, times2);
   t.is(add1_times2(a), (a + 1) * 2);
});
