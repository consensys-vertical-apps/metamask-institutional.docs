"use strict";(self.webpackChunkdocs_template=self.webpackChunkdocs_template||[]).push([[759],{19343:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=a(85893),n=a(11151),l=a(74866),s=a(85162);const i={sidebar_position:5},o="5. Build metadata files",u={id:"defi-developers/how-to/build-an-adapter/build-metadata",title:"5. Build metadata files",description:"Upon inspecting the adapter start by filling details for the following methods",source:"@site/docs/defi-developers/how-to/build-an-adapter/build-metadata.md",sourceDirName:"defi-developers/how-to/build-an-adapter",slug:"/defi-developers/how-to/build-an-adapter/build-metadata",permalink:"/metamask-institutional.docs/defi-developers/how-to/build-an-adapter/build-metadata",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Xavier Brochard",lastUpdatedAt:1728038338e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"defiDevelopersSidebar",previous:{title:"4. Build classes from ABIs",permalink:"/metamask-institutional.docs/defi-developers/how-to/build-an-adapter/build-classes-from-abis"},next:{title:"6. Fill code gaps",permalink:"/metamask-institutional.docs/defi-developers/how-to/build-an-adapter/fill-gaps"}},d={},c=[];function p(e){const t={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"5-build-metadata-files",children:"5. Build metadata files"})}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)(s.Z,{value:"5-text",label:"Text instructions",default:!0,children:[(0,r.jsx)(t.p,{children:"Upon inspecting the adapter start by filling details for the following methods"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"getProtocolDetails"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"buildMetadata"})}),"\n"]}),(0,r.jsxs)(t.p,{children:["After implementing ",(0,r.jsx)(t.code,{children:"buildMetadata"}),", create the JSON metadata files that will be used at runtime by running:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"npm run build-metadata -- -p <protocol-id>\n"})})]}),(0,r.jsx)(s.Z,{value:"5-video",label:"Video instructions",children:(0,r.jsx)("div",{class:"google-drive-video-wrapper",children:(0,r.jsx)("iframe",{src:"https://drive.google.com/file/d/1F6AnSkhd9Iu7f62f3VcAJ60iHZfAib1B/preview",title:"Build your DeFi asset metadata files",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})})]})]})}function f(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>s});a(67294);var r=a(36905);const n={tabItem:"tabItem_Ymn6"};var l=a(85893);function s(e){let{children:t,hidden:a,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(n.tabItem,s),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>j});var r=a(67294),n=a(36905),l=a(12466),s=a(16550),i=a(20469),o=a(91980),u=a(67392),d=a(20812);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,u.lx)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,c]=h({queryString:a,groupId:n}),[m,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),v=(()=>{const e=u??m;return f({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),b(e)}),[c,b,l]),tabValues:l}}var b=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(85893);function x(e){let{className:t,block:a,selectedValue:r,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=o.indexOf(t),n=i[a].value;n!==r&&(u(t),s(n))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;t=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;t=o[a]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:c,onClick:d,...l,className:(0,n.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:l}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,n.Z)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function y(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,n.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(w,{...t,...e})]})}function j(e){const t=(0,b.Z)();return(0,g.jsx)(y,{...e,children:c(e.children)},String(t))}},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>s});var r=a(67294);const n={},l=r.createContext(n);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);