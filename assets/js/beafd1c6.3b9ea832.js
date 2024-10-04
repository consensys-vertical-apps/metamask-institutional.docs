"use strict";(self.webpackChunkdocs_template=self.webpackChunkdocs_template||[]).push([[71],{90747:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=r(85893),n=r(11151),o=r(74866),s=r(85162);const l={sidebar_position:4},i="4. Build classes from ABIs",u={id:"defi-developers/how-to/build-an-adapter/build-classes-from-abis",title:"4. Build classes from ABIs",description:"If your adapter requires implementations that rely on on-chain queries to your protocol's smart contracts, you'll need to import ABIs to create factories for type-safe interaction with those contracts.",source:"@site/docs/defi-developers/how-to/build-an-adapter/build-classes-from-abis.md",sourceDirName:"defi-developers/how-to/build-an-adapter",slug:"/defi-developers/how-to/build-an-adapter/build-classes-from-abis",permalink:"/metamask-institutional.docs/defi-developers/how-to/build-an-adapter/build-classes-from-abis",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Xavier Brochard",lastUpdatedAt:1728038338e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defiDevelopersSidebar",previous:{title:"3. Inspect your new adapter",permalink:"/metamask-institutional.docs/defi-developers/how-to/build-an-adapter/inspect-your-new-adapter"},next:{title:"5. Build metadata files",permalink:"/metamask-institutional.docs/defi-developers/how-to/build-an-adapter/build-metadata"}},c={},d=[];function p(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"4-build-classes-from-abis",children:"4. Build classes from ABIs"})}),"\n",(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(s.Z,{value:"4-text",label:"Text instructions",default:!0,children:[(0,a.jsx)(t.p,{children:"If your adapter requires implementations that rely on on-chain queries to your protocol's smart contracts, you'll need to import ABIs to create factories for type-safe interaction with those contracts."}),(0,a.jsxs)(t.p,{children:["To do this, add a JSON file containing the ABI for each contract to the contracts/abis folder of your protocol (e.g., ",(0,a.jsx)(t.code,{children:"/packages/adapters-library/src/adapters/<protocol-id>/abis"}),"). Afterward, run the following command to generate the contract factories, which you can then import into your adapter."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"npm run build-types\n"})})]}),(0,a.jsx)(s.Z,{value:"4-video",label:"Video instructions",children:(0,a.jsx)("div",{class:"google-drive-video-wrapper",children:(0,a.jsx)("iframe",{src:"https://drive.google.com/file/d/1abo6lKGGTnNMKgvfiDPotFWUvey8UqZI/preview",title:"Build Smart Contract Classes from ABIs",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})})]})]})}function f(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>s});r(67294);var a=r(36905);const n={tabItem:"tabItem_Ymn6"};var o=r(85893);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,s),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>I});var a=r(67294),n=r(36905),o=r(12466),s=r(16550),l=r(20469),i=r(91980),u=r(67392),c=r(20812);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,u.lx)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,d]=h({queryString:r,groupId:n}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),v=(()=>{const e=u??m;return f({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=r(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(85893);function g(e){let{className:t,block:r,selectedValue:a,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),n=l[r].value;n!==a&&(u(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,n.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:o}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:(0,n.Z)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function x(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,n.Z)("tabs-container",v.tabList),children:[(0,y.jsx)(g,{...t,...e}),(0,y.jsx)(w,{...t,...e})]})}function I(e){const t=(0,b.Z)();return(0,y.jsx)(x,{...e,children:d(e.children)},String(t))}},11151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>s});var a=r(67294);const n={},o=a.createContext(n);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);