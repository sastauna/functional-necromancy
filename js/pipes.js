// pipes is the (c)omplicated pipe system that Marcu(s) and (C)ole made
// this has been known to have been called pipec at one point.
/**
 * @param {any[]} args
 * @param {Number | Function} idx_or_fn
 */
const applyOrSelect = (args, idx_or_fn) => {
   if (Number.isInteger(idx_or_fn)) {
      const idx = idx_or_fn;
      return args[idx_or_fn];
   } else {
      const fn = idx_or_fn;
      return fn(...args)
   }
};

const pipes = (...ary) => (...args) => ary.reduce((prev, fn_or_ary) => {
   if (Array.isArray(fn_or_ary)) {
      const ary_of_fn = fn_or_ary;
      return ary_of_fn.map(fn => {
         if (Array.isArray(fn)) {
            return pipes(...fn)(...prev);
         } else {
            return applyOrSelect(prev, fn);
         }
      })
   } else {
      const fn = fn_or_ary;
      return [applyOrSelect(prev, fn_or_ary)]
   }
}, args)[0];


