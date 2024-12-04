import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{B as p}from"./index-DlETWc0l.js";import"./index-Be8r5GCZ.js";import{c as u}from"./index-BxTXOyjN.js";import{c as f}from"./index-Bb4qSo10.js";import{A as g}from"./authors-Bh-Wpt1v.js";import{B as w}from"./constants-BP086JmV.js";import"./index-DRjF_FHU.js";import"./index-CUWL0Rm-.js";import"./index-CpgLm8gy.js";import"./index-BxwXBefv.js";import"./index-Iz9Zo_Nw.js";import"./index-DNKPQSo6.js";import"./index-qspcADvA.js";import"./index-rX-Bn4lm.js";const y=f("flex min-h-9 items-center justify-between rounded bg-warning-50",{variants:{size:{default:"px-2 py-1",full:"w-full p-3"}}});function a({className:s,size:c="full",text:l,icon:o,button:r,...d}){return e.jsxs("div",{className:u(y({size:c}),s,"text-foreground"),...d,children:[l,e.jsxs("div",{className:"ml-2 flex items-center",children:[o&&e.jsx("span",{className:"ml-2",children:o}),r&&e.jsx("span",{children:r})]})]})}a.__docgenInfo={description:"",methods:[],displayName:"Tagline",props:{text:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},button:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},size:{defaultValue:{value:"'full'",computed:!1},required:!1}},composes:["VariantProps"]};const B={id:"Atoms/Tagline",title:"Verified/Atoms/Tagline",component:a,tags:["autodocs"],parameters:{badges:[w.CUSTOM]}},t={parameters:{author:g["vadym.melnicenko"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{text:"Your current spendable balance 200 USDC is low",button:e.jsx(p,{size:"sm",variant:"secondary",children:"Add funds"}),size:"full"},argTypes:{button:{control:!1},icon:{control:!1},size:{options:["default","full"],control:{type:"select"}}},render:s=>e.jsx(a,{...s,className:"bg-accent-active"})};var n,i,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    text: 'Your current spendable balance 200 USDC is low',
    button: <Button size="sm" variant="secondary">
        Add funds
      </Button>,
    size: 'full'
  },
  argTypes: {
    button: {
      control: false
    },
    icon: {
      control: false
    },
    size: {
      options: ['default', 'full'],
      control: {
        type: 'select'
      }
    }
  },
  render: args => <Tagline {...args} className="bg-accent-active" />
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const _=["Playground"];export{t as Playground,_ as __namedExportsOrder,B as default};
