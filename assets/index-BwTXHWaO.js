import{j as s}from"./jsx-runtime-Cw0GR0a5.js";import{R as p,T as f,C as u,b as h,D as g,a as x,P as b,O as y}from"./index-BG4Rlmt1.js";import{c as a}from"./index-Bv1jJhtj.js";import{c as N}from"./index-Bb4qSo10.js";import{X as S}from"./x-C6zOW7R5.js";const F=p,k=f,v=x,j=b,o=({className:e,...t})=>s.jsx(y,{className:a("fixed inset-0 z-50 bg-dialog-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}),_=N("fixed z-50 gap-4 border-border bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),C=({side:e="right",className:t,overlayClassName:n,children:i,closeLabel:r="Close",withCloseButton:d=!0,...l})=>{const c=m=>m.preventDefault();return s.jsxs(j,{children:[s.jsx(o,{className:n}),s.jsxs(u,{className:a(_({side:e}),t),onOpenAutoFocus:c,...l,children:[i,d&&s.jsxs(v,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-text",children:[s.jsx(S,{className:"h-4 w-4"}),s.jsx("span",{className:"sr-only",children:r})]})]})]})},T=({className:e,...t})=>s.jsx("div",{className:a("flex flex-col space-y-2 text-center sm:text-left",e),...t}),w=({className:e,...t})=>s.jsx("div",{className:a("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t}),I=({className:e,...t})=>s.jsx(h,{className:a("text-lg font-semibold text-foreground",e),...t}),V=({className:e,...t})=>s.jsx(g,{className:a("text-sm text-muted-text",e),...t});o.__docgenInfo={description:"",methods:[],displayName:"SheetOverlay"};C.__docgenInfo={description:"",methods:[],displayName:"SheetContent",props:{overlayClassName:{required:!1,tsType:{name:"string"},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Close'",computed:!1}},withCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},side:{defaultValue:{value:"'right'",computed:!1},required:!1}},composes:["ComponentPropsWithoutRef","VariantProps"]};T.__docgenInfo={description:"",methods:[],displayName:"SheetHeader"};w.__docgenInfo={description:"",methods:[],displayName:"SheetFooter"};I.__docgenInfo={description:"",methods:[],displayName:"SheetTitle"};V.__docgenInfo={description:"",methods:[],displayName:"SheetDescription"};export{F as S,k as a,C as b,T as c,I as d,V as e,w as f};
