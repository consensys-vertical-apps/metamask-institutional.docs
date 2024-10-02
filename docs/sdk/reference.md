---
sidebar_position: 3
---

# Reference

## Architecture

With the browser extension, users interact with dapps (web pages) which generate transaction parameters for interacting with smart contracts.

The browser extension passes these parameters to the custodian's JSON-RPC API (see [ECA1](/eca1) and [ECA3](/eca3)), where they are brought to the attention of approvers, who may approve or reject them.

The custodian signs and submits the transaction, and watches for it to be confirmed (mined or validated).

The custodian then triggers webhooks in MMI's backend, which informs the browser extension through a websocket stream.

![MMI Technical Architecture](/img/sdk/technical-architecture.png)

## Factory Name for Custodians

Use the appropriate factory name from the table below when initializing a custodian in your code:

```python
custodian = factory.create_for("<name>", token)
```

| Custodian   | Supported | As of version | Factory name param |
| ----------- | --------- | ------------- | ------------------ |
| Bitgo       | ✅        | `0.3.0`       | `"bitgo"`          |
| Cactus      | ✅        | `0.2.0`       | `"cactus"`         |
| FPG         | ✅        | `0.4.0`       | `"fpg-prod"`       |
| Gnosis Safe | ✅        | `0.4.0`       | `"gnosis-safe"`    |
| Qredo       | ✅        | `0.2.0`       | `"qredo"`          |
| Saturn      | ✅        | `0.4.0`       | `"saturn"`         |

Refer to the table to ensure you're using the correct factory name when creating different custodians.
