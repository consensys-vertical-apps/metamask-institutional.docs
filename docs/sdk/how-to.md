---
sidebar_position: 2
---

# How-To Guides

## Setting up the SDK

This guide will help you set up the MetaMask Institutional SDK.

### Installation

```sh
pip install metamask-institutional.sdk
```

### Setup

In a terminal:

```sh
export MMISDK_QREDO_REFRESH_TOKEN=xxxx # You can choose whatever variable name here as long as you adapt it in the script below
```

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

Refer to the [Factory Name for Custodians](/sdk/reference#factory-name-for-custodians) to find the appropriate name.

## Listing supported Custodians

```py
from metamask_institutional.sdk import CustodianFactory

# Instantiate the factory
factory = CustodianFactory()

supported_custodians = factory.get_supported_custodians()
print(supported_custodians)

# [ "qredo", "qredo-dev", "cactus", ... ]
```

## Instantiating Custodians

```py
from metamask_institutional.sdk import CustodianFactory

refresh_token_qredo_dev  = os.environ["REFRESH_TOKENQREDO-DEV"]
refresh_token_cactus_dev = os.environ["MMISDK_TOKEN_QREDO"]

# Use the factory to instantiate one or multiple custodians.
# It figures out itself which API and parameters to use.
factory = CustodianFactory()
custodian2 = factory.create_for("qredo-dev", refresh_token_qredo_dev)
custodian3 = factory.create_for("cactus-dev", refresh_token_cactus_dev)
```

## Creating an Ethereum Transaction

Learn how to create and send an Ethereum transaction using the SDK.

```python
import os

from metamask_institutional.sdk import CustodianFactory

# Instantiate the factory
factory = CustodianFactory()

# Grab your token from the environment, or anywhere else
token = os.environ["MMISDK_TOKEN_QREDO"]

# Create the custodian, using the factory
custodian = factory.create_for("qredo", token)

# Build tx details
tx_params = {
    "from": "0x62468FD916bF27A3b76d3de2e5280e53078e13E1",
    "to": "0x62468FD916bF27A3b76d3de2e5280e53078e13E1",
    "value": "100000000000000000",  # in Wei
    "gas": "21000",
    "gasPrice": "1000",
    # "data": "0xsomething",
    # "type": "2"
    # "maxPriorityFeePerGas": "12321321",
    # "maxFeePerGas": "12321321",
}
qredo_extra_params = {
    "chainID": "3",
}

# Create the tx from details and send it to the custodian
transaction = custodian.create_transaction(tx_params, qredo_extra_params)
print(type(transaction))
# <class 'metamask-institutional.sdk.common.transaction.Transaction'>

print(transaction)
# id='2EzDJkLVIjmH6LZQ2W1T4wPcTtK'
# type='1'
# from_='0x62468FD916bF27A3b76d3de2e5280e53078e13E1'
# to='0x62468FD916bF27A3b76d3de2e5280e53078e13E1'
# value='100000000000000000'
# gas='21000'
# gasPrice='1000'
# maxPriorityFeePerGas=None
# maxFeePerGas=None
# nonce='0'
# data=''
# hash=''
# status=TransactionStatus(finished=False, submitted=False, signed=False, success=False, displayText='Created', reason='Unknown')
```

## Getting an Ethereum Transaction

```python
import os

from metamask_institutional.sdk import CustodianFactory

# Instantiate the factory
factory = CustodianFactory()

# Grab your token from the environment, or anywhere else
token = os.environ["MMISDK_TOKEN_CACTUS"]

# Create the custodian, using the factory
custodian = factory.create_for("cactus", token)

# Get the transaction
transaction = custodian.get_transaction("5CM05NCLMRD888888000800", 5)

print(type(transaction))
# <class 'metamask-institutional.sdk.common.transaction.Transaction'>

print(transaction)
# id='5CM05NCLMRD888888000800'
# type='1'
# from_='0xFA42B2eCf59abD6d6BD4BF07021D870E2FC0eF20'
# to=None
# value=None
# gas='133997'
# gasPrice='2151'
# maxPriorityFeePerGas=None
# maxFeePerGas=None
# nonce=''
# data=None
# hash=None
# status=TransactionStatus(finished=False, submitted=False, signed=False, success=False, displayText='Created', reason='Unknown')
```
