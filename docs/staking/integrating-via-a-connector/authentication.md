---
sidebar_position: 3
description: Using your existing authentication scheme.
---

# 3. Configure Authentication

You **Connector** needs to support one of these authentication methods, so that **MMI Staking** can call it. You can totally re-use the **same** authentication scheme as your existing API, it doesn't need to be specific to the **Connector**.

## Using OAuth Client Credentials

If you can support OAuth 2.0, create a **machine-to-machine** connection that represents **MMI Staking**, using the [Client Credentials Flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/client-credentials-flow). Share the pair of `Client ID` + `Client Secret` with the MMI team.

Once done, **MMI Staking** will safely store these credentials, and use them to fetch an access token, and to authenticate requests to your **Connector** with it.

![Authentication flow](/img/staking/authentication-flow.png)

## Using an API Key

**Only if you can't support OAuth 2.0.** Provide the MMI team with an **API Key** attached a user that represents **MMI Staking** in your system.

![Authentication flow](/img/staking/authentication-flow-apikey.png)
