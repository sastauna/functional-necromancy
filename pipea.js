import * as S from "./shared.js";

/**
 * @param {...(S.any_fn | S.any_fn[])} fns
 *
 * Returns a function which is a ltr composition of fns. If an element f in fns
 * is an array of functions instead of a function, each function within f is
 * applied and their results are returned as an array.
 */
export const pipea = (...fns) => arg => fns.reduce((prev, fn_or_fns) => {
   if (Array.isArray(fn_or_fns)) {
      return fn_or_fns.map(fn => fn(arg));
   } else {
      return fn_or_fns(prev);
   }
}, arg);
