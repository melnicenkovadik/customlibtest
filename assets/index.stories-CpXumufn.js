import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{I as u,a as o,b as m,c as g}from"./index-CJcEsfGj.js";import{A as h}from"./authors-Bh-Wpt1v.js";import"./index-CTjT7uj6.js";import"./index-Bv1jJhtj.js";import"./createLucideIcon-D1mZwjD8.js";const A={id:"Molecules/Input OTP",title:"Verified/Molecules/Input OTP",component:u,tags:["autodocs"],argTypes:{children:{control:!1}}},t={parameters:{author:h["vadym.melnicenko"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{maxLength:6,className:"w-full max-w-xs"},render:({maxLength:r,className:l})=>{const a=Array.from(Array(Math.ceil(r/2))).map((e,s)=>s),d=Array.from(Array(Math.ceil(r-a.length))).map((e,s)=>s+a.length);return n.jsxs(u,{maxLength:r,className:l,children:[n.jsx(o,{children:a.map(e=>n.jsx(m,{index:e},e))}),n.jsx(g,{}),n.jsx(o,{children:d.map(e=>n.jsx(m,{index:e},e))})]})}};var p,i,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    maxLength: 6,
    className: 'w-full max-w-xs'
  } as never,
  render: ({
    maxLength,
    className
  }) => {
    //i.e. [0, 1, 2]
    const firstGroupOtp = Array.from(Array(Math.ceil(maxLength / 2))).map((_v, i) => i);

    //i.e. [3, 4, 5]
    const secondGroupOtp = Array.from(Array(Math.ceil(maxLength - firstGroupOtp.length))).map((_v, i) => i + firstGroupOtp.length);
    return <InputOTP maxLength={maxLength} className={className}>
        <InputOTPGroup>
          {firstGroupOtp.map(i => <InputOTPSlot key={i} index={i} />)}
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          {secondGroupOtp.map(i => <InputOTPSlot key={i} index={i} />)}
        </InputOTPGroup>
      </InputOTP>;
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const T=["Playground"];export{t as Playground,T as __namedExportsOrder,A as default};
