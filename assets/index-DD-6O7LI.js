import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{r as c}from"./index-CTjT7uj6.js";import{u as _,c as q}from"./index-Cc1vX98B.js";import{u as z}from"./index-Dt9fs78b.js";import{c as I}from"./index-BSevPOpd.js";import{u as V}from"./index-BzkqPxjz.js";import{u as H}from"./index-B8az7Mm2.js";import{P as S}from"./index-9_93ZtqA.js";import{c as g}from"./index-Bv1jJhtj.js";import{c as x}from"./index-Bb4qSo10.js";var k="Switch",[M,re]=I(k),[B,A]=M(k),C=c.forwardRef((t,o)=>{const{__scopeSwitch:e,name:r,checked:s,defaultChecked:i,required:a,disabled:d,value:u="on",onCheckedChange:f,form:b,...p}=t,[l,j]=c.useState(null),E=z(o,h=>j(h)),v=c.useRef(!1),w=l?b||!!l.closest("form"):!0,[m=!1,R]=_({prop:s,defaultProp:i,onChange:f});return n.jsxs(B,{scope:e,checked:m,disabled:d,children:[n.jsx(S.button,{type:"button",role:"switch","aria-checked":m,"aria-required":a,"data-state":T(m),"data-disabled":d?"":void 0,disabled:d,value:u,...p,ref:E,onClick:q(t.onClick,h=>{R(N=>!N),w&&(v.current=h.isPropagationStopped(),v.current||h.stopPropagation())})}),w&&n.jsx(O,{control:l,bubbles:!v.current,name:r,value:u,checked:m,required:a,disabled:d,form:b,style:{transform:"translateX(-100%)"}})]})});C.displayName=k;var y="SwitchThumb",P=c.forwardRef((t,o)=>{const{__scopeSwitch:e,...r}=t,s=A(y,e);return n.jsx(S.span,{"data-state":T(s.checked),"data-disabled":s.disabled?"":void 0,...r,ref:o})});P.displayName=y;var O=t=>{const{control:o,checked:e,bubbles:r=!0,...s}=t,i=c.useRef(null),a=V(e),d=H(o);return c.useEffect(()=>{const u=i.current,f=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(f,"checked").set;if(a!==e&&p){const l=new Event("click",{bubbles:r});p.call(u,e),u.dispatchEvent(l)}},[a,e,r]),n.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:e,...s,tabIndex:-1,ref:i,style:{...t.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function T(t){return t?"checked":"unchecked"}var D=C,F=P;const L=x("peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-foreground data-[state=unchecked]:bg-border",{variants:{size:{sm:"h-5 w-9",md:"h-6 w-11"}},defaultVariants:{size:"md"}}),U=x("pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0",{variants:{size:{sm:"h-4 w-4 data-[state=checked]:translate-x-4",md:"h-5 w-5 data-[state=checked]:translate-x-5"}},defaultVariants:{size:"md"}}),W=c.forwardRef(({className:t,classNameThumb:o,size:e,checked:r,onCheckedChange:s,...i},a)=>n.jsx(D,{className:g(L({size:e}),t),checked:r,onCheckedChange:s,...i,ref:a,children:n.jsx(F,{className:g(U({size:e}),o)})}));W.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},classNameThumb:{required:!1,tsType:{name:"string"},description:""}},composes:["VariantProps"]};export{W as S};