R.pike = (n, f, m) => (...a) => {
   const l = [...a.slice(0, n), ...f];
   l.slice(n).forEach((fn, i) => {
     const ri = i + n;
     const A = Array.isArray(m[i]) ? m[i] : [m[i]];
     l[ri] = fn(...A.map(indx => l[indx]));
   });
   return l[l.length - 1];
 };
