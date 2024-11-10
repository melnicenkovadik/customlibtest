import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{B as x}from"./index-DlETWc0l.js";import{r as n}from"./index-DRjF_FHU.js";import{c as b}from"./index-BxTXOyjN.js";import{c as R}from"./index-Bb4qSo10.js";import{u as le,c as _}from"./index-CUWL0Rm-.js";import{c as oe}from"./index-CpgLm8gy.js";import{c as W,R as de,I as ce}from"./index-BmEyfFVT.js";import{P as me}from"./index-T3KOkZhn.js";import{P as S}from"./index-qspcADvA.js";import{u as ue}from"./index-GbUxfoun.js";import{u as pe}from"./index-CY6KjWoQ.js";import{T as v}from"./index-Cv3TqRal.js";import{A as P}from"./authors-Bh-Wpt1v.js";import"./index-BxwXBefv.js";import"./index-rX-Bn4lm.js";const ge=R("bg-background",{variants:{size:{default:"p-6",md:"p-4",sm:"p-3"}},defaultVariants:{size:"default"}}),he=n.forwardRef(({className:a,isHovered:s=!1,...t},r)=>e.jsx("div",{ref:r,className:b("rounded-lg bg-border text-foreground shadow-sm transition delay-150 ease-in-out",s&&"cursor-pointer p-[1px] hover:bg-hover-stroke",a),...t})),xe=n.forwardRef(({className:a,size:s,isBackground:t,...r},i)=>e.jsx("div",{ref:i,className:b("h-full rounded-lg",ge({size:s,className:a}),t&&"cursor-pointer hover:bg-banner-stroke"),...r})),m=n.forwardRef(({className:a,...s},t)=>e.jsx("div",{ref:t,className:b("mb-4 flex flex-row items-center justify-between",a),...s})),u=n.forwardRef(({className:a,...s},t)=>e.jsx("div",{ref:t,className:b("pt-0",a),...s})),p=n.forwardRef(({className:a,...s},t)=>e.jsx("div",{ref:t,className:b("flex items-center",a),...s}));he.__docgenInfo={description:"@deprecated use just Card (card from atoms will be removed soon)",methods:[],displayName:"CardWrapper",props:{isHovered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["HTMLAttributes"]};xe.__docgenInfo={description:"@deprecated use just Card (card from atoms will be removed soon)",methods:[],displayName:"CardInner",props:{isBackground:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes","VariantProps"]};m.__docgenInfo={description:"@deprecated use CardHeader from Card (card from atoms will be removed soon)",methods:[],displayName:"CardHeader",props:{isCol:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes"]};u.__docgenInfo={description:"@deprecated use CardContent from Card (card from atoms will be removed soon)",methods:[],displayName:"CardContent"};p.__docgenInfo={description:"@deprecated use CardFooter from Card (card from atoms will be removed soon)",methods:[],displayName:"CardFooter"};var k="Tabs",[ve,Ee]=oe(k,[W]),K=W(),[be,H]=ve(k),J=n.forwardRef((a,s)=>{const{__scopeTabs:t,value:r,onValueChange:i,defaultValue:o,orientation:l="horizontal",dir:f,activationMode:C="automatic",...N}=a,c=ue(f),[d,T]=le({prop:r,onChange:i,defaultProp:o});return e.jsx(be,{scope:t,baseId:pe(),value:d,onValueChange:T,orientation:l,dir:c,activationMode:C,children:e.jsx(S.div,{dir:c,"data-orientation":l,...N,ref:s})})});J.displayName=k;var Z="TabsList",Q=n.forwardRef((a,s)=>{const{__scopeTabs:t,loop:r=!0,...i}=a,o=H(Z,t),l=K(t);return e.jsx(de,{asChild:!0,...l,orientation:o.orientation,dir:o.dir,loop:r,children:e.jsx(S.div,{role:"tablist","aria-orientation":o.orientation,...i,ref:s})})});Q.displayName=Z;var X="TabsTrigger",Y=n.forwardRef((a,s)=>{const{__scopeTabs:t,value:r,disabled:i=!1,...o}=a,l=H(X,t),f=K(t),C=se(l.baseId,r),N=te(l.baseId,r),c=r===l.value;return e.jsx(ce,{asChild:!0,...f,focusable:!i,active:c,children:e.jsx(S.button,{type:"button",role:"tab","aria-selected":c,"aria-controls":N,"data-state":c?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:C,...o,ref:s,onMouseDown:_(a.onMouseDown,d=>{!i&&d.button===0&&d.ctrlKey===!1?l.onValueChange(r):d.preventDefault()}),onKeyDown:_(a.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&l.onValueChange(r)}),onFocus:_(a.onFocus,()=>{const d=l.activationMode!=="manual";!c&&!i&&d&&l.onValueChange(r)})})})});Y.displayName=X;var ee="TabsContent",ae=n.forwardRef((a,s)=>{const{__scopeTabs:t,value:r,forceMount:i,children:o,...l}=a,f=H(ee,t),C=se(f.baseId,r),N=te(f.baseId,r),c=r===f.value,d=n.useRef(c);return n.useEffect(()=>{const T=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(T)},[]),e.jsx(me,{present:i||c,children:({present:T})=>e.jsx(S.div,{"data-state":c?"active":"inactive","data-orientation":f.orientation,role:"tabpanel","aria-labelledby":C,hidden:!T,id:N,tabIndex:0,...l,ref:s,style:{...a.style,animationDuration:d.current?"0s":void 0},children:T&&o})})});ae.displayName=ee;function se(a,s){return`${a}-trigger-${s}`}function te(a,s){return`${a}-content-${s}`}var fe=J,Te=Q,je=Y,Ce=ae;const Ne=R("",{variants:{variant:{default:"",secondary:"",underline:"",navLabel:"",vertical:"flex justify-start"}},defaultVariants:{variant:"default"}}),re="inline-flex items-center justify-center",we=R(`${re} rounded-md bg-transparent text-muted-text`,{variants:{variant:{default:"h-[42px] border border-border p-[5px] [&>button]:grow",secondary:"p-1",underline:"p-1 [&>button]:grow",vertical:"min-w-[120px] flex-col items-stretch [&>button]:mb-[22px]",navLabel:"p-1"}},defaultVariants:{variant:"default"}}),ye=R(`${re} whitespace-nowrap py-1.5 text-sm text-secondary-text ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,{variants:{variant:{default:"rounded-sm px-3 text-secondary-text data-[state=active]:bg-ui-accent-500 data-[state=active]:text-neutral-1000 data-[state=active]:shadow-sm",secondary:"rounded-sm bg-transparent px-3 shadow-none hover:text-foreground data-[state=active]:rounded-full data-[state=active]:bg-secondary data-[state=active]:text-primary",underline:"border-b-2 border-border bg-background px-8 text-xl shadow-none data-[state=active]:border-muted-text data-[state=active]:text-secondary-text [&>div>span]:text-foreground [&>div]:text-base",vertical:"group text-xl shadow-none data-[state=active]:border-muted-text data-[state=active]:text-secondary-text [&>div>span]:text-foreground [&>div]:text-base",navLabel:"rounded-sm bg-background px-3 text-lg font-normal shadow-none hover:font-medium hover:text-muted-text data-[state=active]:rounded-full data-[state=active]:text-foreground"}},defaultVariants:{variant:"default"}}),ie=n.createContext({variant:"default"}),ne=()=>n.useContext(ie),j=n.forwardRef(({variant:a="default",className:s,children:t,...r},i)=>e.jsx(ie.Provider,{value:{variant:a},children:e.jsx(fe,{ref:i,className:b(Ne({variant:a}),s),...r,children:t})})),w=n.forwardRef(({className:a,...s},t)=>{const{variant:r}=ne();return e.jsx(Te,{ref:t,className:b(we({variant:r}),a),...s})}),Fe=({details:a,variant:s})=>e.jsxs("span",{className:"relative mt-1 text-xl text-secondary-text",children:[a,s==="vertical"&&e.jsx("div",{className:"bottom-0 left-0 right-0 mt-1 h-[2px] w-[50px] bg-border group-data-[state=active]:bg-secondary-text"})]}),g=n.forwardRef(({className:a,details:s,children:t,...r},i)=>{const{variant:o}=ne();return e.jsx(je,{ref:i,className:b(ye({variant:o}),a),...r,children:e.jsxs("div",{className:"flex flex-col",children:[t,s&&e.jsx(Fe,{details:s,variant:o})]})})}),h=n.forwardRef(({className:a,...s},t)=>e.jsx(Ce,{ref:t,className:b("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",a),...s}));j.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'secondary'
| 'underline'
| 'vertical'
| 'navLabel'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'underline'"},{name:"literal",value:"'vertical'"},{name:"literal",value:"'navLabel'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}},composes:["ComponentPropsWithoutRef"]};w.__docgenInfo={description:"",methods:[],displayName:"TabsList"};g.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger",props:{details:{required:!1,tsType:{name:"string"},description:""}}};h.__docgenInfo={description:"",methods:[],displayName:"TabsContent"};const $e={id:"Atoms/Tabs",title:"Verified/Atoms/Tabs",component:j,tags:["autodocs"]},y={parameters:{author:P["vadym.melnicenko"],embedDesigns:["https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412"]},render:()=>e.jsxs(j,{defaultValue:"account",className:"w-[600px]",variant:"default",children:[e.jsxs(w,{className:"w-full",children:[e.jsx(g,{value:"account",children:"Selected"}),e.jsx(g,{value:"password",children:"Unselected"})]}),e.jsx(h,{value:"account",children:e.jsxs(e.Fragment,{children:[e.jsx(m,{className:"mb-4",children:e.jsx(v,{tag:"h2",size:"heading2",children:"Selected"})}),e.jsx(u,{children:e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"mb-12 ml-[15px] list-disc",children:[e.jsx("li",{children:"Tokens Selected"}),e.jsx("li",{children:"Rewards"})]}),e.jsx("div",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa."})]})}),e.jsx(p,{children:e.jsx(x,{className:"ml-auto px-10",children:"Learn More"})})]})}),e.jsx(h,{value:"password",children:e.jsxs(e.Fragment,{children:[e.jsx(m,{className:"mb-4",children:e.jsx(v,{tag:"h2",size:"heading2",children:"Unselected"})}),e.jsx(u,{children:e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"mb-12 ml-[15px] list-disc",children:[e.jsx("li",{children:"Tokens Unselected"}),e.jsx("li",{children:"Rewards"})]}),e.jsx("div",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa."})]})}),e.jsx(p,{children:e.jsx(x,{className:"ml-auto px-10",children:"Learn More"})})]})})]})},F={parameters:{author:P["vadym.melnicenko"]},render:()=>e.jsxs(j,{defaultValue:"account",className:"w-[500px]",variant:"secondary",children:[e.jsxs(w,{className:"w-full",children:[e.jsx(g,{value:"account",children:"Selected"}),e.jsx(g,{value:"password",children:"Unselected"})]}),e.jsx(h,{value:"account",children:e.jsxs(e.Fragment,{children:[e.jsx(m,{className:"mb-4",children:e.jsx(v,{tag:"h2",size:"heading2",children:"Selected"})}),e.jsx(u,{children:e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"mb-12 ml-[15px] list-disc",children:[e.jsx("li",{children:"Tokens Selected"}),e.jsx("li",{children:"Rewards"})]}),e.jsx("div",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa."})]})}),e.jsx(p,{children:e.jsx(x,{className:"ml-auto px-10",children:"Learn More"})})]})}),e.jsx(h,{value:"password",children:e.jsxs(e.Fragment,{children:[e.jsx(m,{className:"mb-4",children:e.jsx(v,{tag:"h2",size:"heading2",children:"Unselected"})}),e.jsx(u,{children:e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"mb-12 ml-[15px] list-disc",children:[e.jsx("li",{children:"Tokens Unselected"}),e.jsx("li",{children:"Rewards"})]}),e.jsx("div",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa."})]})}),e.jsx(p,{children:e.jsx(x,{className:"ml-auto px-10",children:"Learn More"})})]})})]})},L={parameters:{author:P["vadym.melnicenko"]},render:()=>e.jsxs(j,{defaultValue:"post",className:"w-[600px]",variant:"underline",children:[e.jsxs(w,{className:"w-full",children:[e.jsx(g,{value:"post",details:"1,1k",children:"Post"}),e.jsx(g,{value:"followers",details:"2,567",children:"Followers"}),e.jsx(g,{value:"following",details:"3,154",children:"Following"}),e.jsx(g,{value:"nft",details:"202",children:"NFTs"})]}),e.jsx(h,{value:"post",children:e.jsxs(e.Fragment,{children:[e.jsx(m,{className:"mb-4",children:e.jsx(v,{tag:"h2",size:"heading2",children:"Post"})}),e.jsx(u,{children:e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"mb-12 ml-[15px] list-disc",children:[e.jsx("li",{children:"Post"}),e.jsx("li",{children:"Rewards"})]}),e.jsx("div",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa."})]})}),e.jsx(p,{children:e.jsx(x,{className:"ml-auto px-10",children:"Learn More"})})]})}),e.jsx(h,{value:"followers",children:e.jsxs(e.Fragment,{children:[e.jsx(m,{className:"mb-4",children:e.jsx(v,{tag:"h2",size:"heading2",children:"Followers"})}),e.jsx(u,{children:e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"mb-12 ml-[15px] list-disc",children:[e.jsx("li",{children:"Followers"}),e.jsx("li",{children:"Rewards"})]}),e.jsx("div",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa."})]})}),e.jsx(p,{children:e.jsx(x,{className:"ml-auto px-10",children:"Learn More"})})]})}),e.jsx(h,{value:"following",children:e.jsxs(e.Fragment,{children:[e.jsx(m,{className:"mb-4",children:e.jsx(v,{tag:"h2",size:"heading2",children:"Following"})}),e.jsx(u,{children:e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"mb-12 ml-[15px] list-disc",children:[e.jsx("li",{children:"Following"}),e.jsx("li",{children:"Rewards"})]}),e.jsx("div",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa."})]})}),e.jsx(p,{children:e.jsx(x,{className:"ml-auto px-10",children:"Learn More"})})]})}),e.jsx(h,{value:"nft",children:e.jsxs(e.Fragment,{children:[e.jsx(m,{className:"mb-4",children:e.jsx(v,{tag:"h2",size:"heading2",children:"NFTs"})}),e.jsx(u,{children:e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"mb-12 ml-[15px] list-disc",children:[e.jsx("li",{children:"NFTs"}),e.jsx("li",{children:"Rewards"})]}),e.jsx("div",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa."})]})}),e.jsx(p,{children:e.jsx(x,{className:"ml-auto px-10",children:"Learn More"})})]})})]})},M={parameters:{author:P["vadym.melnicenko"]},render:()=>e.jsxs(j,{defaultValue:"account",className:"w-[500px]",variant:"navLabel",children:[e.jsxs(w,{className:"w-full",children:[e.jsx(g,{value:"account",children:"Selected"}),e.jsx(g,{value:"password",children:"Unselected"})]}),e.jsx(h,{value:"account",children:e.jsxs(e.Fragment,{children:[e.jsx(m,{className:"mb-4",children:e.jsx(v,{tag:"h2",size:"heading2",children:"Selected"})}),e.jsx(u,{children:e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"mb-12 ml-[15px] list-disc",children:[e.jsx("li",{children:"Tokens Selected"}),e.jsx("li",{children:"Rewards"})]}),e.jsx("div",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa."})]})}),e.jsx(p,{children:e.jsx(x,{className:"ml-auto px-10",children:"Learn More"})})]})}),e.jsx(h,{value:"password",children:e.jsxs(e.Fragment,{children:[e.jsx(m,{className:"mb-4",children:e.jsx(v,{tag:"h2",size:"heading2",children:"Unselected"})}),e.jsx(u,{children:e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"mb-12 ml-[15px] list-disc",children:[e.jsx("li",{children:"Tokens Unselected"}),e.jsx("li",{children:"Rewards"})]}),e.jsx("div",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa."})]})}),e.jsx(p,{children:e.jsx(x,{className:"ml-auto px-10",children:"Learn More"})})]})})]})};var V,I,A;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: ['https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412']
  },
  render: () => <Tabs defaultValue="account" className="w-[600px]" variant="default">
      <TabsList className="w-full">
        <TabsTrigger value="account">Selected</TabsTrigger>
        <TabsTrigger value="password">Unselected</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <>
          <CardHeader className="mb-4">
            <Typography tag="h2" size="heading2">
              Selected
            </Typography>
          </CardHeader>
          <CardContent>
            <>
              <ul className="mb-12 ml-[15px] list-disc">
                <li>Tokens Selected</li>
                <li>Rewards</li>
              </ul>
              <div className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                egestas odio, vitae scelerisque enim ligula venenatis dolor.
                Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
              </div>
            </>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto px-10">Learn More</Button>
          </CardFooter>
        </>
      </TabsContent>
      <TabsContent value="password">
        <>
          <CardHeader className="mb-4">
            <Typography tag="h2" size="heading2">
              Unselected
            </Typography>
          </CardHeader>
          <CardContent>
            <>
              <ul className="mb-12 ml-[15px] list-disc">
                <li>Tokens Unselected</li>
                <li>Rewards</li>
              </ul>
              <div className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                egestas odio, vitae scelerisque enim ligula venenatis dolor.
                Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
              </div>
            </>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto px-10">Learn More</Button>
          </CardFooter>
        </>
      </TabsContent>
    </Tabs>
}`,...(A=(I=y.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var q,z,B;F.parameters={...F.parameters,docs:{...(q=F.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko']
  },
  render: () => <Tabs defaultValue="account" className="w-[500px]" variant="secondary">
      <TabsList className="w-full">
        <TabsTrigger value="account">Selected</TabsTrigger>
        <TabsTrigger value="password">Unselected</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <>
          <CardHeader className="mb-4">
            <Typography tag="h2" size="heading2">
              Selected
            </Typography>
          </CardHeader>
          <CardContent>
            <>
              <ul className="mb-12 ml-[15px] list-disc">
                <li>Tokens Selected</li>
                <li>Rewards</li>
              </ul>
              <div className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                egestas odio, vitae scelerisque enim ligula venenatis dolor.
                Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
              </div>
            </>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto px-10">Learn More</Button>
          </CardFooter>
        </>
      </TabsContent>
      <TabsContent value="password">
        <>
          <CardHeader className="mb-4">
            <Typography tag="h2" size="heading2">
              Unselected
            </Typography>
          </CardHeader>
          <CardContent>
            <>
              <ul className="mb-12 ml-[15px] list-disc">
                <li>Tokens Unselected</li>
                <li>Rewards</li>
              </ul>
              <div className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                egestas odio, vitae scelerisque enim ligula venenatis dolor.
                Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
              </div>
            </>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto px-10">Learn More</Button>
          </CardFooter>
        </>
      </TabsContent>
    </Tabs>
}`,...(B=(z=F.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var U,D,E;L.parameters={...L.parameters,docs:{...(U=L.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko']
  },
  render: () => <Tabs defaultValue="post" className="w-[600px]" variant="underline">
      <TabsList className="w-full">
        <TabsTrigger value="post" details="1,1k">
          Post
        </TabsTrigger>
        <TabsTrigger value="followers" details="2,567">
          Followers
        </TabsTrigger>
        <TabsTrigger value="following" details="3,154">
          Following
        </TabsTrigger>
        <TabsTrigger value="nft" details="202">
          NFTs
        </TabsTrigger>
      </TabsList>
      <TabsContent value="post">
        <>
          <CardHeader className="mb-4">
            <Typography tag="h2" size="heading2">
              Post
            </Typography>
          </CardHeader>
          <CardContent>
            <>
              <ul className="mb-12 ml-[15px] list-disc">
                <li>Post</li>
                <li>Rewards</li>
              </ul>
              <div className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                egestas odio, vitae scelerisque enim ligula venenatis dolor.
                Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
              </div>
            </>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto px-10">Learn More</Button>
          </CardFooter>
        </>
      </TabsContent>
      <TabsContent value="followers">
        <>
          <CardHeader className="mb-4">
            <Typography tag="h2" size="heading2">
              Followers
            </Typography>
          </CardHeader>
          <CardContent>
            <>
              <ul className="mb-12 ml-[15px] list-disc">
                <li>Followers</li>
                <li>Rewards</li>
              </ul>
              <div className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                egestas odio, vitae scelerisque enim ligula venenatis dolor.
                Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
              </div>
            </>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto px-10">Learn More</Button>
          </CardFooter>
        </>
      </TabsContent>
      <TabsContent value="following">
        <>
          <CardHeader className="mb-4">
            <Typography tag="h2" size="heading2">
              Following
            </Typography>
          </CardHeader>
          <CardContent>
            <>
              <ul className="mb-12 ml-[15px] list-disc">
                <li>Following</li>
                <li>Rewards</li>
              </ul>
              <div className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                egestas odio, vitae scelerisque enim ligula venenatis dolor.
                Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
              </div>
            </>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto px-10">Learn More</Button>
          </CardFooter>
        </>
      </TabsContent>
      <TabsContent value="nft">
        <>
          <CardHeader className="mb-4">
            <Typography tag="h2" size="heading2">
              NFTs
            </Typography>
          </CardHeader>
          <CardContent>
            <>
              <ul className="mb-12 ml-[15px] list-disc">
                <li>NFTs</li>
                <li>Rewards</li>
              </ul>
              <div className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                egestas odio, vitae scelerisque enim ligula venenatis dolor.
                Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
              </div>
            </>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto px-10">Learn More</Button>
          </CardFooter>
        </>
      </TabsContent>
    </Tabs>
}`,...(E=(D=L.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var $,O,G;M.parameters={...M.parameters,docs:{...($=M.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    author: AUTHORS['vadym.melnicenko']
  },
  render: () => <Tabs defaultValue="account" className="w-[500px]" variant="navLabel">
      <TabsList className="w-full">
        <TabsTrigger value="account">Selected</TabsTrigger>
        <TabsTrigger value="password">Unselected</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <>
          <CardHeader className="mb-4">
            <Typography tag="h2" size="heading2">
              Selected
            </Typography>
          </CardHeader>
          <CardContent>
            <>
              <ul className="mb-12 ml-[15px] list-disc">
                <li>Tokens Selected</li>
                <li>Rewards</li>
              </ul>
              <div className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                egestas odio, vitae scelerisque enim ligula venenatis dolor.
                Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
              </div>
            </>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto px-10">Learn More</Button>
          </CardFooter>
        </>
      </TabsContent>
      <TabsContent value="password">
        <>
          <CardHeader className="mb-4">
            <Typography tag="h2" size="heading2">
              Unselected
            </Typography>
          </CardHeader>
          <CardContent>
            <>
              <ul className="mb-12 ml-[15px] list-disc">
                <li>Tokens Unselected</li>
                <li>Rewards</li>
              </ul>
              <div className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                egestas odio, vitae scelerisque enim ligula venenatis dolor.
                Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
              </div>
            </>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto px-10">Learn More</Button>
          </CardFooter>
        </>
      </TabsContent>
    </Tabs>
}`,...(G=(O=M.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};const Oe=["Playground","Secondary","Underline","NavLabel"];export{M as NavLabel,y as Playground,F as Secondary,L as Underline,Oe as __namedExportsOrder,$e as default};
