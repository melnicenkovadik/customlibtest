import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{I as a}from"./index-Bbth8Pe4.js";import{A as c}from"./authors-Bh-Wpt1v.js";import{P as t}from"./plus-Brk_UJYm.js";import"./index-DRjF_FHU.js";import"./v4-CQkTLCs1.js";import"./index-CZSCZb7H.js";import"./index-BxTXOyjN.js";import"./index-Bb4qSo10.js";import"./createLucideIcon-UCnLdqZo.js";const I={id:"Atoms/IconButton",title:"Verified/Atoms/IconButton",component:a,tags:["autodocs"],argTypes:{icon:{control:!1}}},n={parameters:{author:c["vadym.melnicenko"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{disabled:!1,text:"button name",paint:"brand-filled",version:"outlined",size:"sm",shape:"circle",className:"",variant:"default",icon:e.jsx(t,{className:"h-4 w-4"}),onClick:r("on-click")},argTypes:{paint:{options:["neutral","brand","brand-filled","neutral-filled"],control:{type:"select"}},size:{options:["x-sm","sm","md","lg"],control:{type:"select"}},shape:{options:["circle","square"],control:{type:"select"}},version:{options:["outlined","ghost"],control:{type:"select"}},variant:{options:[null,"default","outline-primary","ghost-neutral","outline","tertiary","ghost-brand","inherit"],control:{type:"select"}}}},o={parameters:{author:c["vadym.melnicenko"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{variant:"default",icon:e.jsx(t,{className:"h-3 w-3"}),onClick:r("on-click")},render:s=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(a,{...s,paint:"brand-filled",icon:e.jsx(t,{className:"h-4 w-4"})}),e.jsx(a,{...s,paint:"brand",icon:e.jsx(t,{className:"h-4 w-4"})}),e.jsx(a,{...s,paint:"neutral",icon:e.jsx(t,{className:"h-4 w-4"})}),e.jsx(a,{...s,paint:"neutral-filled",icon:e.jsx(t,{className:"h-4 w-4"})}),e.jsx(a,{...s,paint:"brand",version:"ghost",icon:e.jsx(t,{className:"h-4 w-4"})}),e.jsx(a,{...s,paint:"neutral",version:"ghost",icon:e.jsx(t,{className:"h-4 w-4"})})]})},i={parameters:{author:c["vadym.melnicenko"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{variant:"default",icon:e.jsx(t,{className:"h-3 w-3"}),onClick:r("on-click")},render:s=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{...s,size:"x-sm"}),e.jsx(a,{...s,size:"sm"}),e.jsx(a,{...s,size:"md"}),e.jsx(a,{...s,size:"lg"}),e.jsx(a,{...s,size:"x-sm",shape:"square",className:"rounded"}),e.jsx(a,{...s,size:"sm",shape:"square"}),e.jsx(a,{...s,size:"md",shape:"square"}),e.jsx(a,{...s,size:"lg",shape:"square"})]})};var l,m,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    disabled: false,
    text: 'button name',
    paint: 'brand-filled',
    version: 'outlined',
    size: 'sm',
    shape: 'circle',
    className: '',
    variant: 'default',
    icon: <Plus className="h-4 w-4" />,
    onClick: action('on-click')
  },
  argTypes: {
    paint: {
      options: ['neutral', 'brand', 'brand-filled', 'neutral-filled'],
      control: {
        type: 'select'
      }
    },
    size: {
      options: ['x-sm', 'sm', 'md', 'lg'],
      control: {
        type: 'select'
      }
    },
    shape: {
      options: ['circle', 'square'],
      control: {
        type: 'select'
      }
    },
    version: {
      options: ['outlined', 'ghost'],
      control: {
        type: 'select'
      }
    },
    variant: {
      options: [null, 'default', 'outline-primary', 'ghost-neutral', 'outline', 'tertiary', 'ghost-brand', 'inherit'],
      control: {
        type: 'select'
      }
    }
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,u,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    variant: 'default',
    icon: <Plus className="h-3 w-3" />,
    onClick: action('on-click')
  },
  render: (args: {
    size: 'default' | 'sm' | 'lg' | 'clear';
    variant: string;
    children: string;
  }[]) => <div className="flex gap-4">
      <IconButton {...args} paint="brand-filled" icon={<Plus className="h-4 w-4" />} />
      <IconButton {...args} paint="brand" icon={<Plus className="h-4 w-4" />} />
      <IconButton {...args} paint="neutral" icon={<Plus className="h-4 w-4" />} />
      <IconButton {...args} paint="neutral-filled" icon={<Plus className="h-4 w-4" />} />
      <IconButton {...args} paint="brand" version="ghost" icon={<Plus className="h-4 w-4" />} />
      <IconButton {...args} paint="neutral" version="ghost" icon={<Plus className="h-4 w-4" />} />
    </div>
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,f,w;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    variant: 'default',
    icon: <Plus className="h-3 w-3" />,
    onClick: action('on-click')
  },
  render: (args: {
    size: string;
    variant: 'default';
    icon: React.ReactNode;
  }[]) => <div className="flex items-center gap-4">
      <IconButton {...args} size="x-sm" />
      <IconButton {...args} size="sm" />
      <IconButton {...args} size="md" />
      <IconButton {...args} size="lg" />
      <IconButton {...args} size="x-sm" shape="square" className="rounded" />
      <IconButton {...args} size="sm" shape="square" />
      <IconButton {...args} size="md" shape="square" />
      <IconButton {...args} size="lg" shape="square" />
    </div>
}`,...(w=(f=i.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const B=["Playground","Variants","Sizes"];export{n as Playground,i as Sizes,o as Variants,B as __namedExportsOrder,I as default};
