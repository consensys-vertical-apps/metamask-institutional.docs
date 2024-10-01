"use strict";(self.webpackChunkdocs_template=self.webpackChunkdocs_template||[]).push([[699],{8014:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=i(5893),a=i(1151);const s={sidebar_position:5},o="Staking service fees",r={id:"staking/fees",title:"Staking service fees",description:"How staking fees are calculated",source:"@site/docs/staking/fees.md",sourceDirName:"staking",slug:"/staking/fees",permalink:"/metamask-institutional.docs/staking/fees",draft:!1,unlisted:!1,editUrl:"https://github.com/Consensys/docs-template/tree/main/docs/staking/fees.md",tags:[],version:"current",lastUpdatedBy:"Xavier Brochard",lastUpdatedAt:1727775376e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"stakingSidebar",previous:{title:"6. It works when...",permalink:"/metamask-institutional.docs/staking/integrating-via-a-connector/it-works-if"},next:{title:"Data Sources",permalink:"/metamask-institutional.docs/staking/data-sources"}},h={},d=[{value:"How staking fees are calculated",id:"how-staking-fees-are-calculated",level:2},{value:"Fees shown within the MMI interface",id:"fees-shown-within-the-mmi-interface",level:3},{value:"Fee rate applied to a user",id:"fee-rate-applied-to-a-user",level:3},{value:"Estimating fees owed to you",id:"estimating-fees-owed-to-you",level:2},{value:"Fetch an access token",id:"fetch-an-access-token",level:3},{value:"Call GET /me/invoices",id:"call-get-meinvoices",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"staking-service-fees",children:"Staking service fees"})}),"\n",(0,n.jsx)(t.h2,{id:"how-staking-fees-are-calculated",children:"How staking fees are calculated"}),"\n",(0,n.jsxs)(t.p,{children:["You choose and change freely over time the fee rate (%) that gets charged on staking rewards, and you expose it via your ",(0,n.jsx)(t.strong,{children:"Connector"})," through the endpoint ",(0,n.jsx)(t.a,{href:"./integrating-via-a-connector/adapter-openapi",children:"GET /details"}),". For complete commercial details, please refer to the ",(0,n.jsx)(t.strong,{children:"Staking Service Agreement"})," document."]}),"\n",(0,n.jsx)(t.h3,{id:"fees-shown-within-the-mmi-interface",children:"Fees shown within the MMI interface"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"MMI"})," ",(0,n.jsx)(t.a,{href:"/metamask-institutional.docs/staking/integrating-via-a-connector/register-your-api",children:"runs a health check on each Staking Provider's Connector"})," every 60 seconds. The fee rate shown to the user within the ",(0,n.jsx)(t.strong,{children:"MMI"})," interface in column ",(0,n.jsx)(t.code,{children:"SSP Fees"})," is the fee rate you provide via ",(0,n.jsx)(t.a,{href:"./integrating-via-a-connector/adapter-openapi",children:"GET /details"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Portfolio Dashboard",src:i(4638).Z+"",width:"1440",height:"367"})}),"\n",(0,n.jsx)(t.h3,{id:"fee-rate-applied-to-a-user",children:"Fee rate applied to a user"}),"\n",(0,n.jsxs)(t.p,{children:["When a user stakes with a Staking Provider, the ",(0,n.jsx)(t.code,{children:"fee rate"})," shown to them at the point of staking is the fee rate that will be applied ",(0,n.jsx)(t.strong,{children:"throughout the duration of that particular staked position"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"If an SSP changes their fee rate in the get details endpoint, this new fee rate will be shown in the Staking table. This fee rate will also be applied to all new users or staked positions."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"MMI"})," calculates the total Node and Node Operator execution and consensus layer (Gross) rewards over the invoiced period. Penalties are also deducted to arrive at the ",(0,n.jsx)(t.code,{children:"net rewards"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The fee (ETH) is then computed as ",(0,n.jsx)(t.code,{children:"fee eth = net rewards * fee rate"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Stake Modal",src:i(4850).Z+"",width:"565",height:"756"})}),"\n",(0,n.jsx)(t.h2,{id:"estimating-fees-owed-to-you",children:"Estimating fees owed to you"}),"\n",(0,n.jsxs)(t.p,{children:["As a Staking Service Provider partner, you are able to obtain these fees at any time by querying the ",(0,n.jsx)(t.a,{href:"https://staking-middleware.metamask-institutional.io/docs#/Invoices/InvoicesController_getInvoiceMe",children:"MMI Staking API"}),". It uses the end date ETHUSD price to convert the fees in ETH into a USD amount. ",(0,n.jsx)(t.strong,{children:"MMI"})," uses CoinGecko as its pricing provider. Please find more details below."]}),"\n",(0,n.jsx)(t.p,{children:"As noted within our SSP agreement, Consensys shall provide the SSP with its estimate of the SSP Fee at month end and the SSP shall have 5 business days from the date of receipt of the estimate to object. After 5 business days, the estimate is fixed and the Client shall be sent an invoice with this amount."}),"\n",(0,n.jsx)(t.h3,{id:"fetch-an-access-token",children:"Fetch an access token"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"MMI"})," team has provided you with a pair of ",(0,n.jsx)(t.code,{children:"CLIENT_ID"}),"/",(0,n.jsx)(t.code,{children:"CLIENT_SECRET"})," that you can use to fetch an access token:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'curl --request POST \\\n  --url https://auth0.metamask-institutional.io/oauth/token \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n\t"client_id": "<CLIENT_ID>",\n\t"client_secret": "<CLIENT_SECRET>",\n\t"audience": "https://staking-middleware.metamask-institutional.io",\n\t"grant_type": "client_credentials"\n}\'\n'})}),"\n",(0,n.jsx)(t.p,{children:"Returns:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'{\n  "access_token": "eyXXXXX",\n  "scope": "read:invoices:me",\n  "expires_in": 86400,\n  "token_type": "Bearer"\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"call-get-meinvoices",children:"Call GET /me/invoices"}),"\n",(0,n.jsxs)(t.p,{children:["With this access token, call the endpoint ",(0,n.jsx)(t.code,{children:"GET /me/invoices"})," on the ",(0,n.jsx)(t.a,{href:"https://staking-middleware.metamask-institutional.io/docs#/Invoices/InvoicesController_getInvoiceMe",children:"MMI Staking API"}),". Note that this endpoint is the only one your access token grants you access to."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"IMPORTANT:"})," You can get invoices for any month and year. If you fetch an invoice for the ",(0,n.jsx)(t.strong,{children:"current"})," month, the figures are obviously incomplete. In that case, the response has a flag ",(0,n.jsx)(t.code,{children:'"periodComplete": false,'})," and the invoice must not be used for actual invoicing yet."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"curl --request GET \\\n  --url https://staking-middleware.metamask-institutional.io/me/invoices?year=2023&monthNumber=8 \\\n  --header 'Authorization: Bearer <ACCESS_TOKEN>'\n"})}),"\n",(0,n.jsx)(t.p,{children:"Returns:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'{\n  "stakingProviderName": "acme-inc", // The staking provider on which the invoice was generated, if any.\n  "validators": [], // Details of the invoice, validator per validator.\n  "startDate": "2023-03-01T00:00:00.000Z", // Date where the invoiced period starts.\n  "endDate": "2023-03-31T23:59:59.999Z", // Date where the invoiced period ends.\n  "periodComplete": true, // Whether the whole invoicing period is in the past. If `endDate` is in the future, then the invoice is **incomplete and must not be used for payment yet**.\n  "emissionDate": "2023-04-02T15:23:55.401Z", // Date where the invoice was emitted = now.\n  "totalRewardsEth": 24.69, // Total rewards (in ETH) the list of validators accrued from staking over the invoiced period. Includes both Execution Layer and Consensus Layer rewards.\n  "feeWithoutRebatesEth": 1.2345, // Staking provider fee (in ETH), without rebates. Calculated as `sum(rewardsEth * operatorFeePercent)`, summing over validators. Intermediary value, this is not what must be paid.\n  "previousRebateEth": 0.6789, // Amount of pending rebates (ETH) stored in previous invoice.\n  "availabilityRebateEth": 0.4321, // In the event Node Operator (Partner) does not meet the applicable Availability Commitment, Client is eligible to receive a rebate (the \u201cAvailability Rebate\u201d), except that the Availability Rebate does not apply to any Validator to which the Integrity Rebate already applies. The Availability Rebate is the difference between (i) the Staking Reward actually earned by the Validators that are due the Availability Rebate and (ii) the Staking Reward that such Validators would have earned if the Availability Commitment (which corresponds, for the purposes of this Section, to Monthly Uptime Percentage equal to (but not greater than) 99.5%) was met at the relevant time.\n  "integrityRebateEth": 0, // The balance of the Validator that has undergone the Slashing Event will be captured immediately prior to the Slashing Event, and again at the point in time the Validator enters the withdrawable state; The Integrity Rebate will be the difference between the two aforementioned balances.\n  "remainingRebateEth": 0, // Rest of rebates (`availabilityRebateEth`, `integrityRebateEth`, `previousRebateEth`), after trying to deduct as much as possible from `feeWithoutRebatesEth`. Is stored to be carried over in next invoice.\n  "finalFeeEth": 0.1235, // Final staking provider fee (in ETH) for the invoiced period. Computes as `feeWithoutRebatesEth - availabilityRebateEth - integrityRebateEth - previousRebateEth + remainingRebateEth`.\n  "ethPriceAtPeriodEndDate": 1816.12, // Price of ETH on CoinGekko at the end of the period end date. Is the value used for converting the invoice amount from ETH to Dollar.\n  "finalFeeDollar": 224.29 // Final staking provider fee (in Dollar) for the invoiced period. See `finalFeeEth`.\n}\n'})})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4638:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/portfolio-dashboard-fcea9c2b9d657874dbb9a03d3dc86b52.svg"},4850:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/stake-modal-63be973cd8f1b7b99363924153192631.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>o});var n=i(7294);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);