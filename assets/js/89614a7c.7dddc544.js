"use strict";(self.webpackChunkdocs_template=self.webpackChunkdocs_template||[]).push([[172],{5526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(5893),a=n(1151);const o={sidebar_position:2},s="Initialize a Custodian",r={id:"sdk/how-to/initialize-a-custodian",title:"Initialize a Custodian",description:"Provide a Refresh Token",source:"@site/docs/sdk/how-to/initialize-a-custodian.md",sourceDirName:"sdk/how-to",slug:"/sdk/how-to/initialize-a-custodian",permalink:"/metamask-institutional.docs/sdk/how-to/initialize-a-custodian",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Xavier Brochard",lastUpdatedAt:1727944804e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sdkSidebary",previous:{title:"Set up",permalink:"/metamask-institutional.docs/sdk/how-to/set-up"},next:{title:"Create an Ethereum Transaction",permalink:"/metamask-institutional.docs/sdk/how-to/create-an-ethereum-transaction"}},d={},c=[{value:"Provide a Refresh Token",id:"provide-a-refresh-token",level:2},{value:"Use the Factory",id:"use-the-factory",level:2},{value:"Initialize Multiple Custodians",id:"initialize-multiple-custodians",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"initialize-a-custodian",children:"Initialize a Custodian"})}),"\n",(0,i.jsx)(t.h2,{id:"provide-a-refresh-token",children:"Provide a Refresh Token"}),"\n",(0,i.jsx)(t.p,{children:"In a terminal:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"export MMISDK_QREDO_REFRESH_TOKEN=xxxx\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"You can use any variable name here, as long as you adapt it in the script below."})}),"\n",(0,i.jsx)(t.h2,{id:"use-the-factory",children:"Use the Factory"}),"\n",(0,i.jsx)(t.p,{children:"Then in a Python script:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'# myscript.py\nfrom metamask_institutional.sdk import CustodianFactory\n\n# Instantiate the factory\nfactory = CustodianFactory()\n\n# Read the token from environment variables\ntoken = os.environ["MMISDK_QREDO_REFRESH_TOKEN"]\n\n# Initialize the custodian using a token\ncustodian = factory.create_for("qredo", "YOUR-TOKEN")\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Refer to ",(0,i.jsx)(t.a,{href:"/sdk/reference/listing-suported-custodians",children:"Listing supported Custodians"})," to find the appropriate name."]}),"\n",(0,i.jsx)(t.h2,{id:"initialize-multiple-custodians",children:"Initialize Multiple Custodians"}),"\n",(0,i.jsx)(t.p,{children:"You can initialize various custodians at the same time if you need:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-py",children:'from metamask_institutional.sdk import CustodianFactory\n\nfactory = CustodianFactory()\n\nqredo_token  = os.environ["MMISDK_QREDO_REFRESH_TOKEN"]\ncactus_token = os.environ["MMISDK_CACTUS_REFRESH_TOKEN"]\n\ncustodian2 = factory.create_for("qredo-dev", qredo_token)\ncustodian3 = factory.create_for("cactus-dev", cactus_token)\n'})})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var i=n(7294);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);