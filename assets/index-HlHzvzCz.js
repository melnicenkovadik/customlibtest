import{j as b}from"./jsx-runtime-Cw0GR0a5.js";import{r as c}from"./index-CTjT7uj6.js";import{A as F}from"./index-DxSNWJQd.js";import{B as M}from"./index-B1B20eKX.js";import{T as D}from"./index-CsppbEUr.js";import{c as k}from"./index-Bv1jJhtj.js";import{X as R}from"./x-C6zOW7R5.js";let V={data:""},L=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||V,X=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,B=/\/\*[^]*?\*\/|  +/g,S=/\n+/g,x=(e,t)=>{let a="",o="",i="";for(let r in e){let n=e[r];r[0]=="@"?r[1]=="i"?a=r+" "+n+";":o+=r[1]=="f"?x(n,r):r+"{"+x(n,r[1]=="k"?"":t)+"}":typeof n=="object"?o+=x(n,t?t.replace(/([^,])+/g,s=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,s):s?s+" "+l:l)):r):n!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=x.p?x.p(r,n):r+":"+n+";")}return a+(t&&i?t+"{"+i+"}":i)+o},g={},P=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+P(e[a]);return t}return e},H=(e,t,a,o,i)=>{let r=P(e),n=g[r]||(g[r]=(l=>{let d=0,p=11;for(;d<l.length;)p=101*p+l.charCodeAt(d++)>>>0;return"go"+p})(r));if(!g[n]){let l=r!==e?e:(d=>{let p,h,f=[{}];for(;p=X.exec(d.replace(B,""));)p[4]?f.shift():p[3]?(h=p[3].replace(S," ").trim(),f.unshift(f[0][h]=f[0][h]||{})):f[0][p[1]]=p[2].replace(S," ").trim();return f[0]})(e);g[n]=x(i?{["@keyframes "+n]:l}:l,a?"":"."+n)}let s=a&&g.g?g.g:null;return a&&(g.g=g[n]),((l,d,p,h)=>{h?d.data=d.data.replace(h,l):d.data.indexOf(l)===-1&&(d.data=p?l+d.data:d.data+l)})(g[n],t,o,s),n},Z=(e,t,a)=>e.reduce((o,i,r)=>{let n=t[r];if(n&&n.call){let s=n(a),l=s&&s.props&&s.props.className||/^go/.test(s)&&s;n=l?"."+l:s&&typeof s=="object"?s.props?"":x(s,""):s===!1?"":s}return o+i+(n??"")},"");function j(e){let t=this||{},a=e.call?e(t.p):e;return H(a.unshift?a.raw?Z(a,[].slice.call(arguments,1),t.p):a.reduce((o,i)=>Object.assign(o,i&&i.call?i(t.p):i),{}):a,L(t.target),t.g,t.o,t.k)}let C,A,q;j.bind({g:1});let y=j.bind({k:1});function G(e,t,a,o){x.p=t,C=e,A=a,q=o}function v(e,t){let a=this||{};return function(){let o=arguments;function i(r,n){let s=Object.assign({},r),l=s.className||i.className;a.p=Object.assign({theme:A&&A()},s),a.o=/ *go\d+/.test(l),s.className=j.apply(a,o)+(l?" "+l:"");let d=e;return e[0]&&(d=s.as||e,delete s.as),q&&d[0]&&q(s),C(d,s)}return i}}var J=e=>typeof e=="function",z=(e,t)=>J(e)?e(t):e,Q=(()=>{let e=0;return()=>(++e).toString()})(),U=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),W=20,T=new Map,Y=1e3,O=e=>{if(T.has(e))return;let t=setTimeout(()=>{T.delete(e),w({type:4,toastId:e})},Y);T.set(e,t)},K=e=>{let t=T.get(e);t&&clearTimeout(t)},I=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,W)};case 1:return t.toast.id&&K(t.toast.id),{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:a}=t;return e.toasts.find(r=>r.id===a.id)?I(e,{type:1,toast:a}):I(e,{type:0,toast:a});case 3:let{toastId:o}=t;return o?O(o):e.toasts.forEach(r=>{O(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===o||o===void 0?{...r,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+i}))}}},_=[],$={toasts:[],pausedAt:void 0},w=e=>{$=I($,e),_.forEach(t=>{t($)})},ee={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},te=(e={})=>{let[t,a]=c.useState($);c.useEffect(()=>(_.push(a),()=>{let i=_.indexOf(a);i>-1&&_.splice(i,1)}),[t]);let o=t.toasts.map(i=>{var r,n;return{...e,...e[i.type],...i,duration:i.duration||((r=e[i.type])==null?void 0:r.duration)||(e==null?void 0:e.duration)||ee[i.type],style:{...e.style,...(n=e[i.type])==null?void 0:n.style,...i.style}}});return{...t,toasts:o}},ae=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(a==null?void 0:a.id)||Q()}),E=e=>(t,a)=>{let o=ae(t,e,a);return w({type:2,toast:o}),o.id},u=(e,t)=>E("blank")(e,t);u.error=E("error");u.success=E("success");u.loading=E("loading");u.custom=E("custom");u.dismiss=e=>{w({type:3,toastId:e})};u.remove=e=>w({type:4,toastId:e});u.promise=(e,t,a)=>{let o=u.loading(t.loading,{...a,...a==null?void 0:a.loading});return e.then(i=>(u.success(z(t.success,i),{id:o,...a,...a==null?void 0:a.success}),i)).catch(i=>{u.error(z(t.error,i),{id:o,...a,...a==null?void 0:a.error})}),e};var re=(e,t)=>{w({type:1,toast:{id:e,height:t}})},se=()=>{w({type:5,time:Date.now()})},ie=e=>{let{toasts:t,pausedAt:a}=te(e);c.useEffect(()=>{if(a)return;let r=Date.now(),n=t.map(s=>{if(s.duration===1/0)return;let l=(s.duration||0)+s.pauseDuration-(r-s.createdAt);if(l<0){s.visible&&u.dismiss(s.id);return}return setTimeout(()=>u.dismiss(s.id),l)});return()=>{n.forEach(s=>s&&clearTimeout(s))}},[t,a]);let o=c.useCallback(()=>{a&&w({type:6,time:Date.now()})},[a]),i=c.useCallback((r,n)=>{let{reverseOrder:s=!1,gutter:l=8,defaultPosition:d}=n||{},p=t.filter(m=>(m.position||d)===(r.position||d)&&m.height),h=p.findIndex(m=>m.id===r.id),f=p.filter((m,N)=>N<h&&m.visible).length;return p.filter(m=>m.visible).slice(...s?[f+1]:[0,f]).reduce((m,N)=>m+(N.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:re,startPause:se,endPause:o,calculateOffset:i}}},oe=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ne=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,le=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,de=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${oe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ne} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${le} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ce=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,pe=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ce} 1s linear infinite;
`,ue=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,me=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,fe=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ue} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${me} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ge=v("div")`
  position: absolute;
`,ye=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,he=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,be=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${he} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,xe=({toast:e})=>{let{icon:t,type:a,iconTheme:o}=e;return t!==void 0?typeof t=="string"?c.createElement(be,null,t):t:a==="blank"?null:c.createElement(ye,null,c.createElement(pe,{...o}),a!=="loading"&&c.createElement(ge,null,a==="error"?c.createElement(de,{...o}):c.createElement(fe,{...o})))},ve=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,we=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ee="0%{opacity:0;} 100%{opacity:1;}",Te="0%{opacity:1;} 100%{opacity:0;}",_e=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,$e=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,je=(e,t)=>{let a=e.includes("top")?1:-1,[o,i]=U()?[Ee,Te]:[ve(a),we(a)];return{animation:t?`${y(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};c.memo(({toast:e,position:t,style:a,children:o})=>{let i=e.height?je(e.position||t||"top-center",e.visible):{opacity:0},r=c.createElement(xe,{toast:e}),n=c.createElement($e,{...e.ariaProps},z(e.message,e));return c.createElement(_e,{className:e.className,style:{...i,...a,...e.style}},typeof o=="function"?o({icon:r,message:n}):c.createElement(c.Fragment,null,r,n))});G(c.createElement);j`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var Ne=u;const ke=({id:e,className:t,header:a,headerClassName:o,description:i,descriptionClassName:r,avatarSrc:n,suffix:s,onClose:l})=>b.jsxs("div",{className:k("relative flex flex-row items-center justify-center gap-4 rounded-md border bg-background p-6 shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.10),_0px_4px_6px_-4px_rgba(0,_0,_0,_0.10)]",t),children:[n&&b.jsx(F,{src:n}),b.jsxs("div",{className:"flex max-w-[255px] flex-col gap-1",children:[b.jsx(D,{size:"body2",className:k("font-semibold",o),children:a}),b.jsx(D,{size:"body2",className:k("font-normal",r),children:i})]}),s,b.jsx(R,{className:"absolute right-2 top-2 h-4 w-4 cursor-pointer",onClick:()=>{Ne.remove(e),l==null||l()}})]}),Ae=({maxVisible:e=3})=>{const{toasts:t,handlers:a}=ie(),{startPause:o,endPause:i}=a,[r,n]=c.useState(!1),[s,l]=c.useState([]);return c.useEffect(()=>{l(t.filter(d=>d.visible))},[t]),c.useEffect(()=>{!s.length&&r&&n(!1)},[s]),b.jsxs("div",{onMouseEnter:o,onMouseLeave:i,className:"fixed bottom-2 right-2 flex flex-col gap-2",children:[s.slice(s.length-(r?t.length:e)).map(d=>{const p=d.message;return p({id:d.id})}),s.length>e&&b.jsx(M,{variant:"link",onClick:()=>n(!0),children:"View All"})]})};ke.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{id:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},header:{required:!0,tsType:{name:"string"},description:""},headerClassName:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},descriptionClassName:{required:!1,tsType:{name:"string"},description:""},avatarSrc:{required:!1,tsType:{name:"string"},description:""},suffix:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};Ae.__docgenInfo={description:"",methods:[],displayName:"Notifications",props:{maxVisible:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}}}};export{Ae as N,ke as T,Ne as _};
