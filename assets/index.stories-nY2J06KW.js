import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{u as f,C as b}from"./index.esm-CIVLrDKb.js";import{B as d}from"./index-B1B20eKX.js";import"./index--95H8BaD.js";import{s as j,a as S,z as s,F as o,t as w}from"./index-UlVDEmu1.js";import{I as a}from"./index-BE63wtzH.js";import{a as F}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{A as C}from"./authors-Bh-Wpt1v.js";import{T as E}from"./index-ruQlC87U.js";import"./index-CTjT7uj6.js";import"./index-Bv1jJhtj.js";import"./index-Bb4qSo10.js";import"./index-muU7fdJh.js";import"./index-9_93ZtqA.js";import"./index-BbmHap-z.js";import"./index-Dt9fs78b.js";import"./index-BzjuzjN8.js";import"./tslib.es6-svi90ETI.js";import"./index-DU8tCDXn.js";import"./index-CsppbEUr.js";import"./triangle-alert-BSBlU2XI.js";import"./createLucideIcon-D1mZwjD8.js";import"./search-DoaMBek1.js";import"./x-C6zOW7R5.js";import"./trash-DrqLTfUM.js";import"./v4-CQkTLCs1.js";const I=n=>l=>e.jsx(n,{...l,style:{bottom:"-22px"},className:"text-error absolute text-nowrap text-sm text-destructive"}),m=I(j),Y={id:"Molecules/Form",title:"Verified/Molecules/Form",component:S,tags:["autodocs"]},i={parameters:{author:C["vadym.melnicenko"],embedDesign:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},render:()=>{const n=/^(0[1-9]|[12][0-9]|3[01])$/,l=s.object({address1:s.string().min(1,{message:"Address 1 is required"}),address2:s.string().optional(),city:s.string().min(1,{message:"Town/City is required"}),code:s.string().min(1,{message:"Zip/Postal Code is required"}).regex(/^\d+$/,{message:"Zip/Postal Code must be numbers only"}),country:s.string().min(1,{message:"Country is required"}),day:s.string().regex(n,{message:"Invalid day format"}),comment:s.string().min(1,{message:"Comment is required"})}),{register:t,handleSubmit:g,control:x,formState:{errors:r}}=f({resolver:w(l)});return e.jsxs("form",{onSubmit:g(F("[React Hooks Form] Submit")),className:"flex w-[400px] flex-col gap-3 pb-3",children:[e.jsxs("fieldset",{className:"flex flex-col gap-4",children:[e.jsxs(o,{children:[e.jsx(a,{label:"Address 1",...t("address1"),placeholder:"1249 NE Broadway",isErrors:!!r.address1}),e.jsx(m,{errors:r,name:"address1",as:"span"})]}),e.jsx(o,{children:e.jsx(a,{label:"Address 2",...t("address2"),placeholder:"1249 NE Broadway"})}),e.jsxs(o,{children:[e.jsx(a,{label:"Town/City",...t("city"),isErrors:!!r.city,placeholder:"Portland"}),e.jsx(m,{errors:r,name:"city",as:"span"})]}),e.jsxs(o,{children:[e.jsx(a,{label:"Zip/Postal Code",...t("code"),type:"number",isErrors:!!r.code,placeholder:"USA"}),e.jsx(m,{errors:r,name:"code",as:"span"})]}),e.jsxs(o,{children:[e.jsx(a,{label:"Select Country",...t("country"),isErrors:!!r.country,placeholder:"Philips"}),e.jsx(m,{errors:r,name:"country",as:"span"})]})]}),e.jsx("fieldset",{className:"mt-1",children:e.jsxs(o,{children:[e.jsx(b,{control:x,name:"day",render:({field:{onChange:y,value:h}})=>e.jsx(a,{label:"DOB",placeholder:"Day",isErrors:!!r.day,maxLength:2,type:"number",onChange:y,value:h||""})}),e.jsx(m,{errors:r,name:"day",as:"span"})]})}),e.jsx("fieldset",{className:"mt-1",children:e.jsxs(o,{children:[e.jsx(E,{label:"Comment",...t("comment"),isErrors:!!r.comment,placeholder:"Add details"}),e.jsx(m,{errors:r,name:"comment",as:"span"})]})}),e.jsxs("div",{className:"mt-3 flex flex-wrap gap-3",children:[e.jsx(d,{className:"w-full",children:"Save"}),e.jsx(d,{className:"w-full",variant:"tertiary",type:"button",children:"Skip"})]})]})}};var c,p,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const ee=["Playground"];export{i as Playground,ee as __namedExportsOrder,Y as default};
