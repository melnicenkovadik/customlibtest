import{j as p}from"./jsx-runtime-Cw0GR0a5.js";import{r as g}from"./index-CTjT7uj6.js";import{C as r}from"./index-DB2XjKS5.js";import{A as u}from"./authors-Bh-Wpt1v.js";import"./index-Dt9fs78b.js";import"./index-okHkxgFN.js";import"./index-DV6JdDQx.js";import"./index-BzkqPxjz.js";import"./index-Bs984v36.js";import"./index-DSjsB-wa.js";import"./index-9_93ZtqA.js";import"./index-BbmHap-z.js";import"./index-Bv1jJhtj.js";import"./createLucideIcon-D1mZwjD8.js";const T={id:"Atoms/Checkbox",title:"Verified/Atoms/Checkbox",component:r,tags:["autodocs"]},e={args:{label:"Accept terms and conditions",checked:!1},parameters:{embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],author:u["vadym.melnicenko"]},render:()=>{const[t,o]=g.useState(!1),c=()=>o(a=>!a);return p.jsx(r,{label:"Accept terms and conditions",checked:t,className:"mb-8",onCheckedChange:c})}},s={args:{label:"Accept terms and conditions",checked:!1,details:"You agree to our Terms of Service and Privacy Policy."},parameters:{designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],author:u["vadym.melnicenko"]},render:()=>{const[t,o]=g.useState(!1),c=()=>o(a=>!a);return p.jsx(r,{label:"Accept terms and conditions",details:"You agree to our Terms of Service and Privacy Policy.",checked:t,onCheckedChange:c})}};var n,i,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    checked: false
  },
  parameters: {
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    author: AUTHORS['vadym.melnicenko']
  },
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleCheck = () => setChecked(prev => !prev);
    return <Checkbox label="Accept terms and conditions" checked={checked} className="mb-8" onCheckedChange={handleCheck} />;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,h,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    checked: false,
    details: 'You agree to our Terms of Service and Privacy Policy.'
  },
  parameters: {
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    author: AUTHORS['vadym.melnicenko']
  },
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleCheck = () => setChecked(prev => !prev);
    return <Checkbox label="Accept terms and conditions" details="You agree to our Terms of Service and Privacy Policy." checked={checked} onCheckedChange={handleCheck} />;
  }
}`,...(l=(h=s.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};const V=["Playground","WithDetails"];export{e as Playground,s as WithDetails,V as __namedExportsOrder,T as default};
