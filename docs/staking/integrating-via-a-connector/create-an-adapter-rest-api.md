---
sidebar_position: 1
description: Build and host a REST web service that connects your system with MetaMask Institutional.
---

# 1. What is a Connector?

**MMI Staking** is a web service that "talks" with staking providers through a specific and common REST API, defined by MMI.

In order for it to talk with your existing API, you need to implement and host a **Connector**: a REST web service that sits between **MMI Staking** and **your existing API**, and that stands as an integration layer.

## Initiating a stake or batch stake

The user initiates a stake or a batch stake from the **MetaMask Institutional Portfolio Dashboard**. This makes a `POST /stakes` to **MMI Staking**, it forwards the request to your **Connector**, that then calls your existing API, in order to build and return the deposit payload (the transaction data).

![Initiating a stake](/img/staking/initiating-a-stake.png)

Once the dashboard receives the deposit payload, it opens it in the **MetaMask Institutional extension** via a JSON-RPC call, for the user to confirm and send to its custodian. More details about this flow [here](https://docs.metamask-institutional.io/custodian-integration/integration-docs/architecture/).

## Supported EVM networks

- In **production**, your **Connector** must support **Ethereum Mainnet** (ChainID **1**) only.
- In **development**, your **Connector** must support **Holesky** (ChainID **17000**) only.

## Implement this OpenAPI specification

To be compatible with **MMI Staking**, your **Connector** must support the above features, and expose them through this [OpenAPI Specification](./staking-connector).
