import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{r as c}from"./index-CTjT7uj6.js";import{P as s}from"./index-Cfl4cHLg.js";import{A as d}from"./authors-Bh-Wpt1v.js";import{B as u}from"./constants-BP086JmV.js";import"./index-DxSNWJQd.js";import"./index-okHkxgFN.js";import"./index-9_93ZtqA.js";import"./index-BbmHap-z.js";import"./index-Dt9fs78b.js";import"./index-Bv1jJhtj.js";import"./index-Bb4qSo10.js";import"./index-Cs-iujrC.js";import"./index-BgM8URKI.js";import"./createLucideIcon-D1mZwjD8.js";import"./index-B1B20eKX.js";import"./index-DE87Md4O.js";import"./index-DV6JdDQx.js";import"./index-MrlrqBgY.js";import"./index-R2VZBBG8.js";import"./index-DSjsB-wa.js";import"./index-DB2XjKS5.js";import"./index-BzkqPxjz.js";import"./index-Bs984v36.js";import"./index-CEqwzp0m.js";import"./index-DU8tCDXn.js";import"./index-CsppbEUr.js";import"./index--95H8BaD.js";import"./index-muU7fdJh.js";import"./index-SEMmvURa.js";import"./index-C5JMlUBv.js";import"./index-C4UwRugS.js";import"./index-BoDFZG65.js";import"./index-DYuW4c3X.js";import"./index-DyH9WKE_.js";import"./index-yVQ8GpKL.js";import"./index-C2ljhKko.js";import"./index-ayAK--7p.js";import"./index-BG4Rlmt1.js";import"./index-DrC6v7q5.js";import"./index-X6uhtR2q.js";import"./x-C6zOW7R5.js";import"./index-oKEOTQTD.js";import"./index.esm-CIVLrDKb.js";import"./index-C7KBGP9v.js";import"./index-BzjuzjN8.js";import"./index-CJcEsfGj.js";import"./index-B2D0X5e1.js";import"./assertThisInitialized-ByOjVySJ.js";import"./index-BwTXHWaO.js";import"./index-BtiWD3zN.js";import"./index-DvwD3xN1.js";import"./index-2PRu-WXt.js";import"./index-HlHzvzCz.js";import"./index-Cok5DX02.js";const Pt={id:"Molecule/Pagination",title:"Verified/Atoms/Pagination",component:s,tags:["autodocs"],parameters:{badges:[u.CUSTOM]}},r={parameters:{author:d["vadym.melnicenko"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"],designs:["https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},args:{total:20},render:o=>{const[p,e]=c.useState(1),l=()=>{e(t=>t===1?t:t-1)},g=()=>{e(t=>t===o.total?t:t+1)};return a.jsx("div",{className:"flex items-center space-x-2",children:a.jsx(s,{handleMin:()=>e(1),handleMax:()=>e(o.total),handlePrev:l,handleNext:g,total:o.total,handleInputChange:t=>console.log("handleInputChange",t),setCurrentPage:t=>e(t),currentPage:p})})}};var m,i,n;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'],
    designs: ['https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  args: {
    total: 20
  },
  render: args => {
    const [currentPage, setCurrentPage] = useState(1);
    const handlePrev = () => {
      setCurrentPage(currentPage => currentPage === 1 ? currentPage : currentPage - 1);
    };
    const handleNext = () => {
      setCurrentPage(currentPage => currentPage === args.total ? currentPage : currentPage + 1);
    };
    return <div className="flex items-center space-x-2">
        <Pagination handleMin={() => setCurrentPage(1)} handleMax={() => setCurrentPage(args.total)} handlePrev={handlePrev} handleNext={handleNext} total={args.total} handleInputChange={value => console.log('handleInputChange', value)} setCurrentPage={value => setCurrentPage(value)} currentPage={currentPage} />
      </div>;
  }
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const ft=["Playground"];export{r as Playground,ft as __namedExportsOrder,Pt as default};
