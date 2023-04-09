import * as S from "./shared.js";

/**
 * (Stands for Rob Pike)
 *
 * @param {number} arity
 * @param {S.any_fn[]} fns
 * @param {(S.index | S.index[])[]} selectors
 *
 * Executes fns ltr. Function arguments are determined by their corresponding
 * selector which is an index into the tape.
 *
 * The initial state of the tape is `arity` arguments from outside concatenated
 * with `fns`. Missing outside arguments are `undefined`.
 *
 * When a function is executed, it's corresponding entry in the tape is replaced
 * with the result.
 */
export const pike = (arity, fns, selectors) => (...outside) => {
   const outside_used = outside.slice(0, arity);
   if (outside_used.length < arity) {
      /** @type {undefined[]} padding */
      var padding = Array(arity - outside_used.length);
   } else {
      var padding = [];
   }
   const tape = [...outside_used, ...padding, ...fns];
   const instructions = S.zip(fns, selectors.map(S.coerce_to_array));
   for (let instruction_idx in instructions) {
      const [fn, selections] = instructions[instruction_idx];
      const args = selections.map(idx => tape[idx]);
      const tape_idx_of_fn = arity + instruction_idx;
      tape[tape_idx_of_fn] = fn(...args);
   }
   return tape[tape.length - 1];
};
