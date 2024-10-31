import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{C as g}from"./index-CEqwzp0m.js";import{T}from"./index-DYuW4c3X.js";import{T as h}from"./index-CsppbEUr.js";import{c as o}from"./index-Bv1jJhtj.js";import{A as v}from"./authors-Bh-Wpt1v.js";import{B as b}from"./constants-BP086JmV.js";import"./index-CTjT7uj6.js";import"./index-Cs-iujrC.js";import"./index-Bb4qSo10.js";import"./index-B1B20eKX.js";import"./createLucideIcon-D1mZwjD8.js";const c=({className:m="gap-[9px]",textClasses:d,text:t,title:r,actions:s,startTruncate:p=4,variant:u="body1",isTruncate:x,...f})=>{if(!r&&!t)throw new Error("title and text props can not be empty at the same time");return a.jsxs("div",{className:o("flex items-center",m),children:[r&&a.jsx(h,{size:u,children:r}),t&&a.jsx(T,{text:t,...f,className:o(d,"gap-1"),isTruncate:x,start:p}),s.length>0&&s.map(y=>y)]})};c.__docgenInfo={description:"",methods:[],displayName:"TextWithActions",props:{text:{required:!1,tsType:{name:"string"},description:""},textClasses:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:`| 'heading1'
| 'heading2'
| 'heading3'
| 'heading4'
| 'heading5'
| 'body1'
| 'body2'
| 'body3'
| 'body4'`,elements:[{name:"literal",value:"'heading1'"},{name:"literal",value:"'heading2'"},{name:"literal",value:"'heading3'"},{name:"literal",value:"'heading4'"},{name:"literal",value:"'heading5'"},{name:"literal",value:"'body1'"},{name:"literal",value:"'body2'"},{name:"literal",value:"'body3'"},{name:"literal",value:"'body4'"}]},description:"",defaultValue:{value:"'body1'",computed:!1}},actions:{required:!0,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""},isTruncate:{required:!1,tsType:{name:"boolean"},description:""},startTruncate:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},className:{defaultValue:{value:"'gap-[9px]'",computed:!1},required:!1}},composes:["HTMLAttributes"]};const S={id:"Molecules/TextWithActions",title:"Verified/Molecules/TextWithActions",component:c,tags:["autodocs"],parameters:{badges:[b.CUSTOM]}},e={parameters:{author:v["vadym.melnicenko"]},argTypes:{text:{control:!1},textClasses:{control:!1},variant:{control:!1},actions:{control:!1},startTruncate:{control:!1}},args:{text:"0xc74988386A9D7b6847e1e75Ede123D8eB1191cCf",textClasses:"text-secondary-text",isTruncate:!0,className:"mt-[2px] gap-1",actions:[a.jsx(g,{value:"0xc74988386A9D7b6847e1e75Ede123D8eB1191cCf",className:"text-secondary-text hover:text-primary-hover"},"copy")]}};var n,l,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko']
  },
  argTypes: {
    text: {
      control: false
    },
    textClasses: {
      control: false
    },
    variant: {
      control: false
    },
    actions: {
      control: false
    },
    startTruncate: {
      control: false
    }
  },
  args: {
    text: '0xc74988386A9D7b6847e1e75Ede123D8eB1191cCf',
    textClasses: 'text-secondary-text',
    isTruncate: true,
    className: 'mt-[2px] gap-1',
    actions: [<CopyButton key="copy" value="0xc74988386A9D7b6847e1e75Ede123D8eB1191cCf" className="text-secondary-text hover:text-primary-hover" />]
  }
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const V=["Playground"];export{e as Playground,V as __namedExportsOrder,S as default};