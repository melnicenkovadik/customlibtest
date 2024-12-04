import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as c}from"./index-DRjF_FHU.js";import{P as V,a as M,b as A,c as T}from"./index-D4cH1stH.js";import{B as m}from"./index-DlETWc0l.js";import"./index-Be8r5GCZ.js";import{T as u}from"./index-CZSCZb7H.js";import{c as y}from"./index-BxTXOyjN.js";import{A as O}from"./authors-Bh-Wpt1v.js";import{X as N}from"./x-0R6qbvLI.js";import{c as g}from"./createLucideIcon-UCnLdqZo.js";import"./index-CUWL0Rm-.js";import"./index-CpgLm8gy.js";import"./index-BxwXBefv.js";import"./index-DwWtoRQM.js";import"./index-qspcADvA.js";import"./index-rX-Bn4lm.js";import"./index-DvdiMlNs.js";import"./tslib.es6-BUas5LQb.js";import"./index-CY6KjWoQ.js";import"./index-C79cgVSs.js";import"./floating-ui.dom-D0xtKlXs.js";import"./index-DNKPQSo6.js";import"./index-T3KOkZhn.js";import"./index-Bb4qSo10.js";import"./index-Iz9Zo_Nw.js";/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=g("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=g("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=g("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),h=c.forwardRef(({onModeChanged:l,onAccentChanged:i,accents:n,modes:a,title:d,text:p,iconClose:o,selectedMode:S,selectedAccent:w},j)=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{ref:j,className:"relative mb-6",children:[e.jsx(u,{size:"heading4",tag:"h4",children:d}),e.jsx("p",{className:"text-sm text-muted-text",children:p}),o]}),e.jsxs("fieldset",{className:"mb-6",children:[e.jsx(u,{size:"heading4",tag:"legend",children:"Mode"}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:a&&a.map(t=>e.jsxs("label",{className:"relative",children:[e.jsx("input",{type:"radio",name:"theme-mode",value:t.code,onChange:()=>l(t.code),className:"peer absolute h-full w-full cursor-pointer opacity-0"}),e.jsxs(m,{variant:"outline",className:y("flex w-full border border-border transition-colors duration-300",S===t.code&&"border-ui-accent-500"),children:[e.jsx("span",{className:"flex h-5 w-5 items-center justify-center text-foreground",children:t.icon}),t.displayValue]})]},t.code))})]}),e.jsxs("fieldset",{className:"mb-6",children:[e.jsx(u,{size:"heading4",tag:"legend",children:"Color"}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:n&&n.map(t=>e.jsxs("label",{className:"relative",children:[e.jsx("input",{type:"radio",name:"theme-accent",value:t.code,onChange:()=>i(t.code),className:"peer absolute h-full w-full cursor-pointer opacity-0"}),e.jsxs(m,{variant:"outline",className:y("flex w-full items-center justify-start border border-border px-3.5 py-2 transition-colors duration-300",w===t.code&&"border-ui-accent-500"),children:[e.jsx("div",{className:"h-5 w-5 rounded-full border border-transparent",style:{backgroundColor:t.color}}),t.displayValue]})]},t.code))})]})]}));h.__docgenInfo={description:"",methods:[],displayName:"ThemeSelector",props:{onModeChanged:{required:!0,tsType:{name:"signature",type:"function",raw:"(modeCode: ModeCodeType) => void",signature:{arguments:[{type:{name:"union",raw:"'dark' | 'light' | 'auto'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"},{name:"literal",value:"'auto'"}]},name:"modeCode"}],return:{name:"void"}}},description:""},onAccentChanged:{required:!0,tsType:{name:"signature",type:"function",raw:"(accentCode: string) => void",signature:{arguments:[{type:{name:"string"},name:"accentCode"}],return:{name:"void"}}},description:""},accents:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  color: string;
  displayValue: string;
  code: string;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!0}},{key:"displayValue",value:{name:"string",required:!0}},{key:"code",value:{name:"string",required:!0}}]}}],raw:"Accents[]"},description:""},modes:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon: JSX.Element;
  displayValue: string;
  code: ModeCodeType;
}`,signature:{properties:[{key:"icon",value:{name:"JSX.Element",required:!0}},{key:"displayValue",value:{name:"string",required:!0}},{key:"code",value:{name:"union",raw:"'dark' | 'light' | 'auto'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"},{name:"literal",value:"'auto'"}],required:!0}}]}}],raw:"Modes[]"},description:""},title:{required:!0,tsType:{name:"string"},description:""},text:{required:!0,tsType:{name:"string"},description:""},iconClose:{required:!1,tsType:{name:"JSX.Element"},description:""},selectedMode:{required:!1,tsType:{name:"string"},description:""},selectedAccent:{required:!1,tsType:{name:"string"},description:""}}};const D=[{icon:e.jsx(z,{}),displayValue:"Light",code:"light"},{icon:e.jsx(P,{}),displayValue:"Dark",code:"dark"},{icon:e.jsx(q,{}),displayValue:"Auto",code:"auto"}],r=[{color:"rgb(36, 189, 254)",displayValue:"Blue",code:"accent-blue"},{color:"rgb(180, 134, 255)",displayValue:"Violet",code:"accent-violet"},{color:"rgb(235, 118, 118)",displayValue:"Salmon",code:"accent-salmon"},{color:"rgb(82, 255, 181)",displayValue:"Green",code:"accent-green"},{color:"rgb(243, 126, 255)",displayValue:"Pink",code:"accent-pink"},{color:"rgb(238, 142, 53)",displayValue:"Orange",code:"accent-orange"},{color:"rgb(255, 231, 107)",displayValue:"Yellow",code:"accent-yellow"}],ce={id:"Molecules/ThemeSelector",title:"Verified/Molecules/ThemeSelector",component:h,tags:["autodocs"]},s={parameters:{author:O["vadym.melnicenko"],embedDesigns:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{},render:()=>{const[l,i]=c.useState("auto"),[n,a]=c.useState("accent-green"),[d,p]=c.useState(!1);return e.jsxs(V,{onOpenChange:o=>p(o),open:d,children:[e.jsx(M,{asChild:!0,children:e.jsx(m,{variant:"outline",children:"Open"})}),e.jsx(A,{className:"relative top-[-58px] flex h-screen w-screen flex-col border-0 p-6 sm:top-0 sm:h-[514px] sm:w-[400px] sm:border",onInteractOutside:o=>o.preventDefault(),align:"start",children:e.jsx(h,{onModeChanged:o=>i(o),onAccentChanged:o=>a(o),selectedMode:l,selectedAccent:n,accents:r,modes:D,title:"Customize",text:"You have 10 unread notifications",iconClose:e.jsx(T,{className:"absolute -right-2 -top-2",children:e.jsx(N,{size:16})})})})]})}};var x,f,v;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`[{
  color: 'rgb(36, 189, 254)',
  displayValue: 'Blue',
  code: 'accent-blue'
}, {
  color: 'rgb(180, 134, 255)',
  displayValue: 'Violet',
  code: 'accent-violet'
}, {
  color: 'rgb(235, 118, 118)',
  displayValue: 'Salmon',
  code: 'accent-salmon'
}, {
  color: 'rgb(82, 255, 181)',
  displayValue: 'Green',
  code: 'accent-green'
}, {
  color: 'rgb(243, 126, 255)',
  displayValue: 'Pink',
  code: 'accent-pink'
}, {
  color: 'rgb(238, 142, 53)',
  displayValue: 'Orange',
  code: 'accent-orange'
}, {
  color: 'rgb(255, 231, 107)',
  displayValue: 'Yellow',
  code: 'accent-yellow'
}]`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,C,k;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {},
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedMode, setSelectedMode] = useState<ModeCodeType>('auto');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedAccent, setSelectedAccent] = useState<string>('accent-green');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return <Popover onOpenChange={v => setIsOpen(v)} open={isOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline">Open</Button>
        </PopoverTrigger>
        <PopoverContent className="relative top-[-58px] flex h-screen w-screen flex-col border-0 p-6 sm:top-0 sm:h-[514px] sm:w-[400px] sm:border" onInteractOutside={e => e.preventDefault()} align="start">
          <ThemeSelector onModeChanged={(modeCode: ModeCodeType) => setSelectedMode(modeCode)} onAccentChanged={(accentCode: string) => setSelectedAccent(accentCode)} selectedMode={selectedMode} selectedAccent={selectedAccent} accents={accents} modes={modes} title="Customize" text="You have 10 unread notifications" iconClose={<PopoverClose className="absolute -right-2 -top-2">
                <X size={16} />
              </PopoverClose>} />
        </PopoverContent>
      </Popover>;
  }
}`,...(k=(C=s.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const le=["accents","Playground"];export{s as Playground,le as __namedExportsOrder,r as accents,ce as default};
