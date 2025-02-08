import{j as m}from"./jsx-runtime-DR9Q75dM.js";import{r as l}from"./index-DRjF_FHU.js";import{B as A}from"./index-DlETWc0l.js";import{A as oe}from"./index-Cj_plbSS.js";import{T as q}from"./index-CZSCZb7H.js";import{c as $}from"./index-BxTXOyjN.js";import{X as ie}from"./x-0R6qbvLI.js";import{A as z}from"./authors-Bh-Wpt1v.js";import"./index-Bb4qSo10.js";import"./index-CpgLm8gy.js";import"./index-qspcADvA.js";import"./index-rX-Bn4lm.js";import"./index-BxwXBefv.js";import"./createLucideIcon-UCnLdqZo.js";let ne={data:""},ce=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||ne,de=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,le=/\/\*[^]*?\*\/|  +/g,B=/\n+/g,b=(e,t)=>{let s="",i="",o="";for(let a in e){let n=e[a];a[0]=="@"?a[1]=="i"?s=a+" "+n+";":i+=a[1]=="f"?b(n,a):a+"{"+b(n,a[1]=="k"?"":t)+"}":typeof n=="object"?i+=b(n,t?t.replace(/([^,])+/g,r=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,r):r?r+" "+c:c)):a):n!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=b.p?b.p(a,n):a+":"+n+";")}return s+(t&&o?t+"{"+o+"}":o)+i},f={},se=e=>{if(typeof e=="object"){let t="";for(let s in e)t+=s+se(e[s]);return t}return e},me=(e,t,s,i,o)=>{let a=se(e),n=f[a]||(f[a]=(c=>{let d=0,p=11;for(;d<c.length;)p=101*p+c.charCodeAt(d++)>>>0;return"go"+p})(a));if(!f[n]){let c=a!==e?e:(d=>{let p,v,h=[{}];for(;p=de.exec(d.replace(le,""));)p[4]?h.shift():p[3]?(v=p[3].replace(B," ").trim(),h.unshift(h[0][v]=h[0][v]||{})):h[0][p[1]]=p[2].replace(B," ").trim();return h[0]})(e);f[n]=b(o?{["@keyframes "+n]:c}:c,s?"":"."+n)}let r=s&&f.g?f.g:null;return s&&(f.g=f[n]),((c,d,p,v)=>{v?d.data=d.data.replace(v,c):d.data.indexOf(c)===-1&&(d.data=p?c+d.data:d.data+c)})(f[n],t,i,r),n},pe=(e,t,s)=>e.reduce((i,o,a)=>{let n=t[a];if(n&&n.call){let r=n(s),c=r&&r.props&&r.props.className||/^go/.test(r)&&r;n=c?"."+c:r&&typeof r=="object"?r.props?"":b(r,""):r===!1?"":r}return i+o+(n??"")},"");function E(e){let t=this||{},s=e.call?e(t.p):e;return me(s.unshift?s.raw?pe(s,[].slice.call(arguments,1),t.p):s.reduce((i,o)=>Object.assign(i,o&&o.call?o(t.p):o),{}):s,ce(t.target),t.g,t.o,t.k)}let ae,F,W;E.bind({g:1});let y=E.bind({k:1});function ue(e,t,s,i){b.p=t,ae=e,F=s,W=i}function w(e,t){let s=this||{};return function(){let i=arguments;function o(a,n){let r=Object.assign({},a),c=r.className||o.className;s.p=Object.assign({theme:F&&F()},r),s.o=/ *go\d+/.test(c),r.className=E.apply(s,i)+(c?" "+c:"");let d=e;return e[0]&&(d=r.as||e,delete r.as),W&&d[0]&&W(r),ae(d,r)}return o}}var ge=e=>typeof e=="function",Z=(e,t)=>ge(e)?e(t):e,he=(()=>{let e=0;return()=>(++e).toString()})(),fe=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ye=20,O=new Map,ve=1e3,U=e=>{if(O.has(e))return;let t=setTimeout(()=>{O.delete(e),S({type:4,toastId:e})},ve);O.set(e,t)},be=e=>{let t=O.get(e);t&&clearTimeout(t)},J=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,ye)};case 1:return t.toast.id&&be(t.toast.id),{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:s}=t;return e.toasts.find(a=>a.id===s.id)?J(e,{type:1,toast:s}):J(e,{type:0,toast:s});case 3:let{toastId:i}=t;return i?U(i):e.toasts.forEach(a=>{U(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===i||i===void 0?{...a,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+o}))}}},k=[],_={toasts:[],pausedAt:void 0},S=e=>{_=J(_,e),k.forEach(t=>{t(_)})},we={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},xe=(e={})=>{let[t,s]=l.useState(_);l.useEffect(()=>(k.push(s),()=>{let o=k.indexOf(s);o>-1&&k.splice(o,1)}),[t]);let i=t.toasts.map(o=>{var a,n;return{...e,...e[o.type],...o,duration:o.duration||((a=e[o.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||we[o.type],style:{...e.style,...(n=e[o.type])==null?void 0:n.style,...o.style}}});return{...t,toasts:i}},Se=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(s==null?void 0:s.id)||he()}),C=e=>(t,s)=>{let i=Se(t,e,s);return S({type:2,toast:i}),i.id},u=(e,t)=>C("blank")(e,t);u.error=C("error");u.success=C("success");u.loading=C("loading");u.custom=C("custom");u.dismiss=e=>{S({type:3,toastId:e})};u.remove=e=>S({type:4,toastId:e});u.promise=(e,t,s)=>{let i=u.loading(t.loading,{...s,...s==null?void 0:s.loading});return e.then(o=>(u.success(Z(t.success,o),{id:i,...s,...s==null?void 0:s.success}),o)).catch(o=>{u.error(Z(t.error,o),{id:i,...s,...s==null?void 0:s.error})}),e};var Ae=(e,t)=>{S({type:1,toast:{id:e,height:t}})},Ce=()=>{S({type:5,time:Date.now()})},De=e=>{let{toasts:t,pausedAt:s}=xe(e);l.useEffect(()=>{if(s)return;let a=Date.now(),n=t.map(r=>{if(r.duration===1/0)return;let c=(r.duration||0)+r.pauseDuration-(a-r.createdAt);if(c<0){r.visible&&u.dismiss(r.id);return}return setTimeout(()=>u.dismiss(r.id),c)});return()=>{n.forEach(r=>r&&clearTimeout(r))}},[t,s]);let i=l.useCallback(()=>{s&&S({type:6,time:Date.now()})},[s]),o=l.useCallback((a,n)=>{let{reverseOrder:r=!1,gutter:c=8,defaultPosition:d}=n||{},p=t.filter(g=>(g.position||d)===(a.position||d)&&g.height),v=p.findIndex(g=>g.id===a.id),h=p.filter((g,V)=>V<v&&g.visible).length;return p.filter(g=>g.visible).slice(...r?[h+1]:[0,h]).reduce((g,V)=>g+(V.height||0)+c,0)},[t]);return{toasts:t,handlers:{updateHeight:Ae,startPause:Ce,endPause:i,calculateOffset:o}}},Te=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Ne=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,je=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Oe=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Te} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ne} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${je} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ke=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,_e=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ke} 1s linear infinite;
`,ze=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ee=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Ve=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ze} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ee} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,$e=w("div")`
  position: absolute;
