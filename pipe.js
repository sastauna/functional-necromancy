/** @typedef {{(...args: any[]): any}} any_fn */
/**
 * Returns a function which is an ltr composition of `fns`.
 * The first function can have variadic arguments but all of the following
 * functions must be unary.
 *
 * @param {any_fn[]} fns
 * @returns {(...args: any[]) => any}
 */
export const pipe = (...fns) => (...initial_args) =>
   fns.reduce((prev_args, this_fn) => [this_fn(...prev_args)], initial_args)[0];
