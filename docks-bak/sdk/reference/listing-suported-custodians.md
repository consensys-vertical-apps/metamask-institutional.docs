---
sidebar_position: 4
---

# Listing Supported Custodians

## Supported values

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

## At Runtime

Alternatively, you can view a list of all custodians supported by the SDK at runtime:

```py
from metamask_institutional.sdk import CustodianFactory

# Instantiate the factory
factory = CustodianFactory()

supported_custodians = factory.get_supported_custodians()
print(supported_custodians)

# [ "qredo", "qredo-dev", "cactus", ... ]
```
