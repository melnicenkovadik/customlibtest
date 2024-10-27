import{c}from"./createLucideIcon-D1mZwjD8.js";import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{I as m}from"./index-DU8tCDXn.js";import{c as p}from"./index-Bv1jJhtj.js";/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=c("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]),f=({buttons:n,className:t,variant:r="default",size:i="lg",paint:l="brand-filled",shape:s="circle",version:o="outlined",iconClassName:u})=>a.jsx("div",{className:p("flex gap-3",t),children:n.map((e,d)=>a.jsx(m,{icon:e.icon,onClick:e.onClick,text:e.text,variant:r,paint:l,version:o,shape:s,className:u,size:i,disabled:e.disabled},d))});f.__docgenInfo={description:"",methods:[],displayName:"IconButtonsGroup",props:{version:{required:!1,tsType:{name:"union",raw:"'outlined' | 'ghost'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:`| 'default'
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
}[]`},description:""},className:{required:!1,tsType:{name:"string"},description:""},iconClassName:{required:!1,tsType:{name:"string"},description:""},size:{defaultValue:{value:"'lg'",computed:!1},required:!1},paint:{defaultValue:{value:"'brand-filled'",computed:!1},required:!1},shape:{defaultValue:{value:"'circle'",computed:!1},required:!1}},composes:["VariantProps"]};export{f as I,h as T};
