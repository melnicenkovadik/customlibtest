import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as o}from"./index-DRjF_FHU.js";import{I as d}from"./index-Bbth8Pe4.js";import"./index-Be8r5GCZ.js";import{c as x}from"./index-BxTXOyjN.js";import{I as k}from"./index-De68edD2.js";import{c as v}from"./createLucideIcon-UCnLdqZo.js";import{C as T}from"./chevron-right-C8EMzIDi.js";import{A as D}from"./authors-Bh-Wpt1v.js";import{B as _}from"./constants-BP086JmV.js";import"./index-CZSCZb7H.js";import"./index-Bb4qSo10.js";import"./index-CUWL0Rm-.js";import"./index-CpgLm8gy.js";import"./index-BxwXBefv.js";import"./index-Iz9Zo_Nw.js";import"./index-DNKPQSo6.js";import"./index-qspcADvA.js";import"./index-rX-Bn4lm.js";import"./tslib.es6-BUas5LQb.js";import"./index-C6LcUihu.js";import"./index-B-O9zqDT.js";import"./triangle-alert-CYnjHjgk.js";import"./search-CmDAuPxU.js";import"./x-0R6qbvLI.js";import"./trash-nEg8uUxg.js";/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=v("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=v("ChevronsLeft",[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=v("ChevronsRight",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]),j=({className:n,...t})=>e.jsx("nav",{role:"navigation","aria-label":"pagination",className:x("mx-auto flex w-full items-center justify-end",n),...t}),S=o.forwardRef(({className:n,...t},r)=>e.jsx("ul",{ref:r,className:x("flex flex-row items-center gap-1",n),...t})),O=o.forwardRef(({className:n,...t},r)=>e.jsx("li",{ref:r,className:x("",n),...t})),y=({className:n,total:t,handleMin:r,handleMax:g,handleNext:h,handlePrev:a,handleInputChange:f,setCurrentPage:q,currentPage:m})=>{const u=o.useRef(null),[w,P]=o.useState(!1);o.useLayoutEffect(()=>{if(u.current){const s=""+m,i=s.length>0?s.length:1;u.current.style.width=isNaN(+s)?"1ch":`${i}ch`,w&&u.current.focus()}},[m,w]);const I=s=>{let i=s.target.valueAsNumber;i<1&&(i=1),i>t&&(i=t),P(!0),q(i),f==null||f(i)},c=s=>{P(!1),s()},p=s=>{switch(s){case"min":case"prev":return m===1;case"next":case"max":return m===t;default:return!1}},A=t===1;return e.jsxs(j,{className:n,children:[e.jsxs("div",{className:"mr-10 flex items-center gap-2 text-sm",children:[e.jsx("label",{htmlFor:"current-page",children:"Page"}),e.jsx(k,{type:"number",ref:u,value:m,onChange:I,"aria-label":"Current page",id:"current-page-input"}),e.jsxs("span",{className:"text-nowrap",children:[" of ",t]})]}),!A&&e.jsxs(S,{children:[e.jsx(d,{icon:e.jsx(z,{className:"h-[12px] w-[12px]"}),paint:"neutral",size:"sm",shape:"square",onClick:()=>c(r),disabled:p("min")}),e.jsx(d,{icon:e.jsx(R,{className:"h-[12px] w-[12px]"}),paint:"neutral",size:"sm",shape:"square",onClick:()=>c(a),disabled:p("prev")}),e.jsx(d,{icon:e.jsx(T,{className:"h-[12px] w-[12px]"}),paint:"neutral",size:"sm",shape:"square",onClick:()=>c(h),disabled:p("next")}),e.jsx(d,{icon:e.jsx(M,{className:"h-[12px] w-[12px]"}),paint:"neutral",size:"sm",shape:"square",onClick:()=>c(g),disabled:p("max")})]})]})};j.__docgenInfo={description:"",methods:[],displayName:"PaginationWrapper"};S.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};O.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};y.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{total:{required:!0,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""},pageParamName:{required:!1,tsType:{name:"string"},description:""},handleMin:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},handleMax:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},handlePrev:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},handleNext:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},handleInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},setCurrentPage:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},currentPage:{required:!0,tsType:{name:"number"},description:""}},composes:["ComponentProps"]};const ce={id:"Molecule/Pagination",title:"Verified/Atoms/Pagination",component:y,tags:["autodocs"],parameters:{badges:[_.CUSTOM]}},l={parameters:{author:D["vadym.melnicenko"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{total:20},render:n=>{const[t,r]=o.useState(1),g=()=>{r(a=>a===1?a:a-1)},h=()=>{r(a=>a===n.total?a:a+1)};return e.jsx("div",{className:"flex items-center space-x-2",children:e.jsx(y,{handleMin:()=>r(1),handleMax:()=>r(n.total),handlePrev:g,handleNext:h,total:n.total,handleInputChange:a=>console.log("handleInputChange",a),setCurrentPage:a=>r(a),currentPage:t})})}};var C,N,b;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    total: 20
  },
  render: args => {
    const [currentPage, setCurrentPage] = useState(1);
    const handlePrev = () => {
      setCurrentPage(currentPage => currentPage === 1 ? currentPage : currentPage - 1);
    };
    const handleNext = () => {
      setCurrentPage(currentPage => currentPage === args.total ? currentPage : currentPage + 1);
    };
    return <div className="flex items-center space-x-2">
        <Pagination handleMin={() => setCurrentPage(1)} handleMax={() => setCurrentPage(args.total)} handlePrev={handlePrev} handleNext={handleNext} total={args.total} handleInputChange={value => console.log('handleInputChange', value)} setCurrentPage={value => setCurrentPage(value)} currentPage={currentPage} />
      </div>;
  }
}`,...(b=(N=l.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};const pe=["Playground"];export{l as Playground,pe as __namedExportsOrder,ce as default};
