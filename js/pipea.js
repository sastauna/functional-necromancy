/**
 * @param {...(Function | Function[])} fns
 *
 * Returns a function which is a ltr composition of fns. If an element f in fns
 * is an array of functions instead of a function, each function within f is
 * applied and their results are returned as an array.
 */
export const pipea = (...fns) => arg => fns.reduce((prev, fn_or_fns) => {
   if (Array.isArray(fn_or_fns)) {
      const fns = fn_or_fns;
      return fns.map(fn => fn(prev));
   } else {
      const fn = fn_or_fns;
      return fn(fn_or_fns);
   }
}, arg);
