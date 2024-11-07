import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{c as y}from"./index-BxTXOyjN.js";import{B as r}from"./index-Ds8zFNib.js";import{A as m}from"./authors-Bh-Wpt1v.js";import{U as w}from"./user-CwKuihLt.js";import"./index-DRjF_FHU.js";import"./index-Bb4qSo10.js";import"./createLucideIcon-UCnLdqZo.js";const O={id:"Atoms/Badge",title:"Verified/Atoms/Badge",component:r,tags:["autodocs"],argTypes:{variant:{options:["default","secondary","destructive","outline","number"],control:{type:"select"}}}},t={parameters:{author:m["vadym.melnicenko"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{variant:"default",children:"Badge"}},n={parameters:{author:m["vadym.melnicenko"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(w,{className:"h-3 w-3"})," Badge"]})},argTypes:{children:{control:!1},variant:{control:!1}},render:a=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(r,{...a,variant:"default"}),e.jsx(r,{...a,variant:"secondary"}),e.jsx(r,{...a,variant:"tertiary"}),e.jsx(r,{...a,variant:"outline"}),e.jsx(r,{...a,variant:"destructive"}),e.jsx(r,{...a,variant:"num"})]})},i={parameters:{author:m["vadym.melnicenko"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{value:0},argTypes:{variant:{control:!1}},render:({value:a})=>{let s,o="";return a<0?(s="bg-error-100 hover:bg-error-100 text-error-600",o="-"):a>0?(s="bg-success-100 hover:bg-success-100 text-success-600",o="+"):s="bg-neutral-100 hover:bg-neutral-100 text-neutral-500",e.jsx("div",{className:"flex items-center gap-4",children:e.jsxs(r,{className:y(s,"cursor-default rounded px-2"),children:[o,Number(Math.abs(a)).toLocaleString(),"%"]})})}};var d,c,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    variant: 'default',
    children: 'Badge'
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var g,u,p;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    children: <>
        <User className="h-3 w-3" /> Badge
      </>
  },
  argTypes: {
    children: {
      control: false
    },
    variant: {
      control: false
    }
  },
  render: (args: any) => <div className="flex flex-wrap items-center gap-4">
      <Badge {...args} variant="default" />
      <Badge {...args} variant="secondary" />
      <Badge {...args} variant="tertiary" />
      <Badge {...args} variant="outline" />
      <Badge {...args} variant="destructive" />
      <Badge {...args} variant="num" />
    </div>
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,h,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    value: 0
  },
  argTypes: {
    variant: {
      control: false
    }
  },
  render: ({
    value
  }: {
    value: number;
  }) => {
    let badgeVariant;
    let sign = '';
    if (value < 0) {
      badgeVariant = 'bg-error-100 hover:bg-error-100 text-error-600';
      sign = '-';
    } else if (value > 0) {
      badgeVariant = 'bg-success-100 hover:bg-success-100 text-success-600';
      sign = '+';
    } else {
      badgeVariant = 'bg-neutral-100 hover:bg-neutral-100 text-neutral-500';
    }
    return <div className="flex items-center gap-4">
        <Badge className={cn(badgeVariant, 'cursor-default rounded px-2')}>
          {sign}
          {Number(Math.abs(value)).toLocaleString()}%
        </Badge>
      </div>;
  }
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const N=["Playground","Variants","MoodRelated"];export{i as MoodRelated,t as Playground,n as Variants,N as __namedExportsOrder,O as default};
