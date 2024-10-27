import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import"./index-DxSNWJQd.js";import"./index-Cs-iujrC.js";import"./index-BgM8URKI.js";import{B as f}from"./index-B1B20eKX.js";import"./index-DE87Md4O.js";import"./index-DB2XjKS5.js";import"./index-CEqwzp0m.js";import"./index-DU8tCDXn.js";import"./index--95H8BaD.js";import"./index-SEMmvURa.js";import{P as y}from"./index-C5JMlUBv.js";import"./index-C4UwRugS.js";import"./index-BoDFZG65.js";import"./index-DYuW4c3X.js";import{T as h}from"./index-CsppbEUr.js";import"./index-DyH9WKE_.js";import"./index-yVQ8GpKL.js";import"./index-C2ljhKko.js";import"./index-X6uhtR2q.js";import{R as i}from"./index-Cfl4cHLg.js";import"./index-ayAK--7p.js";import"./index-C7KBGP9v.js";import"./index-CJcEsfGj.js";import"./index-B2D0X5e1.js";import"./index-BwTXHWaO.js";import"./index-BtiWD3zN.js";import"./index-DvwD3xN1.js";import"./index-2PRu-WXt.js";import"./index-HlHzvzCz.js";import"./index-oKEOTQTD.js";import"./index-Cok5DX02.js";import{A as d}from"./authors-Bh-Wpt1v.js";import{M as w}from"./message-square-s8P7-OHm.js";import"./index-CTjT7uj6.js";import"./index-okHkxgFN.js";import"./index-9_93ZtqA.js";import"./index-BbmHap-z.js";import"./index-Dt9fs78b.js";import"./index-Bv1jJhtj.js";import"./index-Bb4qSo10.js";import"./createLucideIcon-D1mZwjD8.js";import"./index-DV6JdDQx.js";import"./index-MrlrqBgY.js";import"./index-R2VZBBG8.js";import"./index-DSjsB-wa.js";import"./index-BzkqPxjz.js";import"./index-Bs984v36.js";import"./index-muU7fdJh.js";import"./index-BG4Rlmt1.js";import"./index-DrC6v7q5.js";import"./x-C6zOW7R5.js";import"./index.esm-CIVLrDKb.js";import"./index-BzjuzjN8.js";import"./assertThisInitialized-ByOjVySJ.js";const ve={id:"Molecules/Rating",title:"Verified/Molecules/Rating",component:i,tags:["autodocs"]},r={parameters:{author:d["vadym.melnicenko"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{score:3.5,state:"read-only"},render:t=>e.jsx(i,{...t})},s={parameters:{author:d["vadym.melnicenko"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{score:4.1,state:"read-only"},render:t=>{const{score:x}=t,g=x.toString().replace(".",","),u=[{title:"5 stars",score:75},{title:"4 stars",score:50},{title:"3 stars",score:25},{title:"2 stars",score:0},{title:"1 stars",score:0}];return e.jsxs("div",{className:"flex min-w-[320px] flex-col justify-center",children:[e.jsxs("div",{className:"relative mx-auto mb-[14px] inline-flex items-center justify-center",children:[e.jsx("span",{className:"absolute -left-[26px] text-xs text-secondary-text",children:"Avg."}),e.jsx(h,{tag:"h2",size:"heading2",className:"font-bold leading-[25px]",children:g})]}),e.jsx(i,{...t}),e.jsx("div",{className:"mb-6 mt-2 text-center text-xs text-secondary-text",children:"(2905 reviews)"}),e.jsx("div",{children:u.map(o=>e.jsxs("div",{className:"mb-[14px] flex items-center",children:[e.jsx("span",{className:"mr-2 text-nowrap text-xs text-secondary-text",children:o.title}),e.jsx(y,{value:o.score})]},o.title))}),e.jsxs(f,{variant:"secondary",className:"mt-6 flex w-full items-center",children:[e.jsx(w,{className:"mr-2 h-[14px] w-[14px]"})," Rate and Review"]})]})}};var a,m,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=r.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,p,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const Ae=["Playground","RatingSection"];export{r as Playground,s as RatingSection,Ae as __namedExportsOrder,ve as default};
