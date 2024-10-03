"use strict";(self.webpackChunkdocs_template=self.webpackChunkdocs_template||[]).push([[238],{8743:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var n=r(5893),s=r(1151);const a={sidebar_position:1},i="Architecture",c={id:"sdk/reference/architecture",title:"Architecture",description:"With the browser extension, users interact with dapps (web pages) which generate transaction parameters for interacting with smart contracts.",source:"@site/docs/sdk/reference/architecture.md",sourceDirName:"sdk/reference",slug:"/sdk/reference/architecture",permalink:"/metamask-institutional.docs/sdk/reference/architecture",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Xavier Brochard",lastUpdatedAt:1727944804e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sdkSidebary",previous:{title:"Reference",permalink:"/metamask-institutional.docs/category/reference"},next:{title:"Listing Supported Custodians",permalink:"/metamask-institutional.docs/sdk/reference/listing-suported-custodians"}},o={},h=[];function d(e){const t={a:"a",h1:"h1",header:"header",img:"img",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"architecture",children:"Architecture"})}),"\n",(0,n.jsx)(t.p,{children:"With the browser extension, users interact with dapps (web pages) which generate transaction parameters for interacting with smart contracts."}),"\n",(0,n.jsxs)(t.p,{children:["The browser extension passes these parameters to the custodian's JSON-RPC API (see ",(0,n.jsx)(t.a,{href:"/eca1",children:"ECA1"})," and ",(0,n.jsx)(t.a,{href:"/eca3",children:"ECA3"}),"), where they are brought to the attention of approvers, who may approve or reject them."]}),"\n",(0,n.jsx)(t.p,{children:"The custodian signs and submits the transaction, and watches for it to be confirmed (mined or validated)."}),"\n",(0,n.jsx)(t.p,{children:"The custodian then triggers webhooks in MMI's backend, which informs the browser extension through a websocket stream."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MMI Technical Architecture",src:r(74).Z+"",width:"775",height:"1452"})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},74:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/technical-architecture-b0a72744a9728206907660506aa0dca9.png"},1151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>i});var n=r(7294);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);