import{o as j,m as F,l as H,e as M,c as V,i as N,n as Y}from"./use-translate.c56bc05e.js";import{n as b,t as I,u as G,m as w,w as U}from"./with-install.2d06a5b3.js";import{M as L,J as $,y as T,A as q,x as S,D as J,q as Z,N as Q,L as W,I as X,e as f,T as ee,R as oe,F as ne,j as te,v as ae,B as se}from"./vue-libs.a3cd7f61.js";import{H as ce}from"./constant.80c6de18.js";import{c as re}from"./interceptor.7caa5e9a.js";import{u as le}from"./use-expose.2dad0d8e.js";import{u as ie}from"./use-touch.196fce0c.js";import{u as ue}from"./use-lazy-render.4c81c593.js";import{P as de}from"./on-popup-reopen.a53db14c.js";import{I as fe}from"./index.e7e14384.js";import{O as ve}from"./index.a0b9e7c8.js";const E={show:Boolean,zIndex:b,overlay:I,duration:b,teleport:[String,Object],lockScroll:I,lazyRender:I,beforeClose:Function,overlayStyle:Object,overlayClass:G,transitionAppear:Boolean,closeOnClickOverlay:I},Le=Object.keys(E);let y=0;const A="van-overflow-hidden";function me(e,n){const s=ie(),c=i=>{s.move(i);const P=s.deltaY.value>0?"10":"01",p=F(i.target,e.value),{scrollHeight:u,offsetHeight:h,scrollTop:m}=p;let d="11";m===0?d=h>=u?"00":"01":m+h>=u&&(d="10"),d!=="11"&&s.isVertical()&&!(parseInt(d,2)&parseInt(P,2))&&H(i,!0)},t=()=>{document.addEventListener("touchstart",s.start),document.addEventListener("touchmove",c,{passive:!1}),y||document.body.classList.add(A),y++},r=()=>{y&&(document.removeEventListener("touchstart",s.start),document.removeEventListener("touchmove",c),y--,y||document.body.classList.remove(A))},v=()=>n()&&t(),l=()=>n()&&r();j(v),L(l),$(l),T(n,i=>{i?t():r()})}const ye=M({},E,{round:Boolean,position:w("center"),closeIcon:w("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:w("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[pe,g]=V("popup");let B=2e3;const he=q({name:pe,inheritAttrs:!1,props:ye,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:n,attrs:s,slots:c}){let t,r;const v=S(),l=S(),i=ue(()=>e.show||!e.lazyRender),P=J(()=>{const o={zIndex:v.value};if(N(e.duration)){const a=e.position==="center"?"animationDuration":"transitionDuration";o[a]=`${e.duration}s`}return o}),p=()=>{t||(e.zIndex!==void 0&&(B=+e.zIndex),t=!0,v.value=++B,n("open"))},u=()=>{t&&re(e.beforeClose,{done(){t=!1,n("close"),n("update:show",!1)}})},h=o=>{n("clickOverlay",o),e.closeOnClickOverlay&&u()},m=()=>{if(e.overlay)return f(ve,{show:e.show,class:e.overlayClass,zIndex:v.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0,onClick:h},{default:c["overlay-content"]})},d=o=>{n("clickCloseIcon",o),u()},z=()=>{if(e.closeable)return f(fe,{role:"button",tabindex:0,name:e.closeIcon,class:[g("close-icon",e.closeIconPosition),ce],classPrefix:e.iconPrefix,onClick:d},null)},D=()=>n("opened"),R=()=>n("closed"),K=o=>n("keydown",o),_=i(()=>{var x;const{round:o,position:a,safeAreaInsetTop:O,safeAreaInsetBottom:k}=e;return te(f("div",se({ref:l,style:P.value,role:"dialog",tabindex:0,class:[g({round:o,[a]:a}),{"van-safe-area-top":O,"van-safe-area-bottom":k}],onKeydown:K},s),[(x=c.default)==null?void 0:x.call(c),z()]),[[ae,e.show]])}),C=()=>{const{position:o,transition:a,transitionAppear:O}=e,k=o==="center"?"van-fade":`van-popup-slide-${o}`;return f(ee,{name:a||k,appear:O,onAfterEnter:D,onAfterLeave:R},{default:_})};return T(()=>e.show,o=>{o&&!t&&(p(),s.tabindex===0&&Z(()=>{var a;(a=l.value)==null||a.focus()})),!o&&t&&(t=!1,n("close"))}),le({popupRef:l}),me(l,()=>e.show&&e.lockScroll),Y("popstate",()=>{e.closeOnPopstate&&(u(),r=!1)}),Q(()=>{e.show&&p()}),W(()=>{r&&(n("update:show",!0),r=!1)}),L(()=>{e.show&&e.teleport&&(u(),r=!0)}),X(de,()=>e.show),()=>e.teleport?f(oe,{to:e.teleport},{default:()=>[m(),C()]}):f(ne,null,[m(),C()])}}),Ie=U(he),Te=Ie;export{Ie as P,Te as V,Le as a,E as p};
