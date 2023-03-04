type any_fn = {(...args: any[]): any};

/**
 * Either an index selector or function.
 */
type sfn = number | any_fn;
type sfn_tree = sfn | sfn_tree[];
function opt_to_array(Ts_or_T: sfn_tree): sfn_tree[] {
   return Array.isArray(Ts_or_T) ? Ts_or_T : [Ts_or_T];
}

function selector_to_fn(selector: number): any_fn {
   return (...args) => args[selector];
}

function sfn_to_fn(sfn: sfn): any_fn {
   return typeof sfn === "number" ? selector_to_fn(sfn) : sfn;
}

export function pipes(...sfn_layers: sfn_tree[]) {
   const fn_layers = sfn_layers.map(opt_to_array).map(sfn_subtree =>
      sfn_subtree.map(sfn_subsubtree => Array.isArray(sfn_subsubtree)
         ? pipes(...sfn_subsubtree)
         : sfn_to_fn(sfn_subsubtree)
      )
   );
   return (...args: any[]) => fn_layers.reduce((acc, fns) => fns.map(fn => fn(...acc)), args)[0];
}
