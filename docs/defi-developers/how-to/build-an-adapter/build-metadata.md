---
sidebar_position: 5
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

# 5. Build metadata files

<Tabs>
  <TabItem value="5-text" label="Text instructions" default>
    Upon inspecting the adapter start by filling details for the following methods

    - `getProtocolDetails`
    - `buildMetadata`

    After implementing `buildMetadata`, create the JSON metadata files that will be used at runtime by running:

    ```sh
    npm run build-metadata -- -p <protocol-id>
    ```

  </TabItem>

  <TabItem value="5-video" label="Video instructions">
    <div class="google-drive-video-wrapper">
        <iframe
        src="https://drive.google.com/file/d/1F6AnSkhd9Iu7f62f3VcAJ60iHZfAib1B/preview"
        title="Build your DeFi asset metadata files"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        />
    </div>
  </TabItem>
</Tabs>
