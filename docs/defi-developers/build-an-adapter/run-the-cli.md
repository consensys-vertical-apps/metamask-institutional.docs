---
sidebar_position: 2
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

# 2. Run the CLI

<Tabs>
  <TabItem value="2-text" label="Text instructions" default>
    ```sh
    npm run new-adapter
    ```

    You'll be asked a series of questions to describe your DeFi product, such as:

    - Is the `balanceOf(address)` function used to query the asset balance in your product?
    - How many underlying tokens does your DeFi asset represent?

    These questions help the library generate the necessary code, reducing the amount of custom code you need to write.

    The first question gives you an overview of all the prompts:

    ![CLI First Question](/img/defi-adapters/cli-first-question.png)

  </TabItem>

  <TabItem value="2-video" label="Video instructions">
    <div class="google-drive-video-wrapper">
        <iframe
        src="https://drive.google.com/file/d/1Pl0yB2d1s-3oKFCXAyRhKx7rK2x43Qtf/preview"
        title="Run the CLI"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        />
    </div>
  </TabItem>
</Tabs>
