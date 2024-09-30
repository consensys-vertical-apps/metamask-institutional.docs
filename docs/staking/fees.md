---
sidebar_position: 5
---

# Staking service fees

## How staking fees are calculated

You choose and change freely over time the fee rate (%) that gets charged on staking rewards, and you expose it via your **Connector** through the endpoint [GET /details](./integrating-via-a-connector/adapter-openapi). For complete commercial details, please refer to the **Staking Service Agreement** document.

### Fees shown within the MMI interface

**MMI** [runs a healthcheck on each Staking Provider's Connector](./integrating-via-a-connector/register-your-api.md) every 60 seconds. The fee rate shown to the user within the **MMI** interface in column `SSP Fees` is the fee rate you provide via [GET /details](./integrating-via-a-connector/adapter-openapi).

![Portfolio Dashboard](/img/staking/portfolio-dashboard.svg)

### Fee rate applied to a user

When a user stakes with a Staking Provider, the `fee rate` shown to them at the point of staking is the fee rate that will be applied **throughout the duration of that particular staked position**.

If an SSP changes their fee rate in the get details endpoint, this new fee rate will be shown in the Staking table. This fee rate will also be applied to all new users or staked positions.

**MMI** calculates the total Node and Node Operator execution and consensus layer (Gross) rewards over the invoiced period. Penalties are also deducted to arrive at the `net rewards`.

The fee (ETH) is then computed as `fee eth = net rewards * fee rate`.

![Stake Modal](/img/staking/stake-modal.png)

## Estimating fees owed to you

As a Staking Service Provider partner, you are able to obtain these fees at any time by querying the [MMI Staking API](https://staking-middleware.metamask-institutional.io/docs#/Invoices/InvoicesController_getInvoiceMe). It uses the end date ETHUSD price to convert the fees in ETH into a USD amount. **MMI** uses CoinGecko as its pricing provider. Please find more details below.

As noted within our SSP agreement, Consensys shall provide the SSP with its estimate of the SSP Fee at month end and the SSP shall have 5 business days from the date of receipt of the estimate to object. After 5 business days, the estimate is fixed and the Client shall be sent an invoice with this amount.

### Fetch an access token

The **MMI** team has provided you with a pair of `CLIENT_ID`/`CLIENT_SECRET` that you can use to fetch an access token:

```js
curl --request POST \
  --url https://auth0.metamask-institutional.io/oauth/token \
  --header 'Content-Type: application/json' \
  --data '{
	"client_id": "<CLIENT_ID>",
	"client_secret": "<CLIENT_SECRET>",
	"audience": "https://staking-middleware.metamask-institutional.io",
	"grant_type": "client_credentials"
}'
```

Returns:

```js
{
  "access_token": "eyXXXXX",
  "scope": "read:invoices:me",
  "expires_in": 86400,
  "token_type": "Bearer"
}
```

### Call GET /me/invoices

With this access token, call the endpoint `GET /me/invoices` on the [MMI Staking API](https://staking-middleware.metamask-institutional.io/docs#/Invoices/InvoicesController_getInvoiceMe). Note that this endpoint is the only one your access token grants you access to.

**IMPORTANT:** You can get invoices for any month and year. If you fetch an invoice for the **current** month, the figures are obviously incomplete. In that case, the response has a flag `"periodComplete": false,` and the invoice must not be used for actual invoicing yet.

```js
curl --request GET \
  --url https://staking-middleware.metamask-institutional.io/me/invoices?year=2023&monthNumber=8 \
  --header 'Authorization: Bearer <ACCESS_TOKEN>'
```

Returns:

```js
{
  "stakingProviderName": "acme-inc", // The staking provider on which the invoice was generated, if any.
  "validators": [], // Details of the invoice, validator per validator.
  "startDate": "2023-03-01T00:00:00.000Z", // Date where the invoiced period starts.
  "endDate": "2023-03-31T23:59:59.999Z", // Date where the invoiced period ends.
  "periodComplete": true, // Whether the whole invoicing period is in the past. If `endDate` is in the future, then the invoice is **incomplete and must not be used for payment yet**.
  "emissionDate": "2023-04-02T15:23:55.401Z", // Date where the invoice was emitted = now.
  "totalRewardsEth": 24.69, // Total rewards (in ETH) the list of validators accrued from staking over the invoiced period. Includes both Execution Layer and Consensus Layer rewards.
  "feeWithoutRebatesEth": 1.2345, // Staking provider fee (in ETH), without rebates. Calculated as `sum(rewardsEth * operatorFeePercent)`, summing over validators. Intermediary value, this is not what must be paid.
  "previousRebateEth": 0.6789, // Amount of pending rebates (ETH) stored in previous invoice.
  "availabilityRebateEth": 0.4321, // In the event Node Operator (Partner) does not meet the applicable Availability Commitment, Client is eligible to receive a rebate (the “Availability Rebate”), except that the Availability Rebate does not apply to any Validator to which the Integrity Rebate already applies. The Availability Rebate is the difference between (i) the Staking Reward actually earned by the Validators that are due the Availability Rebate and (ii) the Staking Reward that such Validators would have earned if the Availability Commitment (which corresponds, for the purposes of this Section, to Monthly Uptime Percentage equal to (but not greater than) 99.5%) was met at the relevant time.
  "integrityRebateEth": 0, // The balance of the Validator that has undergone the Slashing Event will be captured immediately prior to the Slashing Event, and again at the point in time the Validator enters the withdrawable state; The Integrity Rebate will be the difference between the two aforementioned balances.
  "remainingRebateEth": 0, // Rest of rebates (`availabilityRebateEth`, `integrityRebateEth`, `previousRebateEth`), after trying to deduct as much as possible from `feeWithoutRebatesEth`. Is stored to be carried over in next invoice.
  "finalFeeEth": 0.1235, // Final staking provider fee (in ETH) for the invoiced period. Computes as `feeWithoutRebatesEth - availabilityRebateEth - integrityRebateEth - previousRebateEth + remainingRebateEth`.
  "ethPriceAtPeriodEndDate": 1816.12, // Price of ETH on CoinGekko at the end of the period end date. Is the value used for converting the invoice amount from ETH to Dollar.
  "finalFeeDollar": 224.29 // Final staking provider fee (in Dollar) for the invoiced period. See `finalFeeEth`.
}
```
