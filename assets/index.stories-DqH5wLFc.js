import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import"./index-DxSNWJQd.js";import"./index-Cs-iujrC.js";import"./index-BgM8URKI.js";import{B as d}from"./index-B1B20eKX.js";import"./index-DE87Md4O.js";import"./index-DB2XjKS5.js";import"./index-CEqwzp0m.js";import"./index-DU8tCDXn.js";import{L as i}from"./index--95H8BaD.js";import"./index-SEMmvURa.js";import"./index-C5JMlUBv.js";import"./index-C4UwRugS.js";import"./index-BoDFZG65.js";import"./index-DYuW4c3X.js";import{T as l}from"./index-CsppbEUr.js";import"./index-DyH9WKE_.js";import{e as m,f as n,g as c,I as t}from"./index-Cfl4cHLg.js";import{A as h}from"./authors-Bh-Wpt1v.js";import{B as g}from"./constants-BP086JmV.js";import"./index-CTjT7uj6.js";import"./index-okHkxgFN.js";import"./index-9_93ZtqA.js";import"./index-BbmHap-z.js";import"./index-Dt9fs78b.js";import"./index-Bv1jJhtj.js";import"./index-Bb4qSo10.js";import"./createLucideIcon-D1mZwjD8.js";import"./index-DV6JdDQx.js";import"./index-MrlrqBgY.js";import"./index-R2VZBBG8.js";import"./index-DSjsB-wa.js";import"./index-BzkqPxjz.js";import"./index-Bs984v36.js";import"./index-muU7fdJh.js";import"./index-yVQ8GpKL.js";import"./index-C2ljhKko.js";import"./index-ayAK--7p.js";import"./index-BG4Rlmt1.js";import"./index-DrC6v7q5.js";import"./index-X6uhtR2q.js";import"./x-C6zOW7R5.js";import"./index-oKEOTQTD.js";import"./index.esm-CIVLrDKb.js";import"./index-C7KBGP9v.js";import"./index-BzjuzjN8.js";import"./index-CJcEsfGj.js";import"./index-B2D0X5e1.js";import"./assertThisInitialized-ByOjVySJ.js";import"./index-BwTXHWaO.js";import"./index-BtiWD3zN.js";import"./index-DvwD3xN1.js";import"./index-2PRu-WXt.js";import"./index-HlHzvzCz.js";import"./index-Cok5DX02.js";const xe={id:"Molecules/Popover",title:"Verified/Molecules/Popover",component:m,tags:["autodocs"],parameters:{badges:[g.CUSTOM]}},s={parameters:{author:h["vadym.melnicenko"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{},render:p=>e.jsxs(m,{...p,children:[e.jsx(n,{asChild:!0,children:e.jsx(d,{variant:"outline",children:"Open popover"})}),e.jsx(c,{className:"w-80",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{size:"heading4",tag:"h4",className:"font-medium",children:"Dimensions"}),e.jsx("p",{className:"text-sm text-muted-text",children:"Set the dimensions for the layer."})]}),e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(i,{htmlFor:"width",children:"Width"}),e.jsx(t,{id:"width",defaultValue:"100%",className:"col-span-2 h-8"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(i,{htmlFor:"maxWidth",children:"Max. width"}),e.jsx(t,{id:"maxWidth",defaultValue:"300px",className:"col-span-2 h-8"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(i,{htmlFor:"height",children:"Height"}),e.jsx(t,{id:"height",defaultValue:"25px",className:"col-span-2 h-8"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(i,{htmlFor:"maxHeight",children:"Max. height"}),e.jsx(t,{id:"maxHeight",defaultValue:"none",className:"col-span-2 h-8"})]})]})]})})]})};var a,r,o;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {},
  render: args => {
    return <Popover {...args}>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Typography size="heading4" tag="h4" className="font-medium">
                Dimensions
              </Typography>
              <p className="text-sm text-muted-text">
                Set the dimensions for the layer.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Width</Label>
                <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Max. width</Label>
                <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">Height</Label>
                <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxHeight">Max. height</Label>
                <Input id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>;
  }
}`,...(o=(r=s.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const ve=["Playground"];export{s as Playground,ve as __namedExportsOrder,xe as default};
