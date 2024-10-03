---
sidebar_position: 1
---

# Architecture

With the browser extension, users interact with dapps (web pages) which generate transaction parameters for interacting with smart contracts.

The browser extension passes these parameters to the custodian's JSON-RPC API (see [ECA1](/eca1) and [ECA3](/eca3)), where they are brought to the attention of approvers, who may approve or reject them.

The custodian signs and submits the transaction, and watches for it to be confirmed (mined or validated).

The custodian then triggers webhooks in MMI's backend, which informs the browser extension through a websocket stream.

![MMI Technical Architecture](/img/sdk/technical-architecture.png)
