import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{I as v}from"./index-BDW069LG.js";import{c as b}from"./index-BxTXOyjN.js";import{A as h}from"./authors-Bh-Wpt1v.js";import{B as k}from"./constants-BP086JmV.js";import{c as o}from"./createLucideIcon-UCnLdqZo.js";import{T as q}from"./trash-nEg8uUxg.js";import"./index-DRjF_FHU.js";import"./index-BIMxU2Zz.js";import"./index-Bb4qSo10.js";/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=o("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=o("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]),l=({buttons:s,className:d,variant:u="default",size:c="lg",paint:m="brand-filled",shape:p="circle",version:f="outlined",iconClassName:y})=>e.jsx("div",{className:b("flex gap-3",d),children:s.map((a,g)=>e.jsx(v,{icon:a.icon,onClick:a.onClick,text:a.text,variant:u,paint:m,version:f,shape:p,className:y,size:c,disabled:a.disabled},g))});l.__docgenInfo={description:"",methods:[],displayName:"IconButtonsGroup",props:{version:{required:!1,tsType:{name:"union",raw:"'outlined' | 'ghost'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'outline-primary'
| 'ghost-neutral'
| 'outline'
| 'tertiary'
| 'ghost-brand'
| 'inherit'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'outline-primary'"},{name:"literal",value:"'ghost-neutral'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'ghost-brand'"},{name:"literal",value:"'inherit'"}]},description:`@deprecated
Use combination of color and style instead.`,defaultValue:{value:"'default'",computed:!1}},buttons:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string | number;
  icon: ReactNode;
  text?: string;
  onClick: () => void;
  disabled?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"icon",value:{name:"ReactNode",required:!0}},{key:"text",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:`{
  id: string | number;
  icon: ReactNode;
  text?: string;
  onClick: () => void;
  disabled?: boolean;
}[]`},description:""},className:{required:!1,tsType:{name:"string"},description:""},iconClassName:{required:!1,tsType:{name:"string"},description:""},size:{defaultValue:{value:"'lg'",computed:!1},required:!1},paint:{defaultValue:{value:"'brand-filled'",computed:!1},required:!1},shape:{defaultValue:{value:"'circle'",computed:!1},required:!1}},composes:["VariantProps"]};const N=[{id:"01",icon:e.jsx(T,{className:"h-4 w-4"}),onClick:()=>{}},{id:"01",icon:e.jsx(x,{className:"h-4 w-4"}),onClick:()=>{}},{id:"01",icon:e.jsx(q,{className:"h-4 w-4"}),onClick:()=>{}}],P={id:"Atoms/IconButtonsGroup",title:"Verified/Atoms/IconButtonsGroup",component:l,tags:["autodocs"],parameters:{badges:[k.CUSTOM]}},n={parameters:{author:h["vadym.melnicenko"]},args:{variant:"default",paint:"brand-filled",buttons:N},argTypes:{variant:{options:["default","outline-primary","ghost-neutral","outline","tertiary","ghost-brand","inherit"],control:{type:"select"}},paint:{options:["neutral","brand","brand-filled","neutral-filled"],control:{type:"select"}}}};var t,r,i;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko']
  },
  args: {
    variant: 'default',
    paint: 'brand-filled',
    buttons
  },
  argTypes: {
    variant: {
      options: ['default', 'outline-primary', 'ghost-neutral', 'outline', 'tertiary', 'ghost-brand', 'inherit'],
      control: {
        type: 'select'
      }
    },
    paint: {
      options: ['neutral', 'brand', 'brand-filled', 'neutral-filled'],
      control: {
        type: 'select'
      }
    }
  }
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const O=["Playground"];export{n as Playground,O as __namedExportsOrder,P as default};
