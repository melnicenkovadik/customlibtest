import{j as c}from"./jsx-runtime-DR9Q75dM.js";import{r as p}from"./index-DRjF_FHU.js";import{c as m,u as I}from"./index-CUWL0Rm-.js";import{u as A,S as L}from"./index-BxwXBefv.js";import{c as H}from"./index-CpgLm8gy.js";import{D as $,P as q}from"./index-DwWtoRQM.js";import{h as z,R as G,u as V,F as K}from"./index-DvdiMlNs.js";import{u as W}from"./index-CY6KjWoQ.js";import{c as O,A as _,C as U,a as Z,R as B}from"./index-C79cgVSs.js";import{P as b}from"./index-T3KOkZhn.js";import{P as w}from"./index-qspcADvA.js";import{c as J}from"./index-BxTXOyjN.js";var x="Popover",[E,Oe]=H(x,[O]),P=O(),[Q,d]=E(x),j=e=>{const{__scopePopover:a,children:r,open:n,defaultOpen:o,onOpenChange:t,modal:s=!1}=e,i=P(a),u=p.useRef(null),[l,g]=p.useState(!1),[h=!1,f]=I({prop:n,defaultProp:o,onChange:t});return c.jsx(B,{...i,children:c.jsx(Q,{scope:a,contentId:W(),triggerRef:u,open:h,onOpenChange:f,onOpenToggle:p.useCallback(()=>f(C=>!C),[f]),hasCustomAnchor:l,onCustomAnchorAdd:p.useCallback(()=>g(!0),[]),onCustomAnchorRemove:p.useCallback(()=>g(!1),[]),modal:s,children:r})})};j.displayName=x;var N="PopoverAnchor",X=p.forwardRef((e,a)=>{const{__scopePopover:r,...n}=e,o=d(N,r),t=P(r),{onCustomAnchorAdd:s,onCustomAnchorRemove:i}=o;return p.useEffect(()=>(s(),()=>i()),[s,i]),c.jsx(_,{...t,...n,ref:a})});X.displayName=N;var F="PopoverTrigger",y=p.forwardRef((e,a)=>{const{__scopePopover:r,...n}=e,o=d(F,r),t=P(r),s=A(a,o.triggerRef),i=c.jsx(w.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":k(o.open),...n,ref:s,onClick:m(e.onClick,o.onOpenToggle)});return o.hasCustomAnchor?i:c.jsx(_,{asChild:!0,...t,children:i})});y.displayName=F;var R="PopoverPortal",[Y,ee]=E(R,{forceMount:void 0}),S=e=>{const{__scopePopover:a,forceMount:r,children:n,container:o}=e,t=d(R,a);return c.jsx(Y,{scope:a,forceMount:r,children:c.jsx(b,{present:r||t.open,children:c.jsx(q,{asChild:!0,container:o,children:n})})})};S.displayName=R;var v="PopoverContent",M=p.forwardRef((e,a)=>{const r=ee(v,e.__scopePopover),{forceMount:n=r.forceMount,...o}=e,t=d(v,e.__scopePopover);return c.jsx(b,{present:n||t.open,children:t.modal?c.jsx(oe,{...o,ref:a}):c.jsx(te,{...o,ref:a})})});M.displayName=v;var oe=p.forwardRef((e,a)=>{const r=d(v,e.__scopePopover),n=p.useRef(null),o=A(a,n),t=p.useRef(!1);return p.useEffect(()=>{const s=n.current;if(s)return z(s)},[]),c.jsx(G,{as:L,allowPinchZoom:!0,children:c.jsx(T,{...e,ref:o,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:m(e.onCloseAutoFocus,s=>{var i;s.preventDefault(),t.current||(i=r.triggerRef.current)==null||i.focus()}),onPointerDownOutside:m(e.onPointerDownOutside,s=>{const i=s.detail.originalEvent,u=i.button===0&&i.ctrlKey===!0,l=i.button===2||u;t.current=l},{checkForDefaultPrevented:!1}),onFocusOutside:m(e.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1})})})}),te=p.forwardRef((e,a)=>{const r=d(v,e.__scopePopover),n=p.useRef(!1),o=p.useRef(!1);return c.jsx(T,{...e,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var s,i;(s=e.onCloseAutoFocus)==null||s.call(e,t),t.defaultPrevented||(n.current||(i=r.triggerRef.current)==null||i.focus(),t.preventDefault()),n.current=!1,o.current=!1},onInteractOutside:t=>{var u,l;(u=e.onInteractOutside)==null||u.call(e,t),t.defaultPrevented||(n.current=!0,t.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const s=t.target;((l=r.triggerRef.current)==null?void 0:l.contains(s))&&t.preventDefault(),t.detail.originalEvent.type==="focusin"&&o.current&&t.preventDefault()}})}),T=p.forwardRef((e,a)=>{const{__scopePopover:r,trapFocus:n,onOpenAutoFocus:o,onCloseAutoFocus:t,disableOutsidePointerEvents:s,onEscapeKeyDown:i,onPointerDownOutside:u,onFocusOutside:l,onInteractOutside:g,...h}=e,f=d(v,r),C=P(r);return V(),c.jsx(K,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:o,onUnmountAutoFocus:t,children:c.jsx($,{asChild:!0,disableOutsidePointerEvents:s,onInteractOutside:g,onEscapeKeyDown:i,onPointerDownOutside:u,onFocusOutside:l,onDismiss:()=>f.onOpenChange(!1),children:c.jsx(U,{"data-state":k(f.open),role:"dialog",id:f.contentId,...C,...h,ref:a,style:{...h.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),D="PopoverClose",re=p.forwardRef((e,a)=>{const{__scopePopover:r,...n}=e,o=d(D,r);return c.jsx(w.button,{type:"button",...n,ref:a,onClick:m(e.onClick,()=>o.onOpenChange(!1))})});re.displayName=D;var ne="PopoverArrow",ae=p.forwardRef((e,a)=>{const{__scopePopover:r,...n}=e,o=P(r);return c.jsx(Z,{...o,...n,ref:a})});ae.displayName=ne;function k(e){return e?"open":"closed"}var se=j,ce=y,ie=S,pe=M;const _e=se,be=ce,ue=p.forwardRef(({className:e,align:a="center",sideOffset:r=4,container:n,...o},t)=>c.jsx(ie,{...n&&{container:n},children:c.jsx(pe,{ref:t,align:a,sideOffset:r,className:J("z-50 w-72 rounded-md border border-border bg-background p-4 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...o})}));ue.__docgenInfo={description:"",methods:[],displayName:"PopoverContent",props:{container:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:""},align:{defaultValue:{value:"'center'",computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}},composes:["ComponentPropsWithoutRef"]};export{_e as P,be as a,ue as b,re as c};