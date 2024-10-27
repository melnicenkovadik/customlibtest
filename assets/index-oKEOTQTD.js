import{j as R}from"./jsx-runtime-Cw0GR0a5.js";import{r as h}from"./index-CTjT7uj6.js";import{c as J,u as Ve}from"./index-DV6JdDQx.js";import{u as wt,a as ze}from"./index-Dt9fs78b.js";import{a as Ye,u as Kt,c as Xe}from"./index-okHkxgFN.js";import{D as Ge,P as qe}from"./index-DrC6v7q5.js";import{u as Ue}from"./index-R2VZBBG8.js";import{r as Ke}from"./index-BbmHap-z.js";import{P as ct}from"./index-9_93ZtqA.js";import{u as Ze}from"./index-Bs984v36.js";import{P as ie}from"./index-DSjsB-wa.js";import{c as Je}from"./index-Bv1jJhtj.js";const Qe=["top","right","bottom","left"],G=Math.min,H=Math.max,mt=Math.round,dt=Math.floor,q=t=>({x:t,y:t}),tn={left:"right",right:"left",bottom:"top",top:"bottom"},en={start:"end",end:"start"};function Et(t,e,n){return H(t,G(e,n))}function Y(t,e){return typeof t=="function"?t(e):t}function X(t){return t.split("-")[0]}function nt(t){return t.split("-")[1]}function _t(t){return t==="x"?"y":"x"}function kt(t){return t==="y"?"height":"width"}function U(t){return["top","bottom"].includes(X(t))?"y":"x"}function $t(t){return _t(U(t))}function nn(t,e,n){n===void 0&&(n=!1);const o=nt(t),r=$t(t),i=kt(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(s=ht(s)),[s,ht(s)]}function on(t){const e=ht(t);return[Ot(t),e,Ot(e)]}function Ot(t){return t.replace(/start|end/g,e=>en[e])}function rn(t,e,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?r:o:e?o:r;case"left":case"right":return e?i:s;default:return[]}}function sn(t,e,n,o){const r=nt(t);let i=rn(X(t),n==="start",o);return r&&(i=i.map(s=>s+"-"+r),e&&(i=i.concat(i.map(Ot)))),i}function ht(t){return t.replace(/left|right|bottom|top/g,e=>tn[e])}function cn(t){return{top:0,right:0,bottom:0,left:0,...t}}function se(t){return typeof t!="number"?cn(t):{top:t,right:t,bottom:t,left:t}}function gt(t){const{x:e,y:n,width:o,height:r}=t;return{width:o,height:r,top:n,left:e,right:e+o,bottom:n+r,x:e,y:n}}function Zt(t,e,n){let{reference:o,floating:r}=t;const i=U(e),s=$t(e),l=kt(s),c=X(e),f=i==="y",a=o.x+o.width/2-r.width/2,u=o.y+o.height/2-r.height/2,m=o[l]/2-r[l]/2;let d;switch(c){case"top":d={x:a,y:o.y-r.height};break;case"bottom":d={x:a,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:u};break;case"left":d={x:o.x-r.width,y:u};break;default:d={x:o.x,y:o.y}}switch(nt(e)){case"start":d[s]-=m*(n&&f?-1:1);break;case"end":d[s]+=m*(n&&f?-1:1);break}return d}const ln=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,l=i.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:a,y:u}=Zt(f,o,c),m=o,d={},p=0;for(let g=0;g<l.length;g++){const{name:x,fn:w}=l[g],{x:y,y:C,data:v,reset:b}=await w({x:a,y:u,initialPlacement:o,placement:m,strategy:r,middlewareData:d,rects:f,platform:s,elements:{reference:t,floating:e}});a=y??a,u=C??u,d={...d,[x]:{...d[x],...v}},b&&p<=50&&(p++,typeof b=="object"&&(b.placement&&(m=b.placement),b.rects&&(f=b.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):b.rects),{x:a,y:u}=Zt(f,m,c)),g=-1)}return{x:a,y:u,placement:m,strategy:r,middlewareData:d}};async function it(t,e){var n;e===void 0&&(e={});const{x:o,y:r,platform:i,rects:s,elements:l,strategy:c}=t,{boundary:f="clippingAncestors",rootBoundary:a="viewport",elementContext:u="floating",altBoundary:m=!1,padding:d=0}=Y(e,t),p=se(d),x=l[m?u==="floating"?"reference":"floating":u],w=gt(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(x)))==null||n?x:x.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:f,rootBoundary:a,strategy:c})),y=u==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,C=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),v=await(i.isElement==null?void 0:i.isElement(C))?await(i.getScale==null?void 0:i.getScale(C))||{x:1,y:1}:{x:1,y:1},b=gt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:C,strategy:c}):y);return{top:(w.top-b.top+p.top)/v.y,bottom:(b.bottom-w.bottom+p.bottom)/v.y,left:(w.left-b.left+p.left)/v.x,right:(b.right-w.right+p.right)/v.x}}const an=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:r,rects:i,platform:s,elements:l,middlewareData:c}=e,{element:f,padding:a=0}=Y(t,e)||{};if(f==null)return{};const u=se(a),m={x:n,y:o},d=$t(r),p=kt(d),g=await s.getDimensions(f),x=d==="y",w=x?"top":"left",y=x?"bottom":"right",C=x?"clientHeight":"clientWidth",v=i.reference[p]+i.reference[d]-m[d]-i.floating[p],b=m[d]-i.reference[d],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(f));let T=A?A[C]:0;(!T||!await(s.isElement==null?void 0:s.isElement(A)))&&(T=l.floating[C]||i.floating[p]);const L=v/2-b/2,N=T/2-g[p]/2-1,M=G(u[w],N),k=G(u[y],N),$=M,O=T-g[p]-k,E=T/2-g[p]/2+L,F=Et($,E,O),S=!c.arrow&&nt(r)!=null&&E!==F&&i.reference[p]/2-(E<$?M:k)-g[p]/2<0,D=S?E<$?E-$:E-O:0;return{[d]:m[d]+D,data:{[d]:F,centerOffset:E-F-D,...S&&{alignmentOffset:D}},reset:S}}}),fn=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:r,middlewareData:i,rects:s,initialPlacement:l,platform:c,elements:f}=e,{mainAxis:a=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...x}=Y(t,e);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const w=X(r),y=U(l),C=X(l)===l,v=await(c.isRTL==null?void 0:c.isRTL(f.floating)),b=m||(C||!g?[ht(l)]:on(l)),A=p!=="none";!m&&A&&b.push(...sn(l,g,p,v));const T=[l,...b],L=await it(e,x),N=[];let M=((o=i.flip)==null?void 0:o.overflows)||[];if(a&&N.push(L[w]),u){const E=nn(r,s,v);N.push(L[E[0]],L[E[1]])}if(M=[...M,{placement:r,overflows:N}],!N.every(E=>E<=0)){var k,$;const E=(((k=i.flip)==null?void 0:k.index)||0)+1,F=T[E];if(F)return{data:{index:E,overflows:M},reset:{placement:F}};let S=($=M.filter(D=>D.overflows[0]<=0).sort((D,P)=>D.overflows[1]-P.overflows[1])[0])==null?void 0:$.placement;if(!S)switch(d){case"bestFit":{var O;const D=(O=M.filter(P=>{if(A){const _=U(P.placement);return _===y||_==="y"}return!0}).map(P=>[P.placement,P.overflows.filter(_=>_>0).reduce((_,B)=>_+B,0)]).sort((P,_)=>P[1]-_[1])[0])==null?void 0:O[0];D&&(S=D);break}case"initialPlacement":S=l;break}if(r!==S)return{reset:{placement:S}}}return{}}}};function Jt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Qt(t){return Qe.some(e=>t[e]>=0)}const un=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...r}=Y(t,e);switch(o){case"referenceHidden":{const i=await it(e,{...r,elementContext:"reference"}),s=Jt(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Qt(s)}}}case"escaped":{const i=await it(e,{...r,altBoundary:!0}),s=Jt(i,n.floating);return{data:{escapedOffsets:s,escaped:Qt(s)}}}default:return{}}}}};async function dn(t,e){const{placement:n,platform:o,elements:r}=t,i=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=X(n),l=nt(n),c=U(n)==="y",f=["left","top"].includes(s)?-1:1,a=i&&c?-1:1,u=Y(e,t);let{mainAxis:m,crossAxis:d,alignmentAxis:p}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return l&&typeof p=="number"&&(d=l==="end"?p*-1:p),c?{x:d*a,y:m*f}:{x:m*f,y:d*a}}const pn=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:r,y:i,placement:s,middlewareData:l}=e,c=await dn(e,t);return s===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:r+c.x,y:i+c.y,data:{...c,placement:s}}}}},mn=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r}=e,{mainAxis:i=!0,crossAxis:s=!1,limiter:l={fn:x=>{let{x:w,y}=x;return{x:w,y}}},...c}=Y(t,e),f={x:n,y:o},a=await it(e,c),u=U(X(r)),m=_t(u);let d=f[m],p=f[u];if(i){const x=m==="y"?"top":"left",w=m==="y"?"bottom":"right",y=d+a[x],C=d-a[w];d=Et(y,d,C)}if(s){const x=u==="y"?"top":"left",w=u==="y"?"bottom":"right",y=p+a[x],C=p-a[w];p=Et(y,p,C)}const g=l.fn({...e,[m]:d,[u]:p});return{...g,data:{x:g.x-n,y:g.y-o,enabled:{[m]:i,[u]:s}}}}}},hn=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:r,rects:i,middlewareData:s}=e,{offset:l=0,mainAxis:c=!0,crossAxis:f=!0}=Y(t,e),a={x:n,y:o},u=U(r),m=_t(u);let d=a[m],p=a[u];const g=Y(l,e),x=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(c){const C=m==="y"?"height":"width",v=i.reference[m]-i.floating[C]+x.mainAxis,b=i.reference[m]+i.reference[C]-x.mainAxis;d<v?d=v:d>b&&(d=b)}if(f){var w,y;const C=m==="y"?"width":"height",v=["top","left"].includes(X(r)),b=i.reference[u]-i.floating[C]+(v&&((w=s.offset)==null?void 0:w[u])||0)+(v?0:x.crossAxis),A=i.reference[u]+i.reference[C]+(v?0:((y=s.offset)==null?void 0:y[u])||0)-(v?x.crossAxis:0);p<b?p=b:p>A&&(p=A)}return{[m]:d,[u]:p}}}},gn=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,o;const{placement:r,rects:i,platform:s,elements:l}=e,{apply:c=()=>{},...f}=Y(t,e),a=await it(e,f),u=X(r),m=nt(r),d=U(r)==="y",{width:p,height:g}=i.floating;let x,w;u==="top"||u==="bottom"?(x=u,w=m===(await(s.isRTL==null?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(w=u,x=m==="end"?"top":"bottom");const y=g-a.top-a.bottom,C=p-a.left-a.right,v=G(g-a[x],y),b=G(p-a[w],C),A=!e.middlewareData.shift;let T=v,L=b;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(L=C),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(T=y),A&&!m){const M=H(a.left,0),k=H(a.right,0),$=H(a.top,0),O=H(a.bottom,0);d?L=p-2*(M!==0||k!==0?M+k:H(a.left,a.right)):T=g-2*($!==0||O!==0?$+O:H(a.top,a.bottom))}await c({...e,availableWidth:L,availableHeight:T});const N=await s.getDimensions(l.floating);return p!==N.width||g!==N.height?{reset:{rects:!0}}:{}}}};function yt(){return typeof window<"u"}function ot(t){return ce(t)?(t.nodeName||"").toLowerCase():"#document"}function j(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function z(t){var e;return(e=(ce(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ce(t){return yt()?t instanceof Node||t instanceof j(t).Node:!1}function I(t){return yt()?t instanceof Element||t instanceof j(t).Element:!1}function V(t){return yt()?t instanceof HTMLElement||t instanceof j(t).HTMLElement:!1}function te(t){return!yt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof j(t).ShadowRoot}function lt(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=W(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(r)}function xn(t){return["table","td","th"].includes(ot(t))}function vt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Nt(t){const e=Ht(),n=I(t)?W(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function wn(t){let e=K(t);for(;V(e)&&!tt(e);){if(Nt(e))return e;if(vt(e))return null;e=K(e)}return null}function Ht(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function tt(t){return["html","body","#document"].includes(ot(t))}function W(t){return j(t).getComputedStyle(t)}function bt(t){return I(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function K(t){if(ot(t)==="html")return t;const e=t.assignedSlot||t.parentNode||te(t)&&t.host||z(t);return te(e)?e.host:e}function le(t){const e=K(t);return tt(e)?t.ownerDocument?t.ownerDocument.body:t.body:V(e)&&lt(e)?e:le(e)}function st(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=le(t),i=r===((o=t.ownerDocument)==null?void 0:o.body),s=j(r);if(i){const l=St(s);return e.concat(s,s.visualViewport||[],lt(r)?r:[],l&&n?st(l):[])}return e.concat(r,st(r,[],n))}function St(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ae(t){const e=W(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=V(t),i=r?t.offsetWidth:n,s=r?t.offsetHeight:o,l=mt(n)!==i||mt(o)!==s;return l&&(n=i,o=s),{width:n,height:o,$:l}}function jt(t){return I(t)?t:t.contextElement}function Q(t){const e=jt(t);if(!V(e))return q(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:i}=ae(e);let s=(i?mt(n.width):n.width)/o,l=(i?mt(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const yn=q(0);function fe(t){const e=j(t);return!Ht()||!e.visualViewport?yn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function vn(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==j(t)?!1:e}function Z(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),i=jt(t);let s=q(1);e&&(o?I(o)&&(s=Q(o)):s=Q(t));const l=vn(i,n,o)?fe(i):q(0);let c=(r.left+l.x)/s.x,f=(r.top+l.y)/s.y,a=r.width/s.x,u=r.height/s.y;if(i){const m=j(i),d=o&&I(o)?j(o):o;let p=m,g=St(p);for(;g&&o&&d!==p;){const x=Q(g),w=g.getBoundingClientRect(),y=W(g),C=w.left+(g.clientLeft+parseFloat(y.paddingLeft))*x.x,v=w.top+(g.clientTop+parseFloat(y.paddingTop))*x.y;c*=x.x,f*=x.y,a*=x.x,u*=x.y,c+=C,f+=v,p=j(g),g=St(p)}}return gt({width:a,height:u,x:c,y:f})}function bn(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const i=r==="fixed",s=z(o),l=e?vt(e.floating):!1;if(o===s||l&&i)return n;let c={scrollLeft:0,scrollTop:0},f=q(1);const a=q(0),u=V(o);if((u||!u&&!i)&&((ot(o)!=="body"||lt(s))&&(c=bt(o)),V(o))){const m=Z(o);f=Q(o),a.x=m.x+o.clientLeft,a.y=m.y+o.clientTop}return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-c.scrollLeft*f.x+a.x,y:n.y*f.y-c.scrollTop*f.y+a.y}}function Cn(t){return Array.from(t.getClientRects())}function Dt(t,e){const n=bt(t).scrollLeft;return e?e.left+n:Z(z(t)).left+n}function An(t){const e=z(t),n=bt(t),o=t.ownerDocument.body,r=H(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=H(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Dt(t);const l=-n.scrollTop;return W(o).direction==="rtl"&&(s+=H(e.clientWidth,o.clientWidth)-r),{width:r,height:i,x:s,y:l}}function Pn(t,e){const n=j(t),o=z(t),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,l=0,c=0;if(r){i=r.width,s=r.height;const f=Ht();(!f||f&&e==="fixed")&&(l=r.offsetLeft,c=r.offsetTop)}return{width:i,height:s,x:l,y:c}}function Rn(t,e){const n=Z(t,!0,e==="fixed"),o=n.top+t.clientTop,r=n.left+t.clientLeft,i=V(t)?Q(t):q(1),s=t.clientWidth*i.x,l=t.clientHeight*i.y,c=r*i.x,f=o*i.y;return{width:s,height:l,x:c,y:f}}function ee(t,e,n){let o;if(e==="viewport")o=Pn(t,n);else if(e==="document")o=An(z(t));else if(I(e))o=Rn(e,n);else{const r=fe(t);o={...e,x:e.x-r.x,y:e.y-r.y}}return gt(o)}function ue(t,e){const n=K(t);return n===e||!I(n)||tt(n)?!1:W(n).position==="fixed"||ue(n,e)}function Tn(t,e){const n=e.get(t);if(n)return n;let o=st(t,[],!1).filter(l=>I(l)&&ot(l)!=="body"),r=null;const i=W(t).position==="fixed";let s=i?K(t):t;for(;I(s)&&!tt(s);){const l=W(s),c=Nt(s);!c&&l.position==="fixed"&&(r=null),(i?!c&&!r:!c&&l.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||lt(s)&&!c&&ue(t,s))?o=o.filter(a=>a!==s):r=l,s=K(s)}return e.set(t,o),o}function En(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const s=[...n==="clippingAncestors"?vt(e)?[]:Tn(e,this._c):[].concat(n),o],l=s[0],c=s.reduce((f,a)=>{const u=ee(e,a,r);return f.top=H(u.top,f.top),f.right=G(u.right,f.right),f.bottom=G(u.bottom,f.bottom),f.left=H(u.left,f.left),f},ee(e,l,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function On(t){const{width:e,height:n}=ae(t);return{width:e,height:n}}function Sn(t,e,n){const o=V(e),r=z(e),i=n==="fixed",s=Z(t,!0,i,e);let l={scrollLeft:0,scrollTop:0};const c=q(0);if(o||!o&&!i)if((ot(e)!=="body"||lt(r))&&(l=bt(e)),o){const d=Z(e,!0,i,e);c.x=d.x+e.clientLeft,c.y=d.y+e.clientTop}else r&&(c.x=Dt(r));let f=0,a=0;if(r&&!o&&!i){const d=r.getBoundingClientRect();a=d.top+l.scrollTop,f=d.left+l.scrollLeft-Dt(r,d)}const u=s.left+l.scrollLeft-c.x-f,m=s.top+l.scrollTop-c.y-a;return{x:u,y:m,width:s.width,height:s.height}}function Rt(t){return W(t).position==="static"}function ne(t,e){if(!V(t)||W(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return z(t)===n&&(n=n.ownerDocument.body),n}function de(t,e){const n=j(t);if(vt(t))return n;if(!V(t)){let r=K(t);for(;r&&!tt(r);){if(I(r)&&!Rt(r))return r;r=K(r)}return n}let o=ne(t,e);for(;o&&xn(o)&&Rt(o);)o=ne(o,e);return o&&tt(o)&&Rt(o)&&!Nt(o)?n:o||wn(t)||n}const Dn=async function(t){const e=this.getOffsetParent||de,n=this.getDimensions,o=await n(t.floating);return{reference:Sn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Ln(t){return W(t).direction==="rtl"}const Mn={convertOffsetParentRelativeRectToViewportRelativeRect:bn,getDocumentElement:z,getClippingRect:En,getOffsetParent:de,getElementRects:Dn,getClientRects:Cn,getDimensions:On,getScale:Q,isElement:I,isRTL:Ln};function _n(t,e){let n=null,o;const r=z(t);function i(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),i();const{left:f,top:a,width:u,height:m}=t.getBoundingClientRect();if(l||e(),!u||!m)return;const d=dt(a),p=dt(r.clientWidth-(f+u)),g=dt(r.clientHeight-(a+m)),x=dt(f),y={rootMargin:-d+"px "+-p+"px "+-g+"px "+-x+"px",threshold:H(0,G(1,c))||1};let C=!0;function v(b){const A=b[0].intersectionRatio;if(A!==c){if(!C)return s();A?s(!1,A):o=setTimeout(()=>{s(!1,1e-7)},1e3)}C=!1}try{n=new IntersectionObserver(v,{...y,root:r.ownerDocument})}catch{n=new IntersectionObserver(v,y)}n.observe(t)}return s(!0),i}function kn(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,f=jt(t),a=r||i?[...f?st(f):[],...st(e)]:[];a.forEach(w=>{r&&w.addEventListener("scroll",n,{passive:!0}),i&&w.addEventListener("resize",n)});const u=f&&l?_n(f,n):null;let m=-1,d=null;s&&(d=new ResizeObserver(w=>{let[y]=w;y&&y.target===f&&d&&(d.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var C;(C=d)==null||C.observe(e)})),n()}),f&&!c&&d.observe(f),d.observe(e));let p,g=c?Z(t):null;c&&x();function x(){const w=Z(t);g&&(w.x!==g.x||w.y!==g.y||w.width!==g.width||w.height!==g.height)&&n(),g=w,p=requestAnimationFrame(x)}return n(),()=>{var w;a.forEach(y=>{r&&y.removeEventListener("scroll",n),i&&y.removeEventListener("resize",n)}),u==null||u(),(w=d)==null||w.disconnect(),d=null,c&&cancelAnimationFrame(p)}}const $n=pn,Nn=mn,Hn=fn,jn=gn,Fn=un,oe=an,In=hn,Wn=(t,e,n)=>{const o=new Map,r={platform:Mn,...n},i={...r.platform,_c:o};return ln(t,e,{...r,platform:i})};var pt=typeof document<"u"?h.useLayoutEffect:h.useEffect;function xt(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,r;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;o--!==0;)if(!xt(t[o],e[o]))return!1;return!0}if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,r[o]))return!1;for(o=n;o--!==0;){const i=r[o];if(!(i==="_owner"&&t.$$typeof)&&!xt(t[i],e[i]))return!1}return!0}return t!==t&&e!==e}function pe(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function re(t,e){const n=pe(t);return Math.round(e*n)/n}function Tt(t){const e=h.useRef(t);return pt(()=>{e.current=t}),e}function Bn(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:i,floating:s}={},transform:l=!0,whileElementsMounted:c,open:f}=t,[a,u]=h.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[m,d]=h.useState(o);xt(m,o)||d(o);const[p,g]=h.useState(null),[x,w]=h.useState(null),y=h.useCallback(P=>{P!==A.current&&(A.current=P,g(P))},[]),C=h.useCallback(P=>{P!==T.current&&(T.current=P,w(P))},[]),v=i||p,b=s||x,A=h.useRef(null),T=h.useRef(null),L=h.useRef(a),N=c!=null,M=Tt(c),k=Tt(r),$=Tt(f),O=h.useCallback(()=>{if(!A.current||!T.current)return;const P={placement:e,strategy:n,middleware:m};k.current&&(P.platform=k.current),Wn(A.current,T.current,P).then(_=>{const B={..._,isPositioned:$.current!==!1};E.current&&!xt(L.current,B)&&(L.current=B,Ke.flushSync(()=>{u(B)}))})},[m,e,n,k,$]);pt(()=>{f===!1&&L.current.isPositioned&&(L.current.isPositioned=!1,u(P=>({...P,isPositioned:!1})))},[f]);const E=h.useRef(!1);pt(()=>(E.current=!0,()=>{E.current=!1}),[]),pt(()=>{if(v&&(A.current=v),b&&(T.current=b),v&&b){if(M.current)return M.current(v,b,O);O()}},[v,b,O,M,N]);const F=h.useMemo(()=>({reference:A,floating:T,setReference:y,setFloating:C}),[y,C]),S=h.useMemo(()=>({reference:v,floating:b}),[v,b]),D=h.useMemo(()=>{const P={position:n,left:0,top:0};if(!S.floating)return P;const _=re(S.floating,a.x),B=re(S.floating,a.y);return l?{...P,transform:"translate("+_+"px, "+B+"px)",...pe(S.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:_,top:B}},[n,l,S.floating,a.x,a.y]);return h.useMemo(()=>({...a,update:O,refs:F,elements:S,floatingStyles:D}),[a,O,F,S,D])}const Vn=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:o,padding:r}=typeof t=="function"?t(n):t;return o&&e(o)?o.current!=null?oe({element:o.current,padding:r}).fn(n):{}:o?oe({element:o,padding:r}).fn(n):{}}}},zn=(t,e)=>({...$n(t),options:[t,e]}),Yn=(t,e)=>({...Nn(t),options:[t,e]}),Xn=(t,e)=>({...In(t),options:[t,e]}),Gn=(t,e)=>({...Hn(t),options:[t,e]}),qn=(t,e)=>({...jn(t),options:[t,e]}),Un=(t,e)=>({...Fn(t),options:[t,e]}),Kn=(t,e)=>({...Vn(t),options:[t,e]});var Zn="Arrow",me=h.forwardRef((t,e)=>{const{children:n,width:o=10,height:r=5,...i}=t;return R.jsx(ct.svg,{...i,ref:e,width:o,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:R.jsx("polygon",{points:"0,0 30,0 15,10"})})});me.displayName=Zn;var Jn=me;function Qn(t,e=[]){let n=[];function o(i,s){const l=h.createContext(s),c=n.length;n=[...n,s];function f(u){const{scope:m,children:d,...p}=u,g=(m==null?void 0:m[t][c])||l,x=h.useMemo(()=>p,Object.values(p));return R.jsx(g.Provider,{value:x,children:d})}function a(u,m){const d=(m==null?void 0:m[t][c])||l,p=h.useContext(d);if(p)return p;if(s!==void 0)return s;throw new Error(`\`${u}\` must be used within \`${i}\``)}return f.displayName=i+"Provider",[f,a]}const r=()=>{const i=n.map(s=>h.createContext(s));return function(l){const c=(l==null?void 0:l[t])||i;return h.useMemo(()=>({[`__scope${t}`]:{...l,[t]:c}}),[l,c])}};return r.scopeName=t,[o,to(r,...e)]}function to(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const o=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(i){const s=o.reduce((l,{useScope:c,scopeName:f})=>{const u=c(i)[`__scope${f}`];return{...l,...u}},{});return h.useMemo(()=>({[`__scope${e.scopeName}`]:s}),[s])}};return n.scopeName=e.scopeName,n}var Ft="Popper",[he,ge]=Qn(Ft),[eo,xe]=he(Ft),we=t=>{const{__scopePopper:e,children:n}=t,[o,r]=h.useState(null);return R.jsx(eo,{scope:e,anchor:o,onAnchorChange:r,children:n})};we.displayName=Ft;var ye="PopperAnchor",ve=h.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:o,...r}=t,i=xe(ye,n),s=h.useRef(null),l=wt(e,s);return h.useEffect(()=>{i.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:R.jsx(ct.div,{...r,ref:l})});ve.displayName=ye;var It="PopperContent",[no,oo]=he(It),be=h.forwardRef((t,e)=>{var Vt,zt,Yt,Xt,Gt,qt;const{__scopePopper:n,side:o="bottom",sideOffset:r=0,align:i="center",alignOffset:s=0,arrowPadding:l=0,avoidCollisions:c=!0,collisionBoundary:f=[],collisionPadding:a=0,sticky:u="partial",hideWhenDetached:m=!1,updatePositionStrategy:d="optimized",onPlaced:p,...g}=t,x=xe(It,n),[w,y]=h.useState(null),C=wt(e,rt=>y(rt)),[v,b]=h.useState(null),A=Ze(v),T=(A==null?void 0:A.width)??0,L=(A==null?void 0:A.height)??0,N=o+(i!=="center"?"-"+i:""),M=typeof a=="number"?a:{top:0,right:0,bottom:0,left:0,...a},k=Array.isArray(f)?f:[f],$=k.length>0,O={padding:M,boundary:k.filter(io),altBoundary:$},{refs:E,floatingStyles:F,placement:S,isPositioned:D,middlewareData:P}=Bn({strategy:"fixed",placement:N,whileElementsMounted:(...rt)=>kn(...rt,{animationFrame:d==="always"}),elements:{reference:x.anchor},middleware:[zn({mainAxis:r+L,alignmentAxis:s}),c&&Yn({mainAxis:!0,crossAxis:!1,limiter:u==="partial"?Xn():void 0,...O}),c&&Gn({...O}),qn({...O,apply:({elements:rt,rects:Ut,availableWidth:Fe,availableHeight:Ie})=>{const{width:We,height:Be}=Ut.reference,ut=rt.floating.style;ut.setProperty("--radix-popper-available-width",`${Fe}px`),ut.setProperty("--radix-popper-available-height",`${Ie}px`),ut.setProperty("--radix-popper-anchor-width",`${We}px`),ut.setProperty("--radix-popper-anchor-height",`${Be}px`)}}),v&&Kn({element:v,padding:l}),so({arrowWidth:T,arrowHeight:L}),m&&Un({strategy:"referenceHidden",...O})]}),[_,B]=Pe(S),ft=Ye(p);Kt(()=>{D&&(ft==null||ft())},[D,ft]);const ke=(Vt=P.arrow)==null?void 0:Vt.x,$e=(zt=P.arrow)==null?void 0:zt.y,Ne=((Yt=P.arrow)==null?void 0:Yt.centerOffset)!==0,[He,je]=h.useState();return Kt(()=>{w&&je(window.getComputedStyle(w).zIndex)},[w]),R.jsx("div",{ref:E.setFloating,"data-radix-popper-content-wrapper":"",style:{...F,transform:D?F.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:He,"--radix-popper-transform-origin":[(Xt=P.transformOrigin)==null?void 0:Xt.x,(Gt=P.transformOrigin)==null?void 0:Gt.y].join(" "),...((qt=P.hide)==null?void 0:qt.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:R.jsx(no,{scope:n,placedSide:_,onArrowChange:b,arrowX:ke,arrowY:$e,shouldHideArrow:Ne,children:R.jsx(ct.div,{"data-side":_,"data-align":B,...g,ref:C,style:{...g.style,animation:D?void 0:"none"}})})})});be.displayName=It;var Ce="PopperArrow",ro={top:"bottom",right:"left",bottom:"top",left:"right"},Ae=h.forwardRef(function(e,n){const{__scopePopper:o,...r}=e,i=oo(Ce,o),s=ro[i.placedSide];return R.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:R.jsx(Jn,{...r,ref:n,style:{...r.style,display:"block"}})})});Ae.displayName=Ce;function io(t){return t!==null}var so=t=>({name:"transformOrigin",options:t,fn(e){var x,w,y;const{placement:n,rects:o,middlewareData:r}=e,s=((x=r.arrow)==null?void 0:x.centerOffset)!==0,l=s?0:t.arrowWidth,c=s?0:t.arrowHeight,[f,a]=Pe(n),u={start:"0%",center:"50%",end:"100%"}[a],m=(((w=r.arrow)==null?void 0:w.x)??0)+l/2,d=(((y=r.arrow)==null?void 0:y.y)??0)+c/2;let p="",g="";return f==="bottom"?(p=s?u:`${m}px`,g=`${-c}px`):f==="top"?(p=s?u:`${m}px`,g=`${o.floating.height+c}px`):f==="right"?(p=`${-c}px`,g=s?u:`${d}px`):f==="left"&&(p=`${o.floating.width+c}px`,g=s?u:`${d}px`),{data:{x:p,y:g}}}});function Pe(t){const[e,n="center"]=t.split("-");return[e,n]}var co=we,lo=ve,ao=be,fo=Ae,uo="VisuallyHidden",Re=h.forwardRef((t,e)=>R.jsx(ct.span,{...t,ref:e,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...t.style}}));Re.displayName=uo;var po=Re,[Ct,Go]=Xe("Tooltip",[ge]),At=ge(),Te="TooltipProvider",mo=700,Lt="tooltip.open",[ho,Wt]=Ct(Te),Ee=t=>{const{__scopeTooltip:e,delayDuration:n=mo,skipDelayDuration:o=300,disableHoverableContent:r=!1,children:i}=t,[s,l]=h.useState(!0),c=h.useRef(!1),f=h.useRef(0);return h.useEffect(()=>{const a=f.current;return()=>window.clearTimeout(a)},[]),R.jsx(ho,{scope:e,isOpenDelayed:s,delayDuration:n,onOpen:h.useCallback(()=>{window.clearTimeout(f.current),l(!1)},[]),onClose:h.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>l(!0),o)},[o]),isPointerInTransitRef:c,onPointerInTransitChange:h.useCallback(a=>{c.current=a},[]),disableHoverableContent:r,children:i})};Ee.displayName=Te;var Pt="Tooltip",[go,at]=Ct(Pt),Oe=t=>{const{__scopeTooltip:e,children:n,open:o,defaultOpen:r=!1,onOpenChange:i,disableHoverableContent:s,delayDuration:l}=t,c=Wt(Pt,t.__scopeTooltip),f=At(e),[a,u]=h.useState(null),m=Ue(),d=h.useRef(0),p=s??c.disableHoverableContent,g=l??c.delayDuration,x=h.useRef(!1),[w=!1,y]=Ve({prop:o,defaultProp:r,onChange:T=>{T?(c.onOpen(),document.dispatchEvent(new CustomEvent(Lt))):c.onClose(),i==null||i(T)}}),C=h.useMemo(()=>w?x.current?"delayed-open":"instant-open":"closed",[w]),v=h.useCallback(()=>{window.clearTimeout(d.current),x.current=!1,y(!0)},[y]),b=h.useCallback(()=>{window.clearTimeout(d.current),y(!1)},[y]),A=h.useCallback(()=>{window.clearTimeout(d.current),d.current=window.setTimeout(()=>{x.current=!0,y(!0)},g)},[g,y]);return h.useEffect(()=>()=>window.clearTimeout(d.current),[]),R.jsx(co,{...f,children:R.jsx(go,{scope:e,contentId:m,open:w,stateAttribute:C,trigger:a,onTriggerChange:u,onTriggerEnter:h.useCallback(()=>{c.isOpenDelayed?A():v()},[c.isOpenDelayed,A,v]),onTriggerLeave:h.useCallback(()=>{p?b():window.clearTimeout(d.current)},[b,p]),onOpen:v,onClose:b,disableHoverableContent:p,children:n})})};Oe.displayName=Pt;var Mt="TooltipTrigger",Se=h.forwardRef((t,e)=>{const{__scopeTooltip:n,...o}=t,r=at(Mt,n),i=Wt(Mt,n),s=At(n),l=h.useRef(null),c=wt(e,l,r.onTriggerChange),f=h.useRef(!1),a=h.useRef(!1),u=h.useCallback(()=>f.current=!1,[]);return h.useEffect(()=>()=>document.removeEventListener("pointerup",u),[u]),R.jsx(lo,{asChild:!0,...s,children:R.jsx(ct.button,{"aria-describedby":r.open?r.contentId:void 0,"data-state":r.stateAttribute,...o,ref:c,onPointerMove:J(t.onPointerMove,m=>{m.pointerType!=="touch"&&!a.current&&!i.isPointerInTransitRef.current&&(r.onTriggerEnter(),a.current=!0)}),onPointerLeave:J(t.onPointerLeave,()=>{r.onTriggerLeave(),a.current=!1}),onPointerDown:J(t.onPointerDown,()=>{f.current=!0,document.addEventListener("pointerup",u,{once:!0})}),onFocus:J(t.onFocus,()=>{f.current||r.onOpen()}),onBlur:J(t.onBlur,r.onClose),onClick:J(t.onClick,r.onClose)})})});Se.displayName=Mt;var Bt="TooltipPortal",[xo,wo]=Ct(Bt,{forceMount:void 0}),De=t=>{const{__scopeTooltip:e,forceMount:n,children:o,container:r}=t,i=at(Bt,e);return R.jsx(xo,{scope:e,forceMount:n,children:R.jsx(ie,{present:n||i.open,children:R.jsx(qe,{asChild:!0,container:r,children:o})})})};De.displayName=Bt;var et="TooltipContent",Le=h.forwardRef((t,e)=>{const n=wo(et,t.__scopeTooltip),{forceMount:o=n.forceMount,side:r="top",...i}=t,s=at(et,t.__scopeTooltip);return R.jsx(ie,{present:o||s.open,children:s.disableHoverableContent?R.jsx(Me,{side:r,...i,ref:e}):R.jsx(yo,{side:r,...i,ref:e})})}),yo=h.forwardRef((t,e)=>{const n=at(et,t.__scopeTooltip),o=Wt(et,t.__scopeTooltip),r=h.useRef(null),i=wt(e,r),[s,l]=h.useState(null),{trigger:c,onClose:f}=n,a=r.current,{onPointerInTransitChange:u}=o,m=h.useCallback(()=>{l(null),u(!1)},[u]),d=h.useCallback((p,g)=>{const x=p.currentTarget,w={x:p.clientX,y:p.clientY},y=Ao(w,x.getBoundingClientRect()),C=Po(w,y),v=Ro(g.getBoundingClientRect()),b=Eo([...C,...v]);l(b),u(!0)},[u]);return h.useEffect(()=>()=>m(),[m]),h.useEffect(()=>{if(c&&a){const p=x=>d(x,a),g=x=>d(x,c);return c.addEventListener("pointerleave",p),a.addEventListener("pointerleave",g),()=>{c.removeEventListener("pointerleave",p),a.removeEventListener("pointerleave",g)}}},[c,a,d,m]),h.useEffect(()=>{if(s){const p=g=>{const x=g.target,w={x:g.clientX,y:g.clientY},y=(c==null?void 0:c.contains(x))||(a==null?void 0:a.contains(x)),C=!To(w,s);y?m():C&&(m(),f())};return document.addEventListener("pointermove",p),()=>document.removeEventListener("pointermove",p)}},[c,a,s,f,m]),R.jsx(Me,{...t,ref:i})}),[vo,bo]=Ct(Pt,{isInside:!1}),Me=h.forwardRef((t,e)=>{const{__scopeTooltip:n,children:o,"aria-label":r,onEscapeKeyDown:i,onPointerDownOutside:s,...l}=t,c=at(et,n),f=At(n),{onClose:a}=c;return h.useEffect(()=>(document.addEventListener(Lt,a),()=>document.removeEventListener(Lt,a)),[a]),h.useEffect(()=>{if(c.trigger){const u=m=>{const d=m.target;d!=null&&d.contains(c.trigger)&&a()};return window.addEventListener("scroll",u,{capture:!0}),()=>window.removeEventListener("scroll",u,{capture:!0})}},[c.trigger,a]),R.jsx(Ge,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:u=>u.preventDefault(),onDismiss:a,children:R.jsxs(ao,{"data-state":c.stateAttribute,...f,...l,ref:e,style:{...l.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[R.jsx(ze,{children:o}),R.jsx(vo,{scope:n,isInside:!0,children:R.jsx(po,{id:c.contentId,role:"tooltip",children:r||o})})]})})});Le.displayName=et;var _e="TooltipArrow",Co=h.forwardRef((t,e)=>{const{__scopeTooltip:n,...o}=t,r=At(n);return bo(_e,n).isInside?null:R.jsx(fo,{...r,...o,ref:e})});Co.displayName=_e;function Ao(t,e){const n=Math.abs(e.top-t.y),o=Math.abs(e.bottom-t.y),r=Math.abs(e.right-t.x),i=Math.abs(e.left-t.x);switch(Math.min(n,o,r,i)){case i:return"left";case r:return"right";case n:return"top";case o:return"bottom";default:throw new Error("unreachable")}}function Po(t,e,n=5){const o=[];switch(e){case"top":o.push({x:t.x-n,y:t.y+n},{x:t.x+n,y:t.y+n});break;case"bottom":o.push({x:t.x-n,y:t.y-n},{x:t.x+n,y:t.y-n});break;case"left":o.push({x:t.x+n,y:t.y-n},{x:t.x+n,y:t.y+n});break;case"right":o.push({x:t.x-n,y:t.y-n},{x:t.x-n,y:t.y+n});break}return o}function Ro(t){const{top:e,right:n,bottom:o,left:r}=t;return[{x:r,y:e},{x:n,y:e},{x:n,y:o},{x:r,y:o}]}function To(t,e){const{x:n,y:o}=t;let r=!1;for(let i=0,s=e.length-1;i<e.length;s=i++){const l=e[i].x,c=e[i].y,f=e[s].x,a=e[s].y;c>o!=a>o&&n<(f-l)*(o-c)/(a-c)+l&&(r=!r)}return r}function Eo(t){const e=t.slice();return e.sort((n,o)=>n.x<o.x?-1:n.x>o.x?1:n.y<o.y?-1:n.y>o.y?1:0),Oo(e)}function Oo(t){if(t.length<=1)return t.slice();const e=[];for(let o=0;o<t.length;o++){const r=t[o];for(;e.length>=2;){const i=e[e.length-1],s=e[e.length-2];if((i.x-s.x)*(r.y-s.y)>=(i.y-s.y)*(r.x-s.x))e.pop();else break}e.push(r)}e.pop();const n=[];for(let o=t.length-1;o>=0;o--){const r=t[o];for(;n.length>=2;){const i=n[n.length-1],s=n[n.length-2];if((i.x-s.x)*(r.y-s.y)>=(i.y-s.y)*(r.x-s.x))n.pop();else break}n.push(r)}return n.pop(),e.length===1&&n.length===1&&e[0].x===n[0].x&&e[0].y===n[0].y?e:e.concat(n)}var So=Ee,Do=Oe,Lo=Se,Mo=De,_o=Le;const qo=So,Uo=Do,Ko=Lo,Zo=Mo,ko=h.forwardRef(({className:t,sideOffset:e=4,children:n,...o},r)=>R.jsx(_o,{ref:r,sideOffset:e,className:Je("z-50 overflow-hidden rounded-md bg-ghost px-3 py-1.5 text-sm duration-75 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...o,children:n}));ko.__docgenInfo={description:"",methods:[],displayName:"TooltipContent",props:{sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};export{lo as A,ao as C,co as R,qo as T,Uo as a,Ko as b,ko as c,Zo as d,ge as e,fo as f,kn as g};