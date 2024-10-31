import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{B as p}from"./index-B1B20eKX.js";import"./index--95H8BaD.js";import{c as u}from"./index-Bv1jJhtj.js";import{c as f}from"./index-Bb4qSo10.js";import{A as g}from"./authors-Bh-Wpt1v.js";import{B as w}from"./constants-BP086JmV.js";import"./index-CTjT7uj6.js";import"./index-muU7fdJh.js";import"./index-9_93ZtqA.js";import"./index-BbmHap-z.js";import"./index-Dt9fs78b.js";const y=f("flex min-h-9 items-center justify-between rounded bg-warning-50",{variants:{size:{default:"px-2 py-1",full:"w-full p-3"}}});function a({className:t,size:c="full",text:l,icon:o,button:r,...d}){return e.jsxs("div",{className:u(y({size:c}),t,"text-foreground"),...d,children:[l,e.jsxs("div",{className:"ml-2 flex items-center",children:[o&&e.jsx("span",{className:"ml-2",children:o}),r&&e.jsx("span",{children:r})]})]})}a.__docgenInfo={description:"",methods:[],displayName:"Tagline",props:{text:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},button:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},size:{defaultValue:{value:"'full'",computed:!1},required:!1}},composes:["VariantProps"]};const O={id:"Atoms/Tagline",title:"Verified/Atoms/Tagline",component:a,tags:["autodocs"],parameters:{badges:[w.CUSTOM]}},s={parameters:{author:g["vadym.melnicenko"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{text:"Your current spendable balance 200 USDC is low",button:e.jsx(p,{size:"sm",variant:"secondary",children:"Add funds"}),size:"full"},argTypes:{button:{control:!1},icon:{control:!1},size:{options:["default","full"],control:{type:"select"}}},render:t=>e.jsx(a,{...t,className:"bg-accent-active"})};var n,i,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const V=["Playground"];export{s as Playground,V as __namedExportsOrder,O as default};
