---
sidebar_position: 4
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

# 4. Build classes from ABIs

<Tabs>
  <TabItem value="4-text" label="Text instructions" default>
    If your adapter requires implementations that rely on on-chain queries to your protocol's smart contracts, you'll need to import ABIs to create factories for type-safe interaction with those contracts.

    To do this, add a JSON file containing the ABI for each contract to the contracts/abis folder of your protocol (e.g., `/packages/adapters-library/src/adapters/<protocol-id>/abis`). Afterward, run the following command to generate the contract factories, which you can then import into your adapter.

    ```sh
    npm run build-types
    ```

  </TabItem>

  <TabItem value="4-video" label="Video instructions">
    <div class="google-drive-video-wrapper">
        <iframe
        src="https://drive.google.com/file/d/1abo6lKGGTnNMKgvfiDPotFWUvey8UqZI/preview"
        title="Build Smart Contract Classes from ABIs"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        />
    </div>
  </TabItem>
</Tabs>
