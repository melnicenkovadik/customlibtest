import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{B as z}from"./index-B1B20eKX.js";import"./index--95H8BaD.js";import{P as T}from"./index-C5JMlUBv.js";import{T as V}from"./index-CsppbEUr.js";import{r as u}from"./index-CTjT7uj6.js";import{c as F}from"./index-Bv1jJhtj.js";import{c as O}from"./index-Bb4qSo10.js";import{c as k}from"./createLucideIcon-D1mZwjD8.js";import{A as S}from"./authors-Bh-Wpt1v.js";import{M as q}from"./message-square-s8P7-OHm.js";import"./index-muU7fdJh.js";import"./index-9_93ZtqA.js";import"./index-BbmHap-z.js";import"./index-Dt9fs78b.js";/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=k("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),C=O("relative flex gap-1 [&>input:nth-of-type(1)]:z-[5] [&>input:nth-of-type(1)]:w-[20%] [&>input:nth-of-type(2)]:z-[4] [&>input:nth-of-type(2)]:w-[40%] [&>input:nth-of-type(3)]:z-[3] [&>input:nth-of-type(3)]:w-[60%] [&>input:nth-of-type(4)]:z-[2] [&>input:nth-of-type(4)]:w-[80%] [&>input:nth-of-type(5)]:z-[1] [&>input:nth-of-type(5)]:w-full",{variants:{state:{controlled:"[&:hover>svg]:fill-black [&>input:hover+svg+input~svg]:fill-none [&>input:hover+svg+svg+input~svg]:fill-none [&>input:hover+svg]:fill-black","read-only":"cursor-default [&>input]:cursor-default",disabled:"cursor-default opacity-50 [&>input]:cursor-default"}},defaultVariants:{state:"read-only"}}),M=({label:a,fill:t,onChange:n,value:i,size:r=16})=>e.jsxs(e.Fragment,{children:[e.jsx("input",{className:"absolute left-0 m-0 h-full cursor-pointer appearance-none",type:"radio",name:"rating","aria-label":a,onChange:n,value:i}),e.jsx(b,{fill:t,size:r})]}),m=({className:a,score:t=0,state:n="read-only",onChange:i,size:r=16})=>{const[d,f]=u.useState(0),j=s=>{f(Number(s.target.value)),i==null||i(Number(s.target.value))},N=["*","*","*","*","*"];u.useEffect(()=>{Math.floor(t)!==d&&f(Math.floor(t))},[t,d]);function A(s){return s>=70?60:s>=50?50:40}const R=A(Number((t%1).toFixed(2).split(".")[1])),D=({size:s,index:p})=>e.jsx(b,{size:s,className:"absolute",fill:"var(--foreground)",style:{clipPath:`inset(0 calc(100% - ${R}%) 0 0)`,left:`${(s+4)*p}px`}});return e.jsx("div",{className:"mx-auto inline-flex",children:e.jsx("fieldset",{className:F(C({state:n}),"flex justify-center",a),children:N.map((s,p)=>{const o=p+1;return e.jsxs(u.Fragment,{children:[o===Math.ceil(t)&&n==="read-only"&&e.jsx(D,{size:r,index:o}),e.jsx(M,{size:r,label:`${o} star`,fill:o<=d?"var(--foreground)":"none",onChange:n==="controlled"?j:()=>{},value:o})]},o)})})})};m.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},score:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'controlled' | 'read-only' | 'disabled'",elements:[{name:"literal",value:"'controlled'"},{name:"literal",value:"'read-only'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'read-only'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16",computed:!1}}}};const X={id:"Molecules/Rating",title:"Verified/Molecules/Rating",component:m,tags:["autodocs"]},l={parameters:{author:S["vadym.melnicenko"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{score:3.5,state:"read-only"},render:a=>e.jsx(m,{...a})},c={parameters:{author:S["vadym.melnicenko"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{score:4.1,state:"read-only"},render:a=>{const{score:t}=a,n=t.toString().replace(".",","),i=[{title:"5 stars",score:75},{title:"4 stars",score:50},{title:"3 stars",score:25},{title:"2 stars",score:0},{title:"1 stars",score:0}];return e.jsxs("div",{className:"flex min-w-[320px] flex-col justify-center",children:[e.jsxs("div",{className:"relative mx-auto mb-[14px] inline-flex items-center justify-center",children:[e.jsx("span",{className:"absolute -left-[26px] text-xs text-secondary-text",children:"Avg."}),e.jsx(V,{tag:"h2",size:"heading2",className:"font-bold leading-[25px]",children:n})]}),e.jsx(m,{...a}),e.jsx("div",{className:"mb-6 mt-2 text-center text-xs text-secondary-text",children:"(2905 reviews)"}),e.jsx("div",{children:i.map(r=>e.jsxs("div",{className:"mb-[14px] flex items-center",children:[e.jsx("span",{className:"mr-2 text-nowrap text-xs text-secondary-text",children:r.title}),e.jsx(T,{value:r.score})]},r.title))}),e.jsxs(z,{variant:"secondary",className:"mt-6 flex w-full items-center",children:[e.jsx(q,{className:"mr-2 h-[14px] w-[14px]"})," Rate and Review"]})]})}};var g,x,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    score: 3.5,
    state: 'read-only'
  },
  render: (args: RatingComponentProps) => {
    return <Rating {...args} />;
  }
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var h,v,w;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    score: 4.1,
    state: 'read-only'
  },
  render: (args: RatingComponentProps) => {
    const {
      score
    } = args;
    const formattedScore = score.toString().replace('.', ',');
    const progressArr = [{
      title: '5 stars',
      score: 75
    }, {
      title: '4 stars',
      score: 50
    }, {
      title: '3 stars',
      score: 25
    }, {
      title: '2 stars',
      score: 0
    }, {
      title: '1 stars',
      score: 0
    }];
    return <div className="flex min-w-[320px] flex-col justify-center">
        <div className="relative mx-auto mb-[14px] inline-flex items-center justify-center">
          <span className="absolute -left-[26px] text-xs text-secondary-text">
            Avg.
          </span>
          <Typography tag="h2" size="heading2" className="font-bold leading-[25px]">
            {formattedScore}
          </Typography>
        </div>
        <Rating {...args} />
        <div className="mb-6 mt-2 text-center text-xs text-secondary-text">
          (2905 reviews)
        </div>
        <div>
          {progressArr.map(item => {
          return <div className="mb-[14px] flex items-center" key={item.title}>
                <span className="mr-2 text-nowrap text-xs text-secondary-text">
                  {item.title}
                </span>
                <Progress value={item.score} />
              </div>;
        })}
        </div>
        <Button variant="secondary" className="mt-6 flex w-full items-center">
          <MessageSquare className="mr-2 h-[14px] w-[14px]" /> Rate and Review
        </Button>
      </div>;
  }
}`,...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const Y=["Playground","RatingSection"];export{l as Playground,c as RatingSection,Y as __namedExportsOrder,X as default};
