import{r as s}from"./index-DRjF_FHU.js";import{u as H,c as R}from"./index-CUWL0Rm-.js";import{c as Y,u as V}from"./index-GbUxfoun.js";import{u as z}from"./index-BxwXBefv.js";import{j as F}from"./jsx-runtime-DR9Q75dM.js";import{u as q}from"./index-CY6KjWoQ.js";import{P as D}from"./index-qspcADvA.js";import{b as J}from"./index-CpgLm8gy.js";function Q(e,o=[]){let r=[];function n(m,u){const a=s.createContext(u),i=r.length;r=[...r,u];function c(I){const{scope:f,children:g,...t}=I,p=(f==null?void 0:f[e][i])||a,S=s.useMemo(()=>t,Object.values(t));return F.jsx(p.Provider,{value:S,children:g})}function C(I,f){const g=(f==null?void 0:f[e][i])||a,t=s.useContext(g);if(t)return t;if(u!==void 0)return u;throw new Error(`\`${I}\` must be used within \`${m}\``)}return c.displayName=m+"Provider",[c,C]}const d=()=>{const m=r.map(u=>s.createContext(u));return function(a){const i=(a==null?void 0:a[e])||m;return s.useMemo(()=>({[`__scope${e}`]:{...a,[e]:i}}),[a,i])}};return d.scopeName=e,[n,W(d,...o)]}function W(...e){const o=e[0];if(e.length===1)return o;const r=()=>{const n=e.map(d=>({useScope:d(),scopeName:d.scopeName}));return function(m){const u=n.reduce((a,{useScope:i,scopeName:c})=>{const I=i(m)[`__scope${c}`];return{...a,...I}},{});return s.useMemo(()=>({[`__scope${o.scopeName}`]:u}),[u])}};return r.scopeName=o.scopeName,r}var h="rovingFocusGroup.onEntryFocus",X={bubbles:!1,cancelable:!0},E="RovingFocusGroup",[P,G,Z]=Y(E),[ee,be]=Q(E,[Z]),[te,oe]=ee(E),N=s.forwardRef((e,o)=>F.jsx(P.Provider,{scope:e.__scopeRovingFocusGroup,children:F.jsx(P.Slot,{scope:e.__scopeRovingFocusGroup,children:F.jsx(re,{...e,ref:o})})}));N.displayName=E;var re=s.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:r,orientation:n,loop:d=!1,dir:m,currentTabStopId:u,defaultCurrentTabStopId:a,onCurrentTabStopIdChange:i,onEntryFocus:c,preventScrollOnEntryFocus:C=!1,...I}=e,f=s.useRef(null),g=z(o,f),t=V(m),[p=null,S]=H({prop:u,defaultProp:a,onChange:i}),[v,b]=s.useState(!1),w=J(c),K=G(r),T=s.useRef(!1),[k,A]=s.useState(0);return s.useEffect(()=>{const l=f.current;if(l)return l.addEventListener(h,w),()=>l.removeEventListener(h,w)},[w]),F.jsx(te,{scope:r,orientation:n,dir:t,loop:d,currentTabStopId:p,onItemFocus:s.useCallback(l=>S(l),[S]),onItemShiftTab:s.useCallback(()=>b(!0),[]),onFocusableItemAdd:s.useCallback(()=>A(l=>l+1),[]),onFocusableItemRemove:s.useCallback(()=>A(l=>l-1),[]),children:F.jsx(D.div,{tabIndex:v||k===0?-1:0,"data-orientation":n,...I,ref:g,style:{outline:"none",...e.style},onMouseDown:R(e.onMouseDown,()=>{T.current=!0}),onFocus:R(e.onFocus,l=>{const L=!T.current;if(l.target===l.currentTarget&&L&&!v){const y=new CustomEvent(h,X);if(l.currentTarget.dispatchEvent(y),!y.defaultPrevented){const _=K().filter(x=>x.focusable),U=_.find(x=>x.active),B=_.find(x=>x.id===p),$=[U,B,..._].filter(Boolean).map(x=>x.ref.current);j($,C)}}T.current=!1}),onBlur:R(e.onBlur,()=>b(!1))})})}),O="RovingFocusGroupItem",M=s.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:r,focusable:n=!0,active:d=!1,tabStopId:m,...u}=e,a=q(),i=m||a,c=oe(O,r),C=c.currentTabStopId===i,I=G(r),{onFocusableItemAdd:f,onFocusableItemRemove:g}=c;return s.useEffect(()=>{if(n)return f(),()=>g()},[n,f,g]),F.jsx(P.ItemSlot,{scope:r,id:i,focusable:n,active:d,children:F.jsx(D.span,{tabIndex:C?0:-1,"data-orientation":c.orientation,...u,ref:o,onMouseDown:R(e.onMouseDown,t=>{n?c.onItemFocus(i):t.preventDefault()}),onFocus:R(e.onFocus,()=>c.onItemFocus(i)),onKeyDown:R(e.onKeyDown,t=>{if(t.key==="Tab"&&t.shiftKey){c.onItemShiftTab();return}if(t.target!==t.currentTarget)return;const p=ce(t,c.orientation,c.dir);if(p!==void 0){if(t.metaKey||t.ctrlKey||t.altKey||t.shiftKey)return;t.preventDefault();let v=I().filter(b=>b.focusable).map(b=>b.ref.current);if(p==="last")v.reverse();else if(p==="prev"||p==="next"){p==="prev"&&v.reverse();const b=v.indexOf(t.currentTarget);v=c.loop?ue(v,b+1):v.slice(b+1)}setTimeout(()=>j(v))}})})})});M.displayName=O;var ne={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function se(e,o){return o!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function ce(e,o,r){const n=se(e.key,r);if(!(o==="vertical"&&["ArrowLeft","ArrowRight"].includes(n))&&!(o==="horizontal"&&["ArrowUp","ArrowDown"].includes(n)))return ne[n]}function j(e,o=!1){const r=document.activeElement;for(const n of e)if(n===r||(n.focus({preventScroll:o}),document.activeElement!==r))return}function ue(e,o){return e.map((r,n)=>e[(o+n)%e.length])}var ge=N,Fe=M;export{Fe as I,ge as R,be as c};