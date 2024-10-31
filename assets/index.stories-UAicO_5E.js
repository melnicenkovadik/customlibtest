import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as x}from"./index-CTjT7uj6.js";import{u as T}from"./index.esm-CIVLrDKb.js";import{B as Z}from"./index-B1B20eKX.js";import{I as w}from"./index-DU8tCDXn.js";import"./index-CsppbEUr.js";import{z as S,F as U,t as H,s as _}from"./index-UlVDEmu1.js";import{c as q}from"./index-Bv1jJhtj.js";import{a as y}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{I as t,E as G}from"./index-BE63wtzH.js";import{A as o}from"./authors-Bh-Wpt1v.js";import{P as K}from"./plus-C23Dzk4t.js";import"./index-Bb4qSo10.js";import"./index-Dt9fs78b.js";import"./index--95H8BaD.js";import"./index-muU7fdJh.js";import"./index-9_93ZtqA.js";import"./index-BbmHap-z.js";import"./v4-CQkTLCs1.js";import"./index-BzjuzjN8.js";import"./tslib.es6-svi90ETI.js";import"./triangle-alert-BSBlU2XI.js";import"./createLucideIcon-D1mZwjD8.js";import"./search-DoaMBek1.js";import"./x-C6zOW7R5.js";import"./trash-DrqLTfUM.js";const L=r=>s=>e.jsx(r,{...s,className:"text-error absolute bottom-[-22px] text-sm text-destructive"}),ve={id:"Molecules/Input",title:"Verified/Molecules/Input",component:t,tags:["autodocs"],argTypes:{start:{control:!1},end:{control:!1}}};t.displayName="InputComponent";const c={parameters:{author:o["vadym.melnicenko"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{disabled:!1,onChange:y("on-change"),label:"Email",type:"email",onClear:y("on-change-search-input")},render:r=>{var b;const s=S.object({email:S.string().email("Invalid email address").nonempty("Email is required")}),{handleSubmit:a,register:n,formState:i}=T({resolver:H(s)}),{errors:l}=i,m=(b=l.email)==null?void 0:b.message,f=Object.keys(l).length>0,M=()=>{};return e.jsxs("form",{onSubmit:a(M),className:q("flex w-full items-center justify-center gap-3 pb-3",r.disabled&&"pointer-events-none opacity-[0.5]"),children:[e.jsx(U,{className:"flex-1",children:e.jsx(t,{label:"Email",...n("email"),isErrors:f,id:"email",start:e.jsx(w,{paint:"neutral",version:"ghost",icon:e.jsx(K,{className:"h-[18px] w-[18px] text-muted-text"}),className:"h-[18px] w-[18px]"}),end:!m&&e.jsx(w,{paint:"neutral",version:"ghost",className:"h-[18px] w-[18px]",icon:e.jsx(G,{className:"h-[18px] w-[18px] text-muted-text"})}),helperText:m?void 0:"Enter your email address",error:m,disabled:r.disabled})}),e.jsx(Z,{className:"mt-0",variant:"secondary",children:"Submit"})]})}},p={args:{},parameters:{author:o["vadym.melnicenko"]},render:()=>e.jsx(t,{onChange:()=>{},placeholder:"Enter your name",className:"w-[250px]",inputWrapperClassName:"border-0 rounded-none border-b shadow-none outline-0 outline-offset-0"})},d={args:{},parameters:{author:o["vadym.melnicenko"]},render:()=>{const r=S.object({firstName:S.string().min(2,{message:"Required"})}),{handleSubmit:s,register:a,formState:n}=T({resolver:H(r)}),{errors:i}=n,l=Object.keys(i).length>0,m=()=>{},f=L(_);return e.jsxs("form",{onSubmit:s(m),className:"flex w-[250px] flex-col gap-3 pb-3",children:[e.jsxs(U,{children:[e.jsx(t,{label:"First Name",...a("firstName"),isErrors:l,placeholder:"John",id:"firstName"}),e.jsx(f,{errors:i,name:"firstName",as:"span"})]}),e.jsx(Z,{className:"mt-3",children:"Submit"})]})}},u={args:{},parameters:{author:o["vadym.melnicenko"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},render:()=>{const[r,s]=x.useState("");return e.jsx(t,{value:r,onChange:a=>s(a.target.value),placeholder:"Enter your password",label:"Password",type:"password"})}},g={args:{},parameters:{author:o["vadym.melnicenko"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},render:()=>{const[r,s]=x.useState("");return e.jsx(t,{className:"w-[250px]",placeholder:"Search...",onChange:a=>s(a.target.value),value:r,onClear:()=>s(""),type:"search"})}},h={parameters:{author:o["vadym.melnicenko"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{disabled:!1,maxSize:1048576,maxNumberImg:4},render:r=>{const[s,a]=x.useState("");return e.jsx("div",{className:q(r.disabled&&"pointer-events-none opacity-[0.5]"),children:e.jsx(t,{className:"w-[320px]",disabled:r.disabled,placeholder:"Choose File",onChange:n=>a(n.target.value),value:s,onClear:()=>a(""),type:"upload-file",label:"Picture",fileName:"Choose File",acceptFile:{"image/jpeg":[".jpeg",".png"],"application/pdf":[".pdf"],"application/msword":[".doc"],"text/plain":[".txt"]},maxSize:r.maxSize,maxNumberImg:r.maxNumberImg})})}};var v,N,I;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    disabled: false,
    onChange: action('on-change'),
    label: 'Email',
    type: 'email',
    onClear: action('on-change-search-input')
  },
  render: args => {
    const FormSchema = z.object({
      email: z.string().email('Invalid email address').nonempty('Email is required')
    });
    const {
      handleSubmit,
      register,
      formState
    } = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema)
    });
    const {
      errors
    } = formState;
    const error = errors.email?.message;
    const isErrors = Object.keys(errors).length > 0;
    const onSubmit = () => {};
    return <form onSubmit={handleSubmit(onSubmit)} className={cn('flex w-full items-center justify-center gap-3 pb-3', args.disabled && 'pointer-events-none opacity-[0.5]')}>
        <FormItem className="flex-1">
          <Input label="Email" {...register('email')} isErrors={isErrors} id="email" start={<IconButton paint="neutral" version="ghost" icon={<Plus className="h-[18px] w-[18px] text-muted-text" />} className="h-[18px] w-[18px]" />} end={!error && <IconButton paint="neutral" version="ghost" className="h-[18px] w-[18px]" icon={<Eye className="h-[18px] w-[18px] text-muted-text" />} />} helperText={error ? undefined : 'Enter your email address'} error={error} disabled={args.disabled} />
        </FormItem>
        <Button className="mt-0" variant="secondary">
          Submit
        </Button>
      </form>;
  }
}`,...(I=(N=c.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var F,j,C;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {},
  parameters: {
    author: AUTHORS['vadym.melnicenko']
  },
  render: () => {
    return <Input onChange={() => {}} placeholder="Enter your name" className="w-[250px]" inputWrapperClassName="border-0 rounded-none border-b shadow-none outline-0 outline-offset-0" />;
  }
}`,...(C=(j=p.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var E,A,z;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {},
  parameters: {
    author: AUTHORS['vadym.melnicenko']
  },
  render: () => {
    const FormSchema = z.object({
      firstName: z.string().min(2, {
        message: 'Required'
      })
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {
      handleSubmit,
      register,
      formState
    } = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema)
    });
    const {
      errors
    } = formState;
    const isErrors = Object.keys(errors).length > 0;
    const onSubmit = () => {};
    const Error = withStyles(ErrorMessage);
    return <form onSubmit={handleSubmit(onSubmit)} className="flex w-[250px] flex-col gap-3 pb-3">
        <FormItem>
          <Input label="First Name" {...register('firstName')} isErrors={isErrors} placeholder="John" id="firstName" />
          <Error errors={errors} name="firstName" as="span" />
        </FormItem>
        <Button className="mt-3">Submit</Button>
      </form>;
  }
}`,...(z=(A=d.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var k,D,O;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {},
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState('');
    return <Input value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" label="Password" type="password" />;
  }
}`,...(O=(D=u.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var V,P,B;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {},
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');
    return <Input className="w-[250px]" placeholder="Search..." onChange={e => setValue(e.target.value)} value={value} onClear={() => setValue('')} type="search" />;
  }
}`,...(B=(P=g.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var J,R,W;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    disabled: false,
    maxSize: 1048576,
    // 1 MB
    maxNumberImg: 4
  },
  render: (args: InputArgs) => {
    const [value, setValue] = useState('');
    return <div className={cn(args.disabled && 'pointer-events-none opacity-[0.5]')}>
        <Input className="w-[320px]" disabled={args.disabled} placeholder="Choose File" onChange={e => setValue(e.target.value)} value={value} onClear={() => setValue('')} type="upload-file" label="Picture" fileName="Choose File" acceptFile={{
        'image/jpeg': ['.jpeg', '.png'],
        'application/pdf': ['.pdf'],
        'application/msword': ['.doc'],
        'text/plain': ['.txt']
      }} maxSize={args.maxSize} maxNumberImg={args.maxNumberImg} />
      </div>;
  }
}`,...(W=(R=h.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const Ne=["Playground","InputBottomBorder","InputInsideForm","InputPassword","InputSearch","InputPictureUploaded"];export{p as InputBottomBorder,d as InputInsideForm,u as InputPassword,h as InputPictureUploaded,g as InputSearch,c as Playground,Ne as __namedExportsOrder,ve as default};
