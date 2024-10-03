---
sidebar_position: 1
---

# Build an Adapter

This will guide you through the steps to build an adapter for your DeFi protocol.

## 1. Set up

```sh
git clone https://github.com/consensys-vertical-apps/mmi-defi-adapters.git
cd mmi-defi-adapters
nvm use
npm i
```

Then, in a separate terminal:

```sh
nvm use
npm run dev
```

<div class="google-drive-video-wrapper">
    <iframe
    src="https://drive.google.com/file/d/1bp9Y8uxQDYxgIyMTk5945vLOwCG1JOn3/preview"
    title="Set up"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    />
</div>

## 2. Run the CLI

Start a new adapter by running this command:

```sh
npm run new-adapter
```

You'll be asked a series of questions to describe your DeFi product, such as:

- Is the `balanceOf(address)` function used to query the asset balance in your product?
- How many underlying tokens does your DeFi asset represent?

These questions help the library generate the necessary code, reducing the amount of custom code you need to write.

:::info

The first question gives you an overview of all the prompts:

![CLI First Question](/img/defi-adapters/cli-first-question.png)

:::

To dive deeper in the prompts, watch the video below:

<div class="google-drive-video-wrapper">
    <iframe
    src="https://drive.google.com/file/d/1Pl0yB2d1s-3oKFCXAyRhKx7rK2x43Qtf/preview"
    title="Run the CLI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    />
</div>

## 3. Inspect your new adapter

After completing all the prompts, the CLI will generate the code files for your new adapter in `/packages/adapters-library/src/adapters/<protocol-id>/products/<product-id>/xxxxAdapter.ts`.

The video below walks you through the contents of the generated files and explains any modifications you'll need to make.

<div class="google-drive-video-wrapper">
    <iframe
    src="https://drive.google.com/file/d/1wLTd8utKB3vXHd-Vr2Cv1ElpLYHpPXCX/preview"
    title="Inspect your new adapter"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    />
</div>

## 4. Build Smart Contract Classes from ABIs

If your adapter requires implementations that rely on on-chain queries to your protocol's smart contracts, you'll need to import ABIs to create factories for type-safe interaction with those contracts.

To do this, add a JSON file containing the ABI for each contract to the contracts/abis folder of your protocol (e.g., `/packages/adapters-library/src/adapters/<protocol-id>/abis`). Afterward, run the following command to generate the contract factories, which you can then import into your adapter.

```sh
npm run build-types
```

This video walks you through the process.

<div class="google-drive-video-wrapper">
    <iframe
    src="https://drive.google.com/file/d/1abo6lKGGTnNMKgvfiDPotFWUvey8UqZI/preview"
    title="Build Smart Contract Classes from ABIs"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    />
</div>

## 5. Build your DeFi asset metadata files

Upon inspecting the adapter start by filling details for the following methods

- `getProtocolDetails`
- `buildMetadata`

After implementing `buildMetadata`, create the JSON metadata files that will be used at runtime by running

```sh
npm run build-metadata -- -p <protocol-id>
```

Then check if the following methods need to be implemented or code has already been added based on the CLI questions:

- `getProtocolTokens`
- `getPositions`
- `unwrap`
- `getWithdrawals`
- `getDeposits`
- `getTotalValueLocked`

Finally, if any reward method has been added, the implementation will have to be provided for it to work:

- `getRewardPositions`
- `getRewardWithdrawals`
- `getExtraRewardPositions`
- `getExtraRewardWithdrawals`

<div class="google-drive-video-wrapper">
    <iframe
    src="https://drive.google.com/file/d/1F6AnSkhd9Iu7f62f3VcAJ60iHZfAib1B/preview"
    title="Build your DeFi asset metadata files"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    />
</div>

## 6. Use the dev UI to validate position and profit responses

The command `npm run dev` that you've launched at [step 1](#1-set-up) also runs a dev UI at http://localhost:5173/. This allows you to visually check user positions and view the raw JSON data for debugging. Simply enter an Ethereum address and filter by the protocol you're working on to see the relevant data.

## 7. Create snapshot tests

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

<div class="google-drive-video-wrapper">
    <iframe
    src="https://drive.google.com/file/d/1pVWcssMHTQBH-m_BjVTwpRKamIY6UUK9/preview"
    title="Build your DeFi asset metadata files"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    />
</div>

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

## 8. Pull Request

Once you're satisfied with the work and its results, run the following command to automatically fix any linting errors and receive a report of those requiring manual attention:

```sh
npm run fix
```

Afterward, create a pull request against the upstream repository. Go through the checklist in the template and ensure all applicable checkboxes are checked.

Make sure to allow repository owners permission to make changes to your branch.
