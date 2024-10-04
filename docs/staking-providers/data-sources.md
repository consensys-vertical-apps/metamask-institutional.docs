---
sidebar_position: 6
---

# Data Sources

This page provides detailed information about the data sources we use to calculate and display the various Key Performance Indicators (KPIs) in the [Portfolio Dashboard](https://metamask-institutional.io/). These KPIs, including Uptime and Historical Gross Rewards Rate, are crucial for users to make informed decisions about their staking investments.

## Historical GRR (Gross Rewards Rate)

The Historical GRR (Gross Rewards Rate) is a measure of the return on investment a staker can expect, not accounting for staking provider's fees. It's the annualized total rewards in ETH divided by active stakes of the staking provider, considering the entire list of validators they disclose to Rated. The annualized rewards rate is taken over the last rolling 90 days in order to allow for better comparisons.

The figure is sourced from the Rated API as shown below. Find more details in [their documentation](https://rated.gitbook.io/rated-documentation/methodologies/ethereum-beacon-chain/network-explorer-definitions/landing-page#backward-looking-apr) and in their [API docs](https://api.rated.network/docs#/Operators/get_operator_summary_v0_eth_operators__operator_id__summary_get).

```js
curl --request GET \
  --url 'https://api.rated.network/v0/eth/operators/<OPERATOR_ID>/summary?window=all' \
  --header 'Authorization: Bearer XYZ'
```

Returns

```js
{
    ...,
    "aprPercentage": 1.23
}
```

## Historical NRR (Net Rewards Rate)

The Historical NRR (Net Rewards Rate) is calculated as the Historical GRR less the staking provider's fees. It's computed as follows:

<!--
$$
\text{{HistoricalNRR}} = \text{{HistoricalGRR}} \times \left(1 - \frac{{\text{{feePercent}}}}{100}\right)
$$ -->

## Uptime

Uptime is a measure of the validator's reliability a staker can expect. It's calculated as the number of epochs a validator’s attestation was included on-chain divided by the number of epochs that validator is active, aggregated across all validators associated with the staking provider.

The figure is sourced from the Rated API as shown below. Find more details in [their documentation](https://rated.gitbook.io/rated-documentation/methodologies/ethereum-beacon-chain/network-explorer-definitions/entity-views/top-screener#participation-rate) and in their API docs [here](https://api.rated.network/docs#/Operators/get_operator_summary_v0_eth_operators__operator_id__summary_get) and [here](https://ratedlabs.notion.site/RatedAPI-v0-documentation-4a6fce10fc7f4364a16433cba63f057b).

```js
curl --request GET \
  --url 'https://api.rated.network/v0/eth/operators/<OPERATOR_ID>/summary?window=all' \
  --header 'Authorization: Bearer XYZ'

# returns
{
    ...,
    "avgUptime": 98.7
}
```
