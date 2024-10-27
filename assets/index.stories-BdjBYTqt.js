import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{A as n,a as s,b as m,c}from"./index-yVQ8GpKL.js";import{A as d}from"./authors-Bh-Wpt1v.js";import"./index-CTjT7uj6.js";import"./index-okHkxgFN.js";import"./index-MrlrqBgY.js";import"./index-Dt9fs78b.js";import"./index-DV6JdDQx.js";import"./index-9_93ZtqA.js";import"./index-BbmHap-z.js";import"./index-DSjsB-wa.js";import"./index-R2VZBBG8.js";import"./index-Bv1jJhtj.js";import"./createLucideIcon-D1mZwjD8.js";const l=[{id:301,name:"Name 1",description:"Description 1",value:"item-1",content:e.jsx("div",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})},{id:302,name:"Name 2",description:"Description 2",value:"item-2",content:e.jsx("div",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})}],q={id:"Molecules/Accordion",title:"Verified/Molecules/Accordion",component:n,tags:["autodocs"]},o={args:{},parameters:{author:d["vadym.melnicenko"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},render:()=>e.jsx("div",{className:"w-[400px]",children:e.jsx(n,{type:"single",collapsible:!0,className:"w-full",children:l.map(i=>e.jsxs(s,{value:i.value,children:[e.jsx(m,{children:e.jsx("div",{className:"flex justify-between",children:e.jsx("h3",{children:i.name})})}),e.jsx(c,{children:i.content})]},i.id))})})};var t,r,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {},
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  render: () => {
    return <div className="w-[400px]">
        <Accordion type="single" collapsible className="w-full">
          {accordionData.map(item => <AccordionItem value={item.value} key={item.id}>
              <AccordionTrigger>
                <div className="flex justify-between">
                  <h3>{item.name}</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>)}
        </Accordion>
      </div>;
  }
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const N=["Playground"];export{o as Playground,N as __namedExportsOrder,q as default};
