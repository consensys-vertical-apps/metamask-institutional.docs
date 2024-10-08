---
sidebar_position: 8
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

# 8. Create snapshot tests

### Overview

<Tabs>
  <TabItem value="7-text" label="Text instructions" default>
    The final step is to create tests to validate the adapter's results and ensure future changes don't cause issues. Within your protocol's folder, you'll find a tests directory and a file `/packages/adapters-library/src/adapters/<protocol-id>/tests/testCases.ts` that exports an array of test cases.

    For each test case, you must specify the `chain` and `method`. Optionally, you can include a `key` to identify the test case, but this is only necessary if you're writing multiple tests for the same `method` and `chain`. For more details, refer to the following sub-sections.

    After completing your `testCases.ts` file, run the following command to generate the snapshots for those tests.

    ```sh
    npm run build-snapshots -- -p <protocol-id>
    ```

    You can then verify the validity of those snapshots by running:

    ```sh
    npm run test:integration --protocol=protocol-id
    ```

  </TabItem>

  <TabItem value="7-video" label="Video instructions">
    <div class="google-drive-video-wrapper">
        <iframe
        src="https://drive.google.com/file/d/1pVWcssMHTQBH-m_BjVTwpRKamIY6UUK9/preview"
        title="Build your DeFi asset metadata files"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        />
    </div>
  </TabItem>
</Tabs>

### Positions

To get a snapshot of the positions, you need to set `method: 'positions'` and provide an input field with the `userAddress`. Optionally, you can specify a `blockNumber`, but this is not required, and the latest will be used and recorded if it's left empty. This will run for all the products of this protocol.

For instance:

```js
{
  chainId: Chain.Ethereum,
  method: "positions",
  input: {
    userAddress: "0x161D61e30284A33Ab1ed227beDcac6014877B3DE",
  },
}
```

### Profits

To get a snapshot of the profits, you need to set `method: 'profits'` and provide an input field with the userAddress and, optionally, timePeriod, which will default to one day if left empty. Optionally, you can specify a `blockNumber`, but this is not required, and the latest will be used and recorded if it's left empty. This will run for all the products of this protocol.

For instance:

```js
{
  chainId: Chain.Ethereum,
  method: "deposits",
  input: {
    fromBlock: 198188138,
    toBlock: 200597430,
    userAddress: "0xbc0a54c02a1e80c8e25e8173a8a80baf116205b5",
    protocolTokenAddress: "0x3bAa857646e5A0B475E75a1dbD38E7f0a6742058",
    productId: "supply",
  },
}
```

### Deposits/Withdrawals/Repays/Borrows

To get a snapshot of any of these methods, set `method: 'deposits' | 'withdrawals' | 'repays' | 'borrows'`. The input field of these methods requires additional parameters to work, including `userAddress`, `fromBlock`, `toBlock`, `protocolTokenAddress`, and `productId`.

For instance:

```js
{
  chainId: Chain.Ethereum,
  method: "deposits",
  input: {
    fromBlock: 198188138,
    toBlock: 200597430,
    userAddress: "0xbc0a54c02a1e80c8e25e8173a8a80baf116205b5",
    protocolTokenAddress: "0x3bAa857646e5A0B475E75a1dbD38E7f0a6742058",
    productId: "supply",
  },
}
```

### TVL

To get a snapshot of the TVL implementation, set `method: 'tvl' and specify the protocol tokens with `filterProtocolToken: ['protocol-token-address1', 'protocol-token-address2']`. Optionally, you can specify a `blockNumber`, but this is not required, and the latest will be used and recorded if it's left empty. This will run for all the products of this protocol.

For instance:

```js
{
  chainId: Chain.Ethereum,
  method: "tvl",
  filterProtocolTokens: ["0x3bAa857646e5A0B475E75a1dbD38E7f0a6742058"],
}
```
