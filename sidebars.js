// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  stakingSidebar: [
    {
      type: "autogenerated",
      dirName: "staking",
    },
  ],
  // apiSidebar: [
  //   {
  //     type: "category",
  //     label: "Pet Store",
  //     link: {
  //       type: "generated-index",
  //       title: "Test API",
  //       slug: "/category/test-api",
  //     },
  //     // @ts-ignore
  //     // eslint-disable-next-line global-require
  //     items: require("./docs/test-api/sidebar.js"),
  //     // items: [
  //     //   {
  //     //     type: "autogenerated",
  //     //     dirName: "test-api", // '.' means the current docs folder
  //     //   },
  //     // ],
  //   },
  // ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;