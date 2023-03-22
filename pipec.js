// pipec aka pipes
// original 2018
pipec=(_=>_=((P,A=Array.isArray)=>(...f)=>(...a)=>f.reduce((b,w)=>(A(w)?w.map(v=>(A(v)?_(...v)(...b):P(b,v))):[P(b,w)]),a)[0])((a,v)=>(~~v==v?a[v]:v(...a))))()
// revised 2023
pipec=(P=>P=(...f)=>(...a)=>f.reduce((p,w)=>(Array.isArray(w)?w:[w]).map(F=>Array.isArray(F)?P(...F)(...p):~~F==F?p[F]:F(...p)),a)[0])()
pipec=((A,P)=>P=(...f)=>(...a)=>f.reduce((p,w)=>(A(w)?w:[w]).map(F=>A(F)?P(...F)(...p):~~F==F?p[F]:F(...p)),a)[0])(Array.isArray)
