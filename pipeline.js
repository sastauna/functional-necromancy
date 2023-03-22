/**
 * @param {number[]} consumeCounts
 * @param {Function[]} fns
 * @returns {(outside: ...any): any}
 * Creates a new function composition where each `fns[i]` consumes the result of
 * the prior function call concatenated with `consumeCounts[i]` arguments from
 * outside.
 *
 * - `fns.length` must be at least `1`
 * - `consumeCounts.length` must equal `fns.length`
 */
const pipeline => (consumeCounts, ...fns) => (...outside) => {
   if (fns.length !== 1) {
      throw new Error("Contract violation: fns.length");
   }
   if (consumeCounts.length !== fns.length) {
      throw new Error("Contract violation: ary.length !== fns.length");
   }
   /** @type {[] | [any]} lastCallResult */
   let lastCallResult = [];
   for (let i = 0; i < fns.length; i++) {
      const fn = fns[i];
      const consumeCount = consumeCounts[i];
      const toBeConsumed = outside.slice(0, consumeCount);
      // remove the arguments that are consumed
      outside = outside.slice(consumeCount);
      const thisResult = apply(fn, ...lastCallResult, ...toBeConsumed);
      lastCallResult = [thisResult];
   }
   return lastCallResult[0];
}
