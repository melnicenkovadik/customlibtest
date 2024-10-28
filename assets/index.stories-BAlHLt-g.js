import{j as s}from"./jsx-runtime-Cw0GR0a5.js";import{r}from"./index-CTjT7uj6.js";import{u as B}from"./index-Dt9fs78b.js";import{c as L}from"./index-BSevPOpd.js";import{u as M,c as R}from"./index-Cc1vX98B.js";import{u as Y}from"./index-BzkqPxjz.js";import{u as K}from"./index-B8az7Mm2.js";import{P as U}from"./index-cgsyMFoz.js";import{P as q}from"./index-9_93ZtqA.js";import{c as g}from"./index-Bv1jJhtj.js";import{c as z}from"./createLucideIcon-D1mZwjD8.js";import{A as F}from"./authors-Bh-Wpt1v.js";import"./index-BbmHap-z.js";/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=z("SquareCheckBig",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=z("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);var D="Checkbox",[G,Ce]=L(D),[Q,ee]=G(D),V=r.forwardRef((e,c)=>{const{__scopeCheckbox:t,name:a,checked:d,defaultChecked:o,required:h,disabled:i,value:k="on",onCheckedChange:S,form:u,...v}=e,[l,C]=r.useState(null),w=B(c,n=>C(n)),A=r.useRef(!1),j=l?u||!!l.closest("form"):!0,[p=!1,P]=M({prop:d,defaultProp:o,onChange:S}),Z=r.useRef(p);return r.useEffect(()=>{const n=l==null?void 0:l.form;if(n){const f=()=>P(Z.current);return n.addEventListener("reset",f),()=>n.removeEventListener("reset",f)}},[l,P]),s.jsxs(Q,{scope:t,state:p,disabled:i,children:[s.jsx(q.button,{type:"button",role:"checkbox","aria-checked":m(p)?"mixed":p,"aria-required":h,"data-state":J(p),"data-disabled":i?"":void 0,disabled:i,value:k,...v,ref:w,onKeyDown:R(e.onKeyDown,n=>{n.key==="Enter"&&n.preventDefault()}),onClick:R(e.onClick,n=>{P(f=>m(f)?!0:!f),j&&(A.current=n.isPropagationStopped(),A.current||n.stopPropagation())})}),j&&s.jsx(te,{control:l,bubbles:!A.current,name:a,value:k,checked:p,required:h,disabled:i,form:u,style:{transform:"translateX(-100%)"},defaultChecked:m(o)?!1:o})]})});V.displayName=D;var W="CheckboxIndicator",H=r.forwardRef((e,c)=>{const{__scopeCheckbox:t,forceMount:a,...d}=e,o=ee(W,t);return s.jsx(U,{present:a||m(o.state)||o.state===!0,children:s.jsx(q.span,{"data-state":J(o.state),"data-disabled":o.disabled?"":void 0,...d,ref:c,style:{pointerEvents:"none",...e.style}})})});H.displayName=W;var te=e=>{const{control:c,checked:t,bubbles:a=!0,defaultChecked:d,...o}=e,h=r.useRef(null),i=Y(t),k=K(c);r.useEffect(()=>{const u=h.current,v=window.HTMLInputElement.prototype,C=Object.getOwnPropertyDescriptor(v,"checked").set;if(i!==t&&C){const w=new Event("click",{bubbles:a});u.indeterminate=m(t),C.call(u,m(t)?!1:t),u.dispatchEvent(w)}},[i,t,a]);const S=r.useRef(m(t)?!1:t);return s.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:d??S.current,...o,tabIndex:-1,ref:h,style:{...e.style,...k,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function m(e){return e==="indeterminate"}function J(e){return m(e)?"indeterminate":e?"checked":"unchecked"}var se=V,oe=H;const x=r.forwardRef(({className:e,inputClassName:c,labelClassName:t,label:a,details:d,...o},h)=>{const i=r.useId();return s.jsxs("div",{className:g("flex",e),children:[s.jsxs(se,{ref:h,className:g("peer h-4 w-4 shrink-0 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",c),id:i,...o,children:[!o.checked&&s.jsx($,{className:"h-4 w-4 translate-y-0.5"}),s.jsx(oe,{className:g("flex items-center justify-center"),children:o.checked&&s.jsx(X,{className:"h-4 w-4 translate-y-0.5"})})]}),s.jsxs("label",{htmlFor:i,className:g("ml-2 cursor-pointer text-sm",t),children:[a,d&&s.jsx("p",{className:"mt-2 text-secondary-text",children:d})]})]})});x.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!0,tsType:{name:"string"},description:""},details:{required:!1,tsType:{name:"string"},description:""},inputClassName:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""}}};const ge={id:"Atoms/Checkbox",title:"Verified/Atoms/Checkbox",component:x,tags:["autodocs"]},b={args:{label:"Accept terms and conditions",checked:!1},parameters:{embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],author:F["vadym.melnicenko"]},render:()=>{const[e,c]=r.useState(!1),t=()=>c(a=>!a);return s.jsx(x,{label:"Accept terms and conditions",checked:e,className:"mb-8",onCheckedChange:t})}},y={args:{label:"Accept terms and conditions",checked:!1,details:"You agree to our Terms of Service and Privacy Policy."},parameters:{designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],author:F["vadym.melnicenko"]},render:()=>{const[e,c]=r.useState(!1),t=()=>c(a=>!a);return s.jsx(x,{label:"Accept terms and conditions",details:"You agree to our Terms of Service and Privacy Policy.",checked:e,onCheckedChange:t})}};var E,N,O;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    checked: false
  },
  parameters: {
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    author: AUTHORS['vadym.melnicenko']
  },
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleCheck = () => setChecked(prev => !prev);
    return <Checkbox label="Accept terms and conditions" checked={checked} className="mb-8" onCheckedChange={handleCheck} />;
  }
}`,...(O=(N=b.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var T,I,_;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    checked: false,
    details: 'You agree to our Terms of Service and Privacy Policy.'
  },
  parameters: {
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    author: AUTHORS['vadym.melnicenko']
  },
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleCheck = () => setChecked(prev => !prev);
    return <Checkbox label="Accept terms and conditions" details="You agree to our Terms of Service and Privacy Policy." checked={checked} onCheckedChange={handleCheck} />;
  }
}`,...(_=(I=y.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const be=["Playground","WithDetails"];export{b as Playground,y as WithDetails,be as __namedExportsOrder,ge as default};
