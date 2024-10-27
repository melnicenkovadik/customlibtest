import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{r as v}from"./index-CTjT7uj6.js";import{T as p}from"./index-CsppbEUr.js";import{A as c}from"./authors-Bh-Wpt1v.js";import"./index-Bv1jJhtj.js";import"./index-Bb4qSo10.js";const M={id:"Atoms/Typography",title:"Verified/Atoms/Typography",component:p,tags:["autodocs"]},l=["heading1","heading2","heading3","heading4","heading5","body1","body2","body3","body4"],d=["default","secondary","tertiary","gradient","accent"],m=["h1","h2","h3","h4","h5","h6","p","span","div"],n={parameters:{author:c["vadym.melnicenko"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{size:"body1",children:"Text",color:"default",tag:"h6"},argTypes:{size:{options:l,control:{type:"select"}},color:{options:d,control:{type:"select"}},tag:{options:m,control:!1}}},o={parameters:{author:c["vadym.melnicenko"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{color:"default",tag:void 0},argTypes:{disableHashtagsHighlighting:{options:[!0,!1],control:{type:"select"}},size:{options:l,control:!1},color:{options:d,control:{type:"select"}},tag:{options:m,control:!1}},render:s=>{const a=new Map([["heading1","48px"],["heading2","30px"],["heading3","24px"],["heading4","20px"],["heading5","18px"],["body1","16px"],["body2","14px"],["body3","12px"],["body4","10px"]]);return i.jsx("div",{className:"flex flex-col items-center gap-4",children:Array.from(a.entries()).map(([e,r],b)=>i.jsx(p,{...s,size:e,children:`${r} Typography`},b))})}},t={parameters:{author:c["vadym.melnicenko"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{size:"body1",tag:void 0},argTypes:{size:{options:l,control:{type:"select"}},color:{options:d,control:!1},tag:{options:m,control:!1}},render:s=>{const a=new Map([["secondary","text-secondary"],["tertiary","text-tertiary"],["gradient","bg-unicorn-gradient"],["accent","text-ui-accent-500"]]);return i.jsx("div",{className:"flex flex-col items-center gap-4",children:Array.from(a.entries()).reverse().map(([e],r)=>v.createElement(p,{...s,key:r,color:e},`${e} Typography`))})}};var g,y,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    size: 'body1',
    children: 'Text',
    color: 'default',
    tag: 'h6'
  },
  argTypes: {
    size: {
      options: variantOptions,
      control: {
        type: 'select'
      }
    },
    color: {
      options: colorOptions,
      control: {
        type: 'select'
      }
    },
    tag: {
      options: componentOptions,
      control: false
    }
  }
}`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var f,u,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    color: 'default',
    tag: undefined
  },
  argTypes: {
    disableHashtagsHighlighting: {
      options: [true, false],
      control: {
        type: 'select'
      }
    },
    size: {
      options: variantOptions,
      control: false
    },
    color: {
      options: colorOptions,
      control: {
        type: 'select'
      }
    },
    tag: {
      options: componentOptions,
      control: false
    }
  },
  render: args => {
    const variantsMap = new Map<TypographyProps['size'], string>([['heading1', '48px'], ['heading2', '30px'], ['heading3', '24px'], ['heading4', '20px'], ['heading5', '18px'], ['body1', '16px'], ['body2', '14px'], ['body3', '12px'], ['body4', '10px']]);
    return <div className="flex flex-col items-center gap-4">
        {Array.from(variantsMap.entries()).map(([size, pxEquivalent], index) => <Typography key={index} {...args} size={size}>{\`\${pxEquivalent} Typography\`}</Typography>)}
      </div>;
  }
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var w,S,A;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    size: 'body1',
    tag: undefined
  },
  argTypes: {
    size: {
      options: variantOptions,
      control: {
        type: 'select'
      }
    },
    color: {
      options: colorOptions,
      control: false
    },
    tag: {
      options: componentOptions,
      control: false
    }
  },
  render: args => {
    const sizesMap = new Map<TypographyProps['color'], string>([['secondary', 'text-secondary'], ['tertiary', 'text-tertiary'], ['gradient', 'bg-unicorn-gradient'], ['accent', 'text-ui-accent-500']]);
    return <div className="flex flex-col items-center gap-4">
        {Array.from(sizesMap.entries()).reverse().map(([color], index) => <Typography {...args} key={index} color={color}>{\`\${color} Typography\`}</Typography>)}
      </div>;
  }
}`,...(A=(S=t.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const k=["Playground","Variants","Colors"];export{t as Colors,n as Playground,o as Variants,k as __namedExportsOrder,M as default};
