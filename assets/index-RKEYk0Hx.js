import{r as o}from"./index-CTjT7uj6.js";import{c as Se,o as $e,s as Ee,f as _e,a as Oe,h as be,b as te,l as Me,d as je}from"./floating-ui.dom-DUxIRmir.js";import{r as Ne}from"./index-BbmHap-z.js";import{P as T}from"./index-9_93ZtqA.js";import{j as v}from"./jsx-runtime-Cw0GR0a5.js";import{u as oe}from"./index-Dt9fs78b.js";import{b as ke,u as re}from"./index-BSevPOpd.js";import{u as De}from"./index-B8az7Mm2.js";var Y=typeof document<"u"?o.useLayoutEffect:o.useEffect;function X(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let r,n,s;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==t.length)return!1;for(n=r;n--!==0;)if(!X(e[n],t[n]))return!1;return!0}if(s=Object.keys(e),r=s.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!{}.hasOwnProperty.call(t,s[n]))return!1;for(n=r;n--!==0;){const i=s[n];if(!(i==="_owner"&&e.$$typeof)&&!X(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function se(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ne(e,t){const r=se(e);return Math.round(t*r)/r}function z(e){const t=o.useRef(e);return Y(()=>{t.current=e}),t}function He(e){e===void 0&&(e={});const{placement:t="bottom",strategy:r="absolute",middleware:n=[],platform:s,elements:{reference:i,floating:a}={},transform:l=!0,whileElementsMounted:f,open:u}=e,[d,m]=o.useState({x:0,y:0,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[p,y]=o.useState(n);X(p,n)||y(n);const[h,w]=o.useState(null),[R,S]=o.useState(null),_=o.useCallback(c=>{c!==g.current&&(g.current=c,w(c))},[]),W=o.useCallback(c=>{c!==$.current&&($.current=c,S(c))},[]),x=i||h,A=a||R,g=o.useRef(null),$=o.useRef(null),O=o.useRef(d),L=f!=null,N=z(f),j=z(s),F=z(u),P=o.useCallback(()=>{if(!g.current||!$.current)return;const c={placement:t,strategy:r,middleware:p};j.current&&(c.platform=j.current),Se(g.current,$.current,c).then(M=>{const E={...M,isPositioned:F.current!==!1};k.current&&!X(O.current,E)&&(O.current=E,Ne.flushSync(()=>{m(E)}))})},[p,t,r,j,F]);Y(()=>{u===!1&&O.current.isPositioned&&(O.current.isPositioned=!1,m(c=>({...c,isPositioned:!1})))},[u]);const k=o.useRef(!1);Y(()=>(k.current=!0,()=>{k.current=!1}),[]),Y(()=>{if(x&&(g.current=x),A&&($.current=A),x&&A){if(N.current)return N.current(x,A,P);P()}},[x,A,P,N,L]);const D=o.useMemo(()=>({reference:g,floating:$,setReference:_,setFloating:W}),[_,W]),C=o.useMemo(()=>({reference:x,floating:A}),[x,A]),b=o.useMemo(()=>{const c={position:r,left:0,top:0};if(!C.floating)return c;const M=ne(C.floating,d.x),E=ne(C.floating,d.y);return l?{...c,transform:"translate("+M+"px, "+E+"px)",...se(C.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:M,top:E}},[r,l,C.floating,d.x,d.y]);return o.useMemo(()=>({...d,update:P,refs:D,elements:C,floatingStyles:b}),[d,P,D,C,b])}const We=e=>{function t(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:n,padding:s}=typeof e=="function"?e(r):e;return n&&t(n)?n.current!=null?te({element:n.current,padding:s}).fn(r):{}:n?te({element:n,padding:s}).fn(r):{}}}},Fe=(e,t)=>({...$e(e),options:[e,t]}),Be=(e,t)=>({...Ee(e),options:[e,t]}),Ie=(e,t)=>({...Me(e),options:[e,t]}),Ye=(e,t)=>({..._e(e),options:[e,t]}),Xe=(e,t)=>({...Oe(e),options:[e,t]}),Le=(e,t)=>({...be(e),options:[e,t]}),ze=(e,t)=>({...We(e),options:[e,t]});var Te="Arrow",ie=o.forwardRef((e,t)=>{const{children:r,width:n=10,height:s=5,...i}=e;return v.jsx(T.svg,{...i,ref:t,width:n,height:s,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?r:v.jsx("polygon",{points:"0,0 30,0 15,10"})})});ie.displayName=Te;var Ze=ie;function qe(e,t=[]){let r=[];function n(i,a){const l=o.createContext(a),f=r.length;r=[...r,a];function u(m){const{scope:p,children:y,...h}=m,w=(p==null?void 0:p[e][f])||l,R=o.useMemo(()=>h,Object.values(h));return v.jsx(w.Provider,{value:R,children:y})}function d(m,p){const y=(p==null?void 0:p[e][f])||l,h=o.useContext(y);if(h)return h;if(a!==void 0)return a;throw new Error(`\`${m}\` must be used within \`${i}\``)}return u.displayName=i+"Provider",[u,d]}const s=()=>{const i=r.map(a=>o.createContext(a));return function(l){const f=(l==null?void 0:l[e])||i;return o.useMemo(()=>({[`__scope${e}`]:{...l,[e]:f}}),[l,f])}};return s.scopeName=e,[n,Ue(s,...t)]}function Ue(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const n=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(i){const a=n.reduce((l,{useScope:f,scopeName:u})=>{const m=f(i)[`__scope${u}`];return{...l,...m}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return r.scopeName=t.scopeName,r}var Z="Popper",[ae,lt]=qe(Z),[Ve,ce]=ae(Z),le=e=>{const{__scopePopper:t,children:r}=e,[n,s]=o.useState(null);return v.jsx(Ve,{scope:t,anchor:n,onAnchorChange:s,children:r})};le.displayName=Z;var fe="PopperAnchor",ue=o.forwardRef((e,t)=>{const{__scopePopper:r,virtualRef:n,...s}=e,i=ce(fe,r),a=o.useRef(null),l=oe(t,a);return o.useEffect(()=>{i.onAnchorChange((n==null?void 0:n.current)||a.current)}),n?null:v.jsx(T.div,{...s,ref:l})});ue.displayName=fe;var q="PopperContent",[Ge,Je]=ae(q),de=o.forwardRef((e,t)=>{var U,V,G,J,K,Q;const{__scopePopper:r,side:n="bottom",sideOffset:s=0,align:i="center",alignOffset:a=0,arrowPadding:l=0,avoidCollisions:f=!0,collisionBoundary:u=[],collisionPadding:d=0,sticky:m="partial",hideWhenDetached:p=!1,updatePositionStrategy:y="optimized",onPlaced:h,...w}=e,R=ce(q,r),[S,_]=o.useState(null),W=oe(t,H=>_(H)),[x,A]=o.useState(null),g=De(x),$=(g==null?void 0:g.width)??0,O=(g==null?void 0:g.height)??0,L=n+(i!=="center"?"-"+i:""),N=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},j=Array.isArray(u)?u:[u],F=j.length>0,P={padding:N,boundary:j.filter(Qe),altBoundary:F},{refs:k,floatingStyles:D,placement:C,isPositioned:b,middlewareData:c}=He({strategy:"fixed",placement:L,whileElementsMounted:(...H)=>je(...H,{animationFrame:y==="always"}),elements:{reference:R.anchor},middleware:[Fe({mainAxis:s+O,alignmentAxis:a}),f&&Be({mainAxis:!0,crossAxis:!1,limiter:m==="partial"?Ie():void 0,...P}),f&&Ye({...P}),Xe({...P,apply:({elements:H,rects:ee,availableWidth:ve,availableHeight:Ae})=>{const{width:Ce,height:Re}=ee.reference,I=H.floating.style;I.setProperty("--radix-popper-available-width",`${ve}px`),I.setProperty("--radix-popper-available-height",`${Ae}px`),I.setProperty("--radix-popper-anchor-width",`${Ce}px`),I.setProperty("--radix-popper-anchor-height",`${Re}px`)}}),x&&ze({element:x,padding:l}),et({arrowWidth:$,arrowHeight:O}),p&&Le({strategy:"referenceHidden",...P})]}),[M,E]=he(C),B=ke(h);re(()=>{b&&(B==null||B())},[b,B]);const ge=(U=c.arrow)==null?void 0:U.x,we=(V=c.arrow)==null?void 0:V.y,xe=((G=c.arrow)==null?void 0:G.centerOffset)!==0,[ye,Pe]=o.useState();return re(()=>{S&&Pe(window.getComputedStyle(S).zIndex)},[S]),v.jsx("div",{ref:k.setFloating,"data-radix-popper-content-wrapper":"",style:{...D,transform:b?D.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ye,"--radix-popper-transform-origin":[(J=c.transformOrigin)==null?void 0:J.x,(K=c.transformOrigin)==null?void 0:K.y].join(" "),...((Q=c.hide)==null?void 0:Q.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:v.jsx(Ge,{scope:r,placedSide:M,onArrowChange:A,arrowX:ge,arrowY:we,shouldHideArrow:xe,children:v.jsx(T.div,{"data-side":M,"data-align":E,...w,ref:W,style:{...w.style,animation:b?void 0:"none"}})})})});de.displayName=q;var pe="PopperArrow",Ke={top:"bottom",right:"left",bottom:"top",left:"right"},me=o.forwardRef(function(t,r){const{__scopePopper:n,...s}=t,i=Je(pe,n),a=Ke[i.placedSide];return v.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:v.jsx(Ze,{...s,ref:r,style:{...s.style,display:"block"}})})});me.displayName=pe;function Qe(e){return e!==null}var et=e=>({name:"transformOrigin",options:e,fn(t){var R,S,_;const{placement:r,rects:n,middlewareData:s}=t,a=((R=s.arrow)==null?void 0:R.centerOffset)!==0,l=a?0:e.arrowWidth,f=a?0:e.arrowHeight,[u,d]=he(r),m={start:"0%",center:"50%",end:"100%"}[d],p=(((S=s.arrow)==null?void 0:S.x)??0)+l/2,y=(((_=s.arrow)==null?void 0:_.y)??0)+f/2;let h="",w="";return u==="bottom"?(h=a?m:`${p}px`,w=`${-f}px`):u==="top"?(h=a?m:`${p}px`,w=`${n.floating.height+f}px`):u==="right"?(h=`${-f}px`,w=a?m:`${y}px`):u==="left"&&(h=`${n.floating.width+f}px`,w=a?m:`${y}px`),{data:{x:h,y:w}}}});function he(e){const[t,r="center"]=e.split("-");return[t,r]}var ft=le,ut=ue,dt=de,pt=me;export{ut as A,dt as C,ft as R,pt as a,lt as c};
