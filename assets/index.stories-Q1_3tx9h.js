import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as f}from"./index-DRjF_FHU.js";import{B as C}from"./index-DlETWc0l.js";import{I as b}from"./index-Bbth8Pe4.js";import"./index-Be8r5GCZ.js";import{c as d}from"./index-BxTXOyjN.js";import{a as N}from"./index-C9Ui-IDc.js";import{A as T}from"./authors-Bh-Wpt1v.js";import{B as S}from"./constants-BP086JmV.js";import{A as y,a as v}from"./arrow-right-BOUYNn4e.js";import"./index-Bb4qSo10.js";import"./index-CZSCZb7H.js";import"./index-CUWL0Rm-.js";import"./index-CpgLm8gy.js";import"./index-BxwXBefv.js";import"./index-Iz9Zo_Nw.js";import"./index-DNKPQSo6.js";import"./index-qspcADvA.js";import"./index-rX-Bn4lm.js";import"./index-DwWtoRQM.js";import"./index-CY6KjWoQ.js";import"./index-C79cgVSs.js";import"./floating-ui.dom-D0xtKlXs.js";import"./index-T3KOkZhn.js";import"./createLucideIcon-UCnLdqZo.js";const x=({isCollapsed:t,contentOpen:r,contentCollapsed:s})=>e.jsx(e.Fragment,{children:t?s:r}),h=({originalTrigger:t,isCollapsed:r,onClick:s})=>{const o=f.cloneElement(t,{onClick:s,isCollapsed:r});return e.jsx(e.Fragment,{children:o})},c=({isCollapsed:t,toggleSidebar:r,contentOpen:s,contentCollapsed:o,className:n,trigger:i,...l})=>e.jsxs("aside",{className:d("relative flex",n),...l,children:[e.jsx(h,{originalTrigger:i,isCollapsed:t,onClick:r}),e.jsx(x,{isCollapsed:t,contentOpen:s,contentCollapsed:o})]});x.__docgenInfo={description:"",methods:[],displayName:"SidebarContent",props:{isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},contentOpen:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},contentCollapsed:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},contentClassName:{required:!1,tsType:{name:"string"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{contentOpen:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},contentCollapsed:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},toggleSidebar:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},trigger:{required:!0,tsType:{name:"ReactElement",elements:[{name:"signature",type:"object",raw:`{
  onClick: () => void;
  isCollapsed: boolean;
}`,signature:{properties:[{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"isCollapsed",value:{name:"boolean",required:!0}}]}}],raw:"ReactElement<CustomTriggerProps>"},description:""}}};const R=0,p="flex ease-linear overflow-hidden duration-300 sticky inset-y-0 left-0 z-10 p-2 flex-col border-r bg-background border-border",X={id:"Molecules/Sidebar",title:"Verified/Molecules/Sidebar",component:c,tags:["autodocs"],parameters:{badges:[S.CUSTOM]}},a={parameters:{author:T["vadym.melnicenko"]},args:{},argTypes:{contentCollapsed:{control:!1},contentOpen:{control:!1},className:{control:!1},isCollapsed:{control:!1},toggleSidebar:{control:!1},trigger:{control:!1}},render:t=>{const[r,s]=f.useState(!1),o=()=>{s(l=>!l)},n=e.jsx("div",{className:d(p,"w-[262px]"),children:e.jsx(C,{size:"sm",className:"w-full",children:e.jsxs("div",{className:"flex items-center gap-2",children:["ICON",e.jsx("span",{children:"Text"})]})})}),i=e.jsx("div",{className:d(p,"w-[100px]"),children:"ICON"});return e.jsx(N,{delayDuration:R,children:e.jsx("div",{className:"flex justify-start",children:e.jsx(c,{isCollapsed:t.isCollapsed||r,toggleSidebar:o,contentOpen:n,contentCollapsed:i,trigger:e.jsx(b,{...t,paint:"brand",size:"x-sm",shape:"square",className:"absolute -right-2 top-[5px] z-20 hidden rounded sm:flex",icon:r?e.jsx(y,{}):e.jsx(v,{})})})})})}};var m,u,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const Z=["Playground"];export{a as Playground,Z as __namedExportsOrder,X as default};
