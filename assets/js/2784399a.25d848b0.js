"use strict";(self.webpackChunkdocs_template=self.webpackChunkdocs_template||[]).push([[159],{386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(5893),o=n(1151);const s={sidebar_position:4},r="Get an Ethereum Transaction",i={id:"sdk/how-to/get-an-ethereum-transaction",title:"Get an Ethereum Transaction",description:"The code below shows how to retrieve an existing Ethereum transaction from your Custodian:",source:"@site/docs/sdk/how-to/get-an-ethereum-transaction.md",sourceDirName:"sdk/how-to",slug:"/sdk/how-to/get-an-ethereum-transaction",permalink:"/metamask-institutional.docs/sdk/how-to/get-an-ethereum-transaction",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Xavier Brochard",lastUpdatedAt:1727944804e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sdkSidebary",previous:{title:"Create an Ethereum Transaction",permalink:"/metamask-institutional.docs/sdk/how-to/create-an-ethereum-transaction"},next:{title:"Reference",permalink:"/metamask-institutional.docs/category/reference"}},c={},d=[];function u(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"get-an-ethereum-transaction",children:"Get an Ethereum Transaction"})}),"\n",(0,a.jsx)(t.p,{children:"The code below shows how to retrieve an existing Ethereum transaction from your Custodian:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"import os\n\nfrom metamask_institutional.sdk import CustodianFactory\n\n# Instantiate the factory\nfactory = CustodianFactory()\n\n# Grab your token from the environment, or anywhere else\ntoken = os.environ[\"MMISDK_TOKEN_CACTUS\"]\n\n# Create the custodian, using the factory\ncustodian = factory.create_for(\"cactus\", token)\n\n# Get the transaction\ntransaction = custodian.get_transaction(\"5CM05NCLMRD888888000800\", 5)\n\nprint(type(transaction))\n# <class 'metamask-institutional.sdk.common.transaction.Transaction'>\n\nprint(transaction)\n# id='5CM05NCLMRD888888000800'\n# type='1'\n# from_='0xFA42B2eCf59abD6d6BD4BF07021D870E2FC0eF20'\n# to=None\n# value=None\n# gas='133997'\n# gasPrice='2151'\n# maxPriorityFeePerGas=None\n# maxFeePerGas=None\n# nonce=''\n# data=None\n# hash=None\n# status=TransactionStatus(finished=False, submitted=False, signed=False, success=False, displayText='Created', reason='Unknown')\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var a=n(7294);const o={},s=a.createContext(o);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);