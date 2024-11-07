import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{B as d}from"./index-Ds8zFNib.js";import{a as p,T as c,b as u,d as g}from"./index-C9Ui-IDc.js";import{c as M}from"./index-BxTXOyjN.js";import{A as f}from"./authors-Bh-Wpt1v.js";import{M as t}from"./mail-DhTzO1sy.js";import"./index-DRjF_FHU.js";import"./index-Bb4qSo10.js";import"./index-CUWL0Rm-.js";import"./index-CpgLm8gy.js";import"./index-BxwXBefv.js";import"./index-DwWtoRQM.js";import"./index-qspcADvA.js";import"./index-rX-Bn4lm.js";import"./index-CY6KjWoQ.js";import"./index-C79cgVSs.js";import"./floating-ui.dom-D0xtKlXs.js";import"./index-DNKPQSo6.js";import"./index-T3KOkZhn.js";import"./createLucideIcon-UCnLdqZo.js";const s=({disabled:o=!1,className:n,...l})=>e.jsx("li",{tabIndex:o?-1:0,className:M("flex items-center gap-x-2 rounded p-2 text-sm outline-none",o?"opacity-50":"cursor-pointer hover:bg-secondary focus:bg-secondary",n),...l});s.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const F={id:"Molecules/MenuItem",title:"Verified/Molecules/MenuItem",component:s,tags:["autodocs"]},i={parameters:{author:f["vadym.melnicenko"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{},render:()=>e.jsxs("ul",{children:[e.jsxs(s,{children:[e.jsx(t,{size:16})," Menu Item"]}),e.jsxs(s,{disabled:!0,children:[e.jsx(t,{size:16})," Menu Item"]}),e.jsx(s,{className:"pl-8",children:"Menu Item"}),e.jsx(s,{className:"pl-8",disabled:!0,children:"Menu Item"}),e.jsx(s,{className:"w-fit",children:e.jsx(t,{size:16})}),e.jsx(s,{className:"w-fit",disabled:!0,children:e.jsx(t,{size:16})}),e.jsxs(s,{className:"w-fit",children:[e.jsx(t,{size:16}),e.jsx(p,{children:e.jsxs(c,{children:[e.jsx(u,{children:e.jsx(d,{variant:"secondary",className:"border-0",children:"Tooltip"})}),e.jsx(g,{children:e.jsx("p",{children:"Add to library"})})]})})]})]})};var r,m,a;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {},
  render: () => {
    return <ul>
        <MenuItem>
          <Mail size={16} /> Menu Item
        </MenuItem>
        <MenuItem disabled={true}>
          <Mail size={16} /> Menu Item
        </MenuItem>
        <MenuItem className="pl-8">Menu Item</MenuItem>
        <MenuItem className="pl-8" disabled={true}>
          Menu Item
        </MenuItem>
        <MenuItem className="w-fit">
          <Mail size={16} />
        </MenuItem>
        <MenuItem className="w-fit" disabled={true}>
          <Mail size={16} />
        </MenuItem>
        <MenuItem className="w-fit">
          <Mail size={16} />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Badge variant="secondary" className="border-0">
                  Tooltip
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </MenuItem>
      </ul>;
  }
}`,...(a=(m=i.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const J=["Playground"];export{i as Playground,J as __namedExportsOrder,F as default};
