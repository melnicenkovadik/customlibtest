import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{u as p,C as u}from"./index.esm-CIVLrDKb.js";import{L as h}from"./index--95H8BaD.js";import{S as r}from"./index-C4UwRugS.js";import{A as g}from"./authors-Bh-Wpt1v.js";import"./index-CTjT7uj6.js";import"./index-muU7fdJh.js";import"./index-9_93ZtqA.js";import"./index-BbmHap-z.js";import"./index-Dt9fs78b.js";import"./index-Bv1jJhtj.js";import"./index-DV6JdDQx.js";import"./index-okHkxgFN.js";import"./index-BzkqPxjz.js";import"./index-Bs984v36.js";import"./index-Bb4qSo10.js";const J={id:"Atoms/Switch",title:"Verified/Atoms/Switch",component:r,tags:["autodocs"]},o={parameters:{author:g["vadym.melnicenko"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},argTypes:{size:{options:["sm","md"],control:{type:"select"}}},render:a=>{const{control:n,handleSubmit:l}=p({defaultValues:{switchValue:!1}}),c=({switchValue:t})=>{console.log("switchValue",t)};return e.jsxs("form",{onSubmit:l(c),className:"flex items-center space-x-2",children:[e.jsx(u,{name:"switchValue",control:n,render:({field:{value:t,onChange:d}})=>e.jsx(r,{id:"airplane-mode",checked:t,onCheckedChange:d,size:a.size})}),e.jsx(h,{htmlFor:"airplane-mode",children:"Airplane Mode"})]})}};var s,m,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'select'
      }
    }
  },
  render: args => {
    const {
      control,
      handleSubmit
    } = useForm({
      defaultValues: {
        switchValue: false
      }
    });
    const onSubmit = ({
      switchValue
    }: {
      switchValue: boolean;
    }) => {
      console.log('switchValue', switchValue);
    };
    return <form onSubmit={handleSubmit(onSubmit)} className="flex items-center space-x-2">
        <Controller name="switchValue" control={control} render={({
        field: {
          value,
          onChange
        }
      }) => {
        return <Switch id="airplane-mode" checked={value} onCheckedChange={onChange} size={args.size} />;
      }} />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </form>;
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const L=["Playground"];export{o as Playground,L as __namedExportsOrder,J as default};
