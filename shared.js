/** @typedef {number & {}} index */
/** @typedef {{(...args: any[]): any}} any_fn */

/** @type {{<t>(t_or_ts: t | t[]): t[]}} coerce_to_array */
export const coerce_to_array = t_or_ts => Array.isArray(t_or_ts) ? t_or_ts : [t_or_ts];

/** @type {{<a, b>(as: a[], bs: b[]): [a, b][]}} zip */
export function zip(as, bs) {
   if (as.length !== bs.length) {
      throw new Error("Contract violation: a.length !== b.length");
   }
   return as.map((a, i) => [a, bs[i]]);
}
