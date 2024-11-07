import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{S as h}from"./index-BxwXBefv.js";import{c as s}from"./index-BxTXOyjN.js";import{C as f}from"./chevron-right-C8EMzIDi.js";import{A as B}from"./authors-Bh-Wpt1v.js";import"./index-DRjF_FHU.js";import"./createLucideIcon-UCnLdqZo.js";const l=({...r})=>e.jsx("nav",{"aria-label":"breadcrumb",...r}),u=({className:r,...a})=>e.jsx("ol",{className:s("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-text",r),...a}),o=({className:r,...a})=>e.jsx("li",{className:s("inline-flex items-center gap-1.5",r),...a}),d=({asChild:r,className:a,...t})=>{const g=r?h:"a";return e.jsx(g,{className:s("text-secondary-text transition-colors hover:text-foreground",a),...t})},b=({className:r,...a})=>e.jsx("span",{role:"link","aria-disabled":"true","aria-current":"page",className:s("font-normal text-foreground",r),...a}),n=({children:r,className:a,...t})=>e.jsx("li",{role:"presentation","aria-hidden":"true",className:s("[&>svg]:size-5",a),...t,children:r??e.jsx(f,{})});l.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{separator:{required:!1,tsType:{name:"ReactNode"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};o.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};d.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};n.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};const A={id:"Atoms/Breadcrumb",title:"Verified/Atoms/Breadcrumb",component:l,tags:["autodocs"],argTypes:{children:{control:!1}}},m={parameters:{author:B["vadym.melnicenko"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{children:e.jsxs(u,{children:[e.jsx(o,{children:e.jsx(d,{href:"/",children:"Home"})}),e.jsx(n,{}),e.jsx(o,{children:e.jsx(d,{href:"/components",children:"Components"})}),e.jsx(n,{}),e.jsx(o,{children:e.jsx(b,{children:"Breadcrumb"})})]})}};var i,c,p;m.parameters={...m.parameters,docs:{...(i=m.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    children: <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
  }
}`,...(p=(c=m.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const N=["Playground"];export{m as Playground,N as __namedExportsOrder,A as default};
