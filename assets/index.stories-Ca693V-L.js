import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as f}from"./index-CTjT7uj6.js";import{B as C}from"./index-B1B20eKX.js";import{I as b}from"./index-DU8tCDXn.js";import"./index-CsppbEUr.js";import{c as d}from"./index-Bv1jJhtj.js";import{a as N}from"./index-DyKNNN6Z.js";import{A as T}from"./authors-Bh-Wpt1v.js";import{B as S}from"./constants-BP086JmV.js";import{A as y,a as v}from"./arrow-right-BITZWE2a.js";import"./index-Bb4qSo10.js";import"./index-Cc1vX98B.js";import"./index-BSevPOpd.js";import"./index-Dt9fs78b.js";import"./index-Cq_MIWH_.js";import"./index-9_93ZtqA.js";import"./index-BbmHap-z.js";import"./index-BiCwzpk8.js";import"./index-RKEYk0Hx.js";import"./floating-ui.dom-DUxIRmir.js";import"./index-B8az7Mm2.js";import"./index-cgsyMFoz.js";import"./createLucideIcon-D1mZwjD8.js";const x=({isCollapsed:t,contentOpen:r,contentCollapsed:s})=>e.jsx(e.Fragment,{children:t?s:r}),h=({originalTrigger:t,isCollapsed:r,onClick:s})=>{const a=f.cloneElement(t,{onClick:s,isCollapsed:r});return e.jsx(e.Fragment,{children:a})},c=({isCollapsed:t,toggleSidebar:r,contentOpen:s,contentCollapsed:a,className:n,trigger:i,...l})=>e.jsxs("aside",{className:d("relative flex",n),...l,children:[e.jsx(h,{originalTrigger:i,isCollapsed:t,onClick:r}),e.jsx(x,{isCollapsed:t,contentOpen:s,contentCollapsed:a})]});x.__docgenInfo={description:"",methods:[],displayName:"SidebarContent",props:{isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},contentOpen:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},contentCollapsed:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},contentClassName:{required:!1,tsType:{name:"string"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{contentOpen:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},contentCollapsed:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},toggleSidebar:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},trigger:{required:!0,tsType:{name:"ReactElement",elements:[{name:"signature",type:"object",raw:`{
  onClick: () => void;
  isCollapsed: boolean;
}`,signature:{properties:[{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"isCollapsed",value:{name:"boolean",required:!0}}]}}],raw:"ReactElement<CustomTriggerProps>"},description:""}}};const R=0,p="flex ease-linear overflow-hidden duration-300 sticky inset-y-0 left-0 z-10 p-2 flex-col border-r bg-background border-border",Q={id:"Molecules/Sidebar",title:"Verified/Molecules/Sidebar",component:c,tags:["autodocs"],parameters:{badges:[S.CUSTOM]}},o={parameters:{author:T["vadym.melnicenko"]},args:{},argTypes:{contentCollapsed:{control:!1},contentOpen:{control:!1},className:{control:!1},isCollapsed:{control:!1},toggleSidebar:{control:!1},trigger:{control:!1}},render:t=>{const[r,s]=f.useState(!1),a=()=>{s(l=>!l)},n=e.jsx("div",{className:d(p,"w-[262px]"),children:e.jsx(C,{size:"sm",className:"w-full",children:e.jsxs("div",{className:"flex items-center gap-2",children:["ICON",e.jsx("span",{children:"Text"})]})})}),i=e.jsx("div",{className:d(p,"w-[100px]"),children:"ICON"});return e.jsx(N,{delayDuration:R,children:e.jsx("div",{className:"flex justify-start",children:e.jsx(c,{isCollapsed:t.isCollapsed||r,toggleSidebar:a,contentOpen:n,contentCollapsed:i,trigger:e.jsx(b,{...t,paint:"brand",size:"x-sm",shape:"square",className:"absolute -right-2 top-[5px] z-20 hidden rounded sm:flex",icon:r?e.jsx(y,{}):e.jsx(v,{})})})})})}};var m,u,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko']
  },
  args: {},
  argTypes: {
    contentCollapsed: {
      control: false
    },
    contentOpen: {
      control: false
    },
    className: {
      control: false
    },
    isCollapsed: {
      control: false
    },
    toggleSidebar: {
      control: false
    },
    trigger: {
      control: false
    }
  },
  render: args => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const handleToggleSidebar = () => {
      setIsSidebarCollapsed(prevState => !prevState);
    };
    const contentOpen = <div className={cn(contentClass, 'w-[262px]')}>
        <Button size="sm" className="w-full">
          <div className="flex items-center gap-2">
            ICON
            <span>Text</span>
          </div>
        </Button>
      </div>;
    const contentCollapsed = <div className={cn(contentClass, 'w-[100px]')}>ICON</div>;
    return <TooltipProvider delayDuration={TOOLTIP_DELAY_DURATION}>
        <div className="flex justify-start">
          <Sidebar isCollapsed={args.isCollapsed || isSidebarCollapsed} toggleSidebar={handleToggleSidebar} contentOpen={contentOpen} contentCollapsed={contentCollapsed} trigger={<IconButton {...args} paint="brand" size="x-sm" shape="square" className="absolute -right-2 top-[5px] z-20 hidden rounded sm:flex" icon={isSidebarCollapsed ? <ArrowRight /> : <ArrowLeft />} />} />
        </div>
      </TooltipProvider>;
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const W=["Playground"];export{o as Playground,W as __namedExportsOrder,Q as default};
