import{r as x,R}from"./index-CTjT7uj6.js";import{j as I}from"./jsx-runtime-Cw0GR0a5.js";import{u as N,S as P}from"./index-Dt9fs78b.js";function h(e,r=[]){let u=[];function M(s,o){const n=x.createContext(o),i=u.length;u=[...u,o];function C(m){const{scope:a,children:c,...t}=m,d=(a==null?void 0:a[e][i])||n,l=x.useMemo(()=>t,Object.values(t));return I.jsx(d.Provider,{value:l,children:c})}function v(m,a){const c=(a==null?void 0:a[e][i])||n,t=x.useContext(c);if(t)return t;if(o!==void 0)return o;throw new Error(`\`${m}\` must be used within \`${s}\``)}return C.displayName=s+"Provider",[C,v]}const f=()=>{const s=u.map(o=>x.createContext(o));return function(n){const i=(n==null?void 0:n[e])||s;return x.useMemo(()=>({[`__scope${e}`]:{...n,[e]:i}}),[n,i])}};return f.scopeName=e,[M,O(f,...r)]}function O(...e){const r=e[0];if(e.length===1)return r;const u=()=>{const M=e.map(f=>({useScope:f(),scopeName:f.scopeName}));return function(s){const o=M.reduce((n,{useScope:i,scopeName:C})=>{const m=i(s)[`__scope${C}`];return{...n,...m}},{});return x.useMemo(()=>({[`__scope${r.scopeName}`]:o}),[o])}};return u.scopeName=r.scopeName,u}function D(e){const r=e+"CollectionProvider",[u,M]=h(r),[f,s]=u(r,{collectionRef:{current:null},itemMap:new Map}),o=c=>{const{scope:t,children:d}=c,l=R.useRef(null),p=R.useRef(new Map).current;return I.jsx(f,{scope:t,itemMap:p,collectionRef:l,children:d})};o.displayName=r;const n=e+"CollectionSlot",i=R.forwardRef((c,t)=>{const{scope:d,children:l}=c,p=s(n,d),S=N(t,p.collectionRef);return I.jsx(P,{ref:S,children:l})});i.displayName=n;const C=e+"CollectionItemSlot",v="data-radix-collection-item",m=R.forwardRef((c,t)=>{const{scope:d,children:l,...p}=c,S=R.useRef(null),E=N(t,S),_=s(C,d);return R.useEffect(()=>(_.itemMap.set(S,{ref:S,...p}),()=>void _.itemMap.delete(S))),I.jsx(P,{[v]:"",ref:E,children:l})});m.displayName=C;function a(c){const t=s(e+"CollectionConsumer",c);return R.useCallback(()=>{const l=t.collectionRef.current;if(!l)return[];const p=Array.from(l.querySelectorAll(`[${v}]`));return Array.from(t.itemMap.values()).sort((_,A)=>p.indexOf(_.ref.current)-p.indexOf(A.ref.current))},[t.collectionRef,t.itemMap])}return[{Provider:o,Slot:i,ItemSlot:m},a,M]}var T=x.createContext(void 0);function $(e){const r=x.useContext(T);return e||r||"ltr"}export{D as c,$ as u};
