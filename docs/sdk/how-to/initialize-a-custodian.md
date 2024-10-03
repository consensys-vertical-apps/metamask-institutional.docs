---
sidebar_position: 2
---

# Initialize a Custodian

## Provide a Refresh Token

In a terminal:

```sh
export MMISDK_QREDO_REFRESH_TOKEN=xxxx #
```

:::info

You can use any variable name here, as long as you adapt it in the script below.

:::

## Use the Factory

Then in a Python script:

```python
# myscript.py
from metamask_institutional.sdk import CustodianFactory

# Instantiate the factory
factory = CustodianFactory()

# Read the token from environment variables
token = os.environ["MMISDK_QREDO_REFRESH_TOKEN"]

# Initialize the custodian using a token
custodian = factory.create_for("qredo", "YOUR-TOKEN")
```

Refer to [Listing supported Custodians](/sdk/reference/listing-suported-custodians) to find the appropriate name.

## Initialize Multiple Custodians

You can initialize various custodians at the same time if you need:

```py
from metamask_institutional.sdk import CustodianFactory

factory = CustodianFactory()

qredo_token  = os.environ["MMISDK_QREDO_REFRESH_TOKEN"]
cactus_token = os.environ["MMISDK_CACTUS_REFRESH_TOKEN"]

custodian2 = factory.create_for("qredo-dev", qredo_token)
custodian3 = factory.create_for("cactus-dev", cactus_token)
```
