import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{u as f,C as b}from"./index.esm-CIVLrDKb.js";import"./index-DxSNWJQd.js";import"./index-Cs-iujrC.js";import"./index-BgM8URKI.js";import{B as d}from"./index-B1B20eKX.js";import"./index-DE87Md4O.js";import"./index-DB2XjKS5.js";import"./index-CEqwzp0m.js";import"./index-DU8tCDXn.js";import"./index--95H8BaD.js";import"./index-SEMmvURa.js";import"./index-C5JMlUBv.js";import"./index-C4UwRugS.js";import"./index-BoDFZG65.js";import"./index-DYuW4c3X.js";import"./index-CsppbEUr.js";import"./index-DyH9WKE_.js";import"./index-yVQ8GpKL.js";import"./index-C2ljhKko.js";import"./index-X6uhtR2q.js";import{h as j,F as o,I as m}from"./index-Cfl4cHLg.js";import"./index-ayAK--7p.js";import"./index-C7KBGP9v.js";import"./index-CJcEsfGj.js";import"./index-B2D0X5e1.js";import"./index-BwTXHWaO.js";import"./index-BtiWD3zN.js";import{T as S}from"./index-DvwD3xN1.js";import"./index-2PRu-WXt.js";import"./index-HlHzvzCz.js";import"./index-oKEOTQTD.js";import"./index-Cok5DX02.js";import{s as w,z as s,t as F}from"./index-B3xDiw_8.js";import{a as C}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{A as E}from"./authors-Bh-Wpt1v.js";import"./index-CTjT7uj6.js";import"./index-okHkxgFN.js";import"./index-9_93ZtqA.js";import"./index-BbmHap-z.js";import"./index-Dt9fs78b.js";import"./index-Bv1jJhtj.js";import"./index-Bb4qSo10.js";import"./createLucideIcon-D1mZwjD8.js";import"./index-DV6JdDQx.js";import"./index-MrlrqBgY.js";import"./index-R2VZBBG8.js";import"./index-DSjsB-wa.js";import"./index-BzkqPxjz.js";import"./index-Bs984v36.js";import"./index-muU7fdJh.js";import"./index-BG4Rlmt1.js";import"./index-DrC6v7q5.js";import"./x-C6zOW7R5.js";import"./index-BzjuzjN8.js";import"./assertThisInitialized-ByOjVySJ.js";import"./v4-CQkTLCs1.js";const I=n=>l=>r.jsx(n,{...l,style:{bottom:"-22px"},className:"text-error absolute text-nowrap text-sm text-destructive"}),a=I(w),zr={id:"Molecules/Form",title:"Verified/Molecules/Form",component:j,tags:["autodocs"]},i={parameters:{author:E["vadym.melnicenko"],embedDesign:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},render:()=>{const n=/^(0[1-9]|[12][0-9]|3[01])$/,l=s.object({address1:s.string().min(1,{message:"Address 1 is required"}),address2:s.string().optional(),city:s.string().min(1,{message:"Town/City is required"}),code:s.string().min(1,{message:"Zip/Postal Code is required"}).regex(/^\d+$/,{message:"Zip/Postal Code must be numbers only"}),country:s.string().min(1,{message:"Country is required"}),day:s.string().regex(n,{message:"Invalid day format"}),comment:s.string().min(1,{message:"Comment is required"})}),{register:t,handleSubmit:g,control:x,formState:{errors:e}}=f({resolver:F(l)});return r.jsxs("form",{onSubmit:g(C("[React Hooks Form] Submit")),className:"flex w-[400px] flex-col gap-3 pb-3",children:[r.jsxs("fieldset",{className:"flex flex-col gap-4",children:[r.jsxs(o,{children:[r.jsx(m,{label:"Address 1",...t("address1"),placeholder:"1249 NE Broadway",isErrors:!!e.address1}),r.jsx(a,{errors:e,name:"address1",as:"span"})]}),r.jsx(o,{children:r.jsx(m,{label:"Address 2",...t("address2"),placeholder:"1249 NE Broadway"})}),r.jsxs(o,{children:[r.jsx(m,{label:"Town/City",...t("city"),isErrors:!!e.city,placeholder:"Portland"}),r.jsx(a,{errors:e,name:"city",as:"span"})]}),r.jsxs(o,{children:[r.jsx(m,{label:"Zip/Postal Code",...t("code"),type:"number",isErrors:!!e.code,placeholder:"USA"}),r.jsx(a,{errors:e,name:"code",as:"span"})]}),r.jsxs(o,{children:[r.jsx(m,{label:"Select Country",...t("country"),isErrors:!!e.country,placeholder:"Philips"}),r.jsx(a,{errors:e,name:"country",as:"span"})]})]}),r.jsx("fieldset",{className:"mt-1",children:r.jsxs(o,{children:[r.jsx(b,{control:x,name:"day",render:({field:{onChange:y,value:h}})=>r.jsx(m,{label:"DOB",placeholder:"Day",isErrors:!!e.day,maxLength:2,type:"number",onChange:y,value:h||""})}),r.jsx(a,{errors:e,name:"day",as:"span"})]})}),r.jsx("fieldset",{className:"mt-1",children:r.jsxs(o,{children:[r.jsx(S,{label:"Comment",...t("comment"),isErrors:!!e.comment,placeholder:"Add details"}),r.jsx(a,{errors:e,name:"comment",as:"span"})]})}),r.jsxs("div",{className:"mt-3 flex flex-wrap gap-3",children:[r.jsx(d,{className:"w-full",children:"Save"}),r.jsx(d,{className:"w-full",variant:"tertiary",type:"button",children:"Skip"})]})]})}};var p,c,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesign: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  render: () => {
    const dayRegex = /^(0[1-9]|[12][0-9]|3[01])$/;
    const FormSchema = z.object({
      address1: z.string().min(1, {
        message: 'Address 1 is required'
      }),
      address2: z.string().optional(),
      city: z.string().min(1, {
        message: 'Town/City is required'
      }),
      code: z.string().min(1, {
        message: 'Zip/Postal Code is required'
      }).regex(/^\\d+$/, {
        message: 'Zip/Postal Code must be numbers only'
      }),
      country: z.string().min(1, {
        message: 'Country is required'
      }),
      day: z.string().regex(dayRegex, {
        message: 'Invalid day format'
      }),
      comment: z.string().min(1, {
        message: 'Comment is required'
      })
    });
    const {
      register,
      handleSubmit,
      control,
      formState: {
        errors
      }
    } = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema)
    });
    return <form onSubmit={handleSubmit(action('[React Hooks Form] Submit'))} className="flex w-[400px] flex-col gap-3 pb-3">
        <fieldset className="flex flex-col gap-4">
          <FormItem>
            <Input label="Address 1" {...register('address1')} placeholder="1249 NE Broadway" isErrors={!!errors.address1} />
            <Error errors={errors} name="address1" as="span" />
          </FormItem>
          <FormItem>
            <Input label="Address 2" {...register('address2')} placeholder="1249 NE Broadway" />
          </FormItem>
          <FormItem>
            <Input label="Town/City" {...register('city')} isErrors={!!errors.city} placeholder="Portland" />
            <Error errors={errors} name="city" as="span" />
          </FormItem>
          <FormItem>
            <Input label="Zip/Postal Code" {...register('code')} type="number" isErrors={!!errors.code} placeholder="USA" />
            <Error errors={errors} name="code" as="span" />
          </FormItem>
          <FormItem>
            <Input label="Select Country" {...register('country')} isErrors={!!errors.country} placeholder="Philips" />
            <Error errors={errors} name="country" as="span" />
          </FormItem>
        </fieldset>
        <fieldset className="mt-1">
          <FormItem>
            <Controller control={control} name="day" render={({
            field: {
              onChange,
              value
            }
          }) => <Input label="DOB" placeholder="Day" isErrors={!!errors.day} maxLength={2} type="number" onChange={onChange} value={value || ''} />} />
            <Error errors={errors} name="day" as="span" />
          </FormItem>
        </fieldset>
        <fieldset className="mt-1">
          <FormItem>
            <Textarea label="Comment" {...register('comment')} isErrors={!!errors.comment} placeholder="Add details" />
            <Error errors={errors} name="comment" as="span" />
          </FormItem>
        </fieldset>
        <div className="mt-3 flex flex-wrap gap-3">
          <Button className="w-full">Save</Button>
          <Button className="w-full" variant="tertiary" type="button">
            Skip
          </Button>
        </div>
      </form>;
  }
}`,...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const Br=["Playground"];export{i as Playground,Br as __namedExportsOrder,zr as default};
