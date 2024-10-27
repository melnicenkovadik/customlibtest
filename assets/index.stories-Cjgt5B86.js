import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as j}from"./index-CTjT7uj6.js";import{N as k,T as o,_ as d}from"./index-HlHzvzCz.js";import"./index-DxSNWJQd.js";import"./index-Cs-iujrC.js";import"./index-BgM8URKI.js";import{B as a}from"./index-B1B20eKX.js";import"./index-DE87Md4O.js";import"./index-DB2XjKS5.js";import"./index-CEqwzp0m.js";import"./index-DU8tCDXn.js";import"./index--95H8BaD.js";import"./index-SEMmvURa.js";import"./index-C5JMlUBv.js";import"./index-C4UwRugS.js";import"./index-BoDFZG65.js";import"./index-DYuW4c3X.js";import"./index-CsppbEUr.js";import"./index-DyH9WKE_.js";import{A as c}from"./authors-Bh-Wpt1v.js";import"./index-Bv1jJhtj.js";import"./x-C6zOW7R5.js";import"./createLucideIcon-D1mZwjD8.js";import"./index-okHkxgFN.js";import"./index-9_93ZtqA.js";import"./index-BbmHap-z.js";import"./index-Dt9fs78b.js";import"./index-Bb4qSo10.js";import"./index-DV6JdDQx.js";import"./index-MrlrqBgY.js";import"./index-R2VZBBG8.js";import"./index-DSjsB-wa.js";import"./index-BzkqPxjz.js";import"./index-Bs984v36.js";import"./index-muU7fdJh.js";const ge={id:"Molecules/Toast",title:"Verified/Molecules/Toast",tags:["autodocs"]},i={parameters:{author:c["vadym.melnicenko"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],embedOrientation:"vertical",designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{variant:"destructive",removePrevious:!1,durationSec:1,maxVisible:1},argTypes:{variant:{options:["base","destructive","with-avatar"],control:{type:"select"}}},render:({variant:t,removePrevious:C,durationSec:D,maxVisible:A})=>{const[O,N]=j.useState(""),T={base:s=>e.jsx(o,{id:s,header:"Scheduled: Catch up",description:new Date().toString(),suffix:e.jsx(a,{variant:"outline",onClick:()=>console.log("on-undo"),children:"Undo"})}),destructive:s=>e.jsx(o,{id:s,className:"border-0 bg-destructive text-secondary",header:"Uh oh! Something went wrong.",headerClassName:"text-secondary",description:"There was a problem with your request.",descriptionClassName:"text-secondary",suffix:e.jsx(a,{variant:"outline",className:"bg-destructive text-secondary hover:bg-destructive-hover active:bg-destructive-active",onClick:()=>console.log("on-try-again"),children:"Try Again"})}),"with-avatar":s=>e.jsx(o,{id:s,className:"w-[375px]",avatarSrc:"./assets/avatar.jpg",header:"Hey! Have you seen the new pool?!",description:"shyfrens.Custom",descriptionClassName:"text-secondary-text"})},V=()=>{C&&d.remove(O),N(d.custom(({id:s})=>T[t](s),{duration:D*1e3}))};return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:V,children:`Create a ${t} toast`}),e.jsx(k,{maxVisible:A})]})}},r={parameters:{author:c["vadym.melnicenko"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],embedOrientation:"vertical",designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{id:"1",className:"bg-destructive text-secondary",header:"Uh oh! Something went wrong.",headerClassName:"text-secondary",description:"There was a problem with your request.",descriptionClassName:"text-secondary",suffix:e.jsx(a,{variant:"outline",className:"bg-destructive text-secondary hover:bg-destructive-hover active:bg-destructive-active",onClick:()=>console.log("on-try-again"),children:"Try Again"}),onClose:console.log("on-close")},render:t=>e.jsx(o,{...t})},n={parameters:{author:c["vadym.melnicenko"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],embedOrientation:"vertical",designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{id:"1",header:"Scheduled: Catch up",description:new Date().toString(),suffix:e.jsx(a,{variant:"outline",onClick:()=>console.log("on-undo"),children:"Undo"}),onClose:console.log("on-close")},render:t=>e.jsx(o,{...t})},m={parameters:{author:c["vadym.melnicenko"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],embedOrientation:"vertical",designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{id:"1",className:"w-[375px]",avatarSrc:"./assets/avatar.jpg",header:"Lorem ipsum dolor sit amet",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",descriptionClassName:"text-secondary-text",onClose:console.log("on-close")},render:t=>e.jsx(o,{...t})};var l,p,g;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    embedOrientation: 'vertical',
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    variant: 'destructive',
    removePrevious: false,
    durationSec: 1,
    maxVisible: 1
  },
  argTypes: {
    variant: {
      options: ['base', 'destructive', 'with-avatar'],
      control: {
        type: 'select'
      }
    }
  },
  render: ({
    variant,
    removePrevious,
    durationSec,
    maxVisible
  }) => {
    const [prev, setPrev] = useState<string>('');
    const options = {
      base: (id: string) => <Toast id={id} header="Scheduled: Catch up" description={new Date().toString()} suffix={<Button variant="outline" onClick={() => console.log('on-undo')}>
              Undo
            </Button>} />,
      destructive: (id: string) => <Toast id={id} className="border-0 bg-destructive text-secondary" header="Uh oh! Something went wrong." headerClassName="text-secondary" description="There was a problem with your request." descriptionClassName="text-secondary" suffix={<Button variant="outline" className="bg-destructive text-secondary hover:bg-destructive-hover active:bg-destructive-active" onClick={() => console.log('on-try-again')}>
              Try Again
            </Button>} />,
      'with-avatar': (id: string) => <Toast id={id} className="w-[375px]" avatarSrc="./assets/avatar.jpg" header="Hey! Have you seen the new pool?!" description="shyfrens.Custom" descriptionClassName="text-secondary-text" />
    } as any;
    const notify = () => {
      if (removePrevious) {
        toast.remove(prev);
      }
      setPrev(toast.custom(({
        id
      }) => options[variant](id), {
        duration: durationSec * 1000
      }));
    };
    return <>
        <Button onClick={notify}>{\`Create a \${variant} toast\`}</Button>
        <Notifications maxVisible={maxVisible} />
      </>;
  }
}`,...(g=(p=i.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,h,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    embedOrientation: 'vertical',
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    id: '1',
    className: 'bg-destructive text-secondary',
    header: 'Uh oh! Something went wrong.',
    headerClassName: 'text-secondary',
    description: 'There was a problem with your request.',
    descriptionClassName: 'text-secondary',
    suffix: <Button variant="outline" className="bg-destructive text-secondary hover:bg-destructive-hover active:bg-destructive-active" onClick={() => console.log('on-try-again')}>
        Try Again
      </Button>,
    onClose: console.log('on-close')
  },
  render: (args: any) => <Toast {...args} />
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var w,y,S;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    embedOrientation: 'vertical',
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    id: '1',
    header: 'Scheduled: Catch up',
    description: new Date().toString(),
    suffix: <Button variant="outline" onClick={() => console.log('on-undo')}>
        Undo
      </Button>,
    onClose: console.log('on-close')
  },
  render: (args: any) => <Toast {...args} />
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var f,b,x;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    embedOrientation: 'vertical',
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    id: '1',
    className: 'w-[375px]',
    avatarSrc: './assets/avatar.jpg',
    header: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    descriptionClassName: 'text-secondary-text',
    onClose: console.log('on-close')
  },
  render: (args: any) => <Toast {...args} />
}`,...(x=(b=m.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const ue=["Playground","Destructive","Base","WithAvatar"];export{n as Base,r as Destructive,i as Playground,m as WithAvatar,ue as __namedExportsOrder,ge as default};
