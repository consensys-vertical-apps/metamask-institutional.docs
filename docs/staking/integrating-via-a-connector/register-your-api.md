---
sidebar_position: 4
---

# 4. Keep your Connector healthy

## Receive health checks

To be registered - and keep being registered - in **MMI Staking**, **MMI Staking** makes continuous health checks to your **Connector** by pinging its endpoint `GET /details` every **60 seconds**.

If the health check fails because your **Connector** happens to be unresponsive, **MMI Staking** starts considering your **Connector** as unhealthy. It eventually rotates it out of the list of providers displayed to the user, after **540 more seconds (9 minutes)** have passed. The figure below describes how **MMI Staking** decays your **Connector's** health, based on elapsed time since last successful health check:

![Health decay](/img/staking/health-decay.png)

## Authentication

This flow uses a the same authentication scheme as described in described in [Configure Authentication](authentication).

## Flow

![Receiving health check flow](/img/staking/receiving-healthcheck-flow.png)
