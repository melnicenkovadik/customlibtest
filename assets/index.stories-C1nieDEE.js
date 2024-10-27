import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as u}from"./index-CTjT7uj6.js";import"./index-DxSNWJQd.js";import"./index-Cs-iujrC.js";import"./index-BgM8URKI.js";import{B as x}from"./index-B1B20eKX.js";import"./index-DE87Md4O.js";import"./index-DB2XjKS5.js";import"./index-CEqwzp0m.js";import{I as b}from"./index-DU8tCDXn.js";import"./index--95H8BaD.js";import"./index-SEMmvURa.js";import"./index-C5JMlUBv.js";import"./index-C4UwRugS.js";import"./index-BoDFZG65.js";import"./index-DYuW4c3X.js";import"./index-CsppbEUr.js";import"./index-DyH9WKE_.js";import"./index-yVQ8GpKL.js";import{A as C,f as S}from"./index-C2ljhKko.js";import"./index-X6uhtR2q.js";import{S as p}from"./index-Cfl4cHLg.js";import"./index-ayAK--7p.js";import"./index-C7KBGP9v.js";import"./index-CJcEsfGj.js";import"./index-B2D0X5e1.js";import"./index-BwTXHWaO.js";import"./index-BtiWD3zN.js";import"./index-DvwD3xN1.js";import"./index-2PRu-WXt.js";import"./index-HlHzvzCz.js";import{T as h}from"./index-oKEOTQTD.js";import"./index-Cok5DX02.js";import{c as s}from"./index-Bv1jJhtj.js";import{A as v}from"./authors-Bh-Wpt1v.js";import{B as N}from"./constants-BP086JmV.js";import"./index-okHkxgFN.js";import"./index-9_93ZtqA.js";import"./index-BbmHap-z.js";import"./index-Dt9fs78b.js";import"./index-Bb4qSo10.js";import"./createLucideIcon-D1mZwjD8.js";import"./index-DV6JdDQx.js";import"./index-MrlrqBgY.js";import"./index-R2VZBBG8.js";import"./index-DSjsB-wa.js";import"./index-BzkqPxjz.js";import"./index-Bs984v36.js";import"./index-muU7fdJh.js";import"./index-BG4Rlmt1.js";import"./index-DrC6v7q5.js";import"./x-C6zOW7R5.js";import"./index.esm-CIVLrDKb.js";import"./index-BzjuzjN8.js";import"./assertThisInitialized-ByOjVySJ.js";const O=0,a="flex ease-linear overflow-hidden duration-300 sticky inset-y-0 left-0 z-10 p-2 flex-col border-r bg-background border-border",je={id:"Molecules/Sidebar",title:"Verified/Molecules/Sidebar",component:p,tags:["autodocs"],parameters:{badges:[N.CUSTOM]}},o={parameters:{author:v["vadym.melnicenko"]},args:{},argTypes:{contentCollapsed:{control:!1},contentOpen:{control:!1},className:{control:!1},isCollapsed:{control:!1},toggleSidebar:{control:!1},trigger:{control:!1}},render:r=>{const[t,m]=u.useState(!1),d=()=>{m(g=>!g)},c=e.jsx("div",{className:s(a,"w-[262px]"),children:e.jsx(x,{size:"sm",className:"w-full",children:e.jsxs("div",{className:"flex items-center gap-2",children:["ICON",e.jsx("span",{children:"Text"})]})})}),f=e.jsx("div",{className:s(a,"w-[100px]"),children:"ICON"});return e.jsx(h,{delayDuration:O,children:e.jsx("div",{className:"flex justify-start",children:e.jsx(p,{isCollapsed:r.isCollapsed||t,toggleSidebar:d,contentOpen:c,contentCollapsed:f,trigger:e.jsx(b,{...r,paint:"brand",size:"x-sm",shape:"square",className:"absolute -right-2 top-[5px] z-20 hidden rounded sm:flex",icon:t?e.jsx(C,{}):e.jsx(S,{})})})})})}};var i,l,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(l=o.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const Ie=["Playground"];export{o as Playground,Ie as __namedExportsOrder,je as default};