`,Fe=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,We=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ze=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${We} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Je=({toast:e})=>{let{icon:t,type:s,iconTheme:i}=e;return t!==void 0?typeof t=="string"?l.createElement(Ze,null,t):t:s==="blank"?null:l.createElement(Fe,null,l.createElement(_e,{...i}),s!=="loading"&&l.createElement($e,null,s==="error"?l.createElement(Oe,{...i}):l.createElement(Ve,{...i})))},Pe=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,qe=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Be="0%{opacity:0;} 100%{opacity:1;}",Ue="0%{opacity:1;} 100%{opacity:0;}",He=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ie=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Re=(e,t)=>{let s=e.includes("top")?1:-1,[i,o]=fe()?[Be,Ue]:[Pe(s),qe(s)];return{animation:t?`${y(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};l.memo(({toast:e,position:t,style:s,children:i})=>{let o=e.height?Re(e.position||t||"top-center",e.visible):{opacity:0},a=l.createElement(Je,{toast:e}),n=l.createElement(Ie,{...e.ariaProps},Z(e.message,e));return l.createElement(He,{className:e.className,style:{...o,...s,...e.style}},typeof i=="function"?i({icon:a,message:n}):l.createElement(l.Fragment,null,a,n))});ue(l.createElement);E`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var P=u;const x=({id:e,className:t,header:s,headerClassName:i,description:o,descriptionClassName:a,avatarSrc:n,suffix:r,onClose:c})=>m.jsxs("div",{className:$("relative flex flex-row items-center justify-center gap-4 rounded-md border bg-background p-6 shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.10),_0px_4px_6px_-4px_rgba(0,_0,_0,_0.10)]",t),children:[n&&m.jsx(oe,{src:n}),m.jsxs("div",{className:"flex max-w-[255px] flex-col gap-1",children:[m.jsx(q,{size:"body2",className:$("font-semibold",i),children:s}),m.jsx(q,{size:"body2",className:$("font-normal",a),children:o})]}),r,m.jsx(ie,{className:"absolute right-2 top-2 h-4 w-4 cursor-pointer",onClick:()=>{P.remove(e),c==null||c()}})]}),re=({maxVisible:e=3})=>{const{toasts:t,handlers:s}=De(),{startPause:i,endPause:o}=s,[a,n]=l.useState(!1),[r,c]=l.useState([]);return l.useEffect(()=>{c(t.filter(d=>d.visible))},[t]),l.useEffect(()=>{!r.length&&a&&n(!1)},[r]),m.jsxs("div",{onMouseEnter:i,onMouseLeave:o,className:"fixed bottom-2 right-2 flex flex-col gap-2",children:[r.slice(r.length-(a?t.length:e)).map(d=>{const p=d.message;return p({id:d.id})}),r.length>e&&m.jsx(A,{variant:"link",onClick:()=>n(!0),children:"View All"})]})};x.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{id:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},header:{required:!0,tsType:{name:"string"},description:""},headerClassName:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},descriptionClassName:{required:!1,tsType:{name:"string"},description:""},avatarSrc:{required:!1,tsType:{name:"string"},description:""},suffix:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};re.__docgenInfo={description:"",methods:[],displayName:"Notifications",props:{maxVisible:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}}}};const nt={id:"Molecules/Toast",title:"Verified/Molecules/Toast",tags:["autodocs"]},D={parameters:{author:z["vadym.melnicenko"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],embedOrientation:"vertical",designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{variant:"destructive",removePrevious:!1,durationSec:1,maxVisible:1},argTypes:{variant:{options:["base","destructive","with-avatar"],control:{type:"select"}}},render:({variant:e,removePrevious:t,durationSec:s,maxVisible:i})=>{const[o,a]=l.useState(""),n={base:c=>m.jsx(x,{id:c,header:"Scheduled: Catch up",description:new Date().toString(),suffix:m.jsx(A,{variant:"outline",onClick:()=>console.log("on-undo"),children:"Undo"})}),destructive:c=>m.jsx(x,{id:c,className:"border-0 bg-destructive text-secondary",header:"Uh oh! Something went wrong.",headerClassName:"text-secondary",description:"There was a problem with your request.",descriptionClassName:"text-secondary",suffix:m.jsx(A,{variant:"outline",className:"bg-destructive text-secondary hover:bg-destructive-hover active:bg-destructive-active",onClick:()=>console.log("on-try-again"),children:"Try Again"})}),"with-avatar":c=>m.jsx(x,{id:c,className:"w-[375px]",avatarSrc:"./assets/avatar.jpg",header:"Hey! Have you seen the new pool?!",description:"shyfrens.Custom",descriptionClassName:"text-secondary-text"})},r=()=>{t&&P.remove(o),a(P.custom(({id:c})=>n[e](c),{duration:s*1e3}))};return m.jsxs(m.Fragment,{children:[m.jsx(A,{onClick:r,children:`Create a ${e} toast`}),m.jsx(re,{maxVisible:i})]})}},T={parameters:{author:z["vadym.melnicenko"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],embedOrientation:"vertical",designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{id:"1",className:"bg-destructive text-secondary",header:"Uh oh! Something went wrong.",headerClassName:"text-secondary",description:"There was a problem with your request.",descriptionClassName:"text-secondary",suffix:m.jsx(A,{variant:"outline",className:"bg-destructive text-secondary hover:bg-destructive-hover active:bg-destructive-active",onClick:()=>console.log("on-try-again"),children:"Try Again"}),onClose:console.log("on-close")},render:e=>m.jsx(x,{...e})},N={parameters:{author:z["vadym.melnicenko"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],embedOrientation:"vertical",designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{id:"1",header:"Scheduled: Catch up",description:new Date().toString(),suffix:m.jsx(A,{variant:"outline",onClick:()=>console.log("on-undo"),children:"Undo"}),onClose:console.log("on-close")},render:e=>m.jsx(x,{...e})},j={parameters:{author:z["vadym.melnicenko"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],embedOrientation:"vertical",designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{id:"1",className:"w-[375px]",avatarSrc:"./assets/avatar.jpg",header:"Lorem ipsum dolor sit amet",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",descriptionClassName:"text-secondary-text",onClose:console.log("on-close")},render:e=>m.jsx(x,{...e})};var H,I,R;D.parameters={...D.parameters,docs:{...(H=D.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    embedOrientation: 'vertical',
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    variant: 'destructive',
    removePrevious: false,
    durationSec: 1,
    maxVisible: 1
  },
  argTypes: {
    variant: {
      options: ['base', 'destructive', 'with-avatar'],
      control: {
        type: 'select'
      }
    }
  },
  render: ({
    variant,
    removePrevious,
    durationSec,
    maxVisible
  }) => {
    const [prev, setPrev] = useState<string>('');
    const options = {
      base: (id: string) => <Toast id={id} header="Scheduled: Catch up" description={new Date().toString()} suffix={<Button variant="outline" onClick={() => console.log('on-undo')}>
              Undo
            </Button>} />,
      destructive: (id: string) => <Toast id={id} className="border-0 bg-destructive text-secondary" header="Uh oh! Something went wrong." headerClassName="text-secondary" description="There was a problem with your request." descriptionClassName="text-secondary" suffix={<Button variant="outline" className="bg-destructive text-secondary hover:bg-destructive-hover active:bg-destructive-active" onClick={() => console.log('on-try-again')}>
              Try Again
            </Button>} />,
      'with-avatar': (id: string) => <Toast id={id} className="w-[375px]" avatarSrc="./assets/avatar.jpg" header="Hey! Have you seen the new pool?!" description="shyfrens.Custom" descriptionClassName="text-secondary-text" />
    } as any;
    const notify = () => {
      if (removePrevious) {
        toast.remove(prev);
      }
      setPrev(toast.custom(({
        id
      }) => options[variant](id), {
        duration: durationSec * 1000
      }));
    };
    return <>
        <Button onClick={notify}>{\`Create a \${variant} toast\`}</Button>
        <Notifications maxVisible={maxVisible} />
      </>;
  }
}`,...(R=(I=D.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var M,L,X;T.parameters={...T.parameters,docs:{...(M=T.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    embedOrientation: 'vertical',
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    id: '1',
    className: 'bg-destructive text-secondary',
    header: 'Uh oh! Something went wrong.',
    headerClassName: 'text-secondary',
    description: 'There was a problem with your request.',
    descriptionClassName: 'text-secondary',
    suffix: <Button variant="outline" className="bg-destructive text-secondary hover:bg-destructive-hover active:bg-destructive-active" onClick={() => console.log('on-try-again')}>
        Try Again
      </Button>,
    onClose: console.log('on-close')
  },
  render: (args: any) => <Toast {...args} />
}`,...(X=(L=T.parameters)==null?void 0:L.docs)==null?void 0:X.source}}};var G,Q,Y;N.parameters={...N.parameters,docs:{...(G=N.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    embedOrientation: 'vertical',
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    id: '1',
    header: 'Scheduled: Catch up',
    description: new Date().toString(),
    suffix: <Button variant="outline" onClick={() => console.log('on-undo')}>
        Undo
      </Button>,
    onClose: console.log('on-close')
  },
  render: (args: any) => <Toast {...args} />
}`,...(Y=(Q=N.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var K,ee,te;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    embedOrientation: 'vertical',
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    id: '1',
    className: 'w-[375px]',
    avatarSrc: './assets/avatar.jpg',
    header: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    descriptionClassName: 'text-secondary-text',
    onClose: console.log('on-close')
  },
  render: (args: any) => <Toast {...args} />
}`,...(te=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const ct=["Playground","Destructive","Base","WithAvatar"];export{N as Base,T as Destructive,D as Playground,j as WithAvatar,ct as __namedExportsOrder,nt as default};
