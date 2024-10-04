const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/**
 * @see https://github.com/rohit-gohri/redocusaurus
 */
const redocusaurus = [
  "redocusaurus",
  {
    debug: Boolean(process.env.DEBUG || process.env.CI),
    specs: [
      {
        id: "api-gateway",
        spec: "./node_modules/@codefi/mmi-openapi-arcanum/dist/apis/api-gateway/openapi.yaml",
      },
      {
        id: "staking-connector",
        spec: "./node_modules/@codefi/mmi-openapi-arcanum/dist/apis/staking-connector/openapi.yaml",
      },
    ],
    theme: {
      options: {
        pathInMiddlePanel: true,
        sortEnumValuesAlphabetically: true,
        sortOperationsAlphabetically: true,
        sortPropsAlphabetically: true,
        sortTagsAlphabetically: true,
        disableSearch: true,
      },
      /**
       * Highlight color for docs
       */
      primaryColor: "#2C56DD",
    },
  },
];

const isDev = process.env.NODE_ENV === "development";
const baseUrl = isDev
  ? "/metamask-institutional.docs/"
  : "/metamask-institutional.docs/";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MetaMask Institutional documentation",
  tagline: "The most trusted DeFi wallet and Web3 gateway for organizations.",
  url: "https://docs.metamask-institutional.io",
  baseUrl,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Consensys", // Usually your GitHub org/user name.
  projectName: "metamask-institutional.docs", // Usually your repo name.
  deploymentBranch: "gh-pages", // Github Pages deploying branch
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: undefined, // Remove the "edit this page" links.
          routeBasePath: "/", // Serve the docs at the site's root
          path: "./docs",
          includeCurrentVersion: true,
          // lastVersion: "23.x",
          // versions: {
          //   //defaults to the ./docs folder
          //   // using 'development' instead of 'next' as path
          //   current: {
          //     label: "development",
          //     path: "development",
          //   },
          //   //the last stable release in the versioned_docs/version-stable
          //   "23.x": {
          //     label: "stable (23.x)",
          //   },
          //   "22.x": {
          //     label: "22.x",
          //   },
          // },
          // @ts-ignore
          // eslint-disable-next-line global-require
          include: ["**/*.md", "**/*.mdx"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
    redocusaurus,
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: "NSRFPEJ4NC",

      //   // Public API key: it is safe to commit it
      //   apiKey: "cea41b975ad6c9a01408dfda6e0061d3",

      //   indexName: "docs-template", // Ping #documentation on Slack for your index name

      //   // Optional: see doc section below
      //   contextualSearch: true,

      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   externalUrlRegex: "external\\.com|domain\\.com",

      //   // Optional: Algolia search parameters
      //   searchParameters: {},

      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   searchPagePath: "search",

      //   // ... other Algolia params
      // },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "",
        logo: {
          alt: "MetaMask Institutional logo",
          src: "img/logo_dark.svg",
          srcDark: "img/logo_dark.svg",
        },
        items: [
          {
            type: "doc",
            docId: "custodian/index",
            position: "left",
            label: "Custodian integrations",
          },
          //   {
          //     type: "doc",
          //     docId: "eca1/index",
          //     position: "left",
          //     label: "ECA1",
          //   },
          //   {
          //     type: "doc",
          //     docId: "eca3/index",
          //     position: "left",
          //     label: "ECA3",
          //   },
          {
            type: "docSidebar",
            sidebarId: "stakingSidebar",
            docId: "staking/introduction",
            position: "left",
            label: "Staking integrations",
          },
          {
            type: "doc",
            docId: "api/index",
            position: "left",
            label: "MMI API suite",
          },
          //   {
          //     type: "doc",
          //     docId: "sdk/index",
          //     position: "left",
          //     label: "SDK",
          //   },
          {
            type: "doc",
            docId: "defi-adapters/index",
            position: "left",
            label: "DeFi adapter developers",
          },
          {
            href: "https://github.com/consensys-vertical-apps/metamask-institutional",
            className: "header-github-link",
            position: "right",
          },
          {
            href: "https://twitter.com/MMInstitutional",
            className: "header-twitter-link",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "MetaMask Institutional",
            items: [
              {
                label: "Website",
                href: "https://metamask.io/institutions/",
              },
              {
                label: "Portfolio Dashboard",
                href: "https://metamask-institutional.io/",
              },
              {
                label: "Documentation",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/MMInstitutional",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/metamask-institutional/posts",
              },
            ],
          },
          {
            title: "Contact us",
            items: [
              {
                label: "Contact support",
                href: "https://support.metamask-institutional.io/",
              },
              {
                label: "Provide feedback",
                href: "https://consensys-software.typeform.com/to/afkfqzzZ?typeform-source=metamask-institutional.io",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Privacy policy",
                href: "https://consensys.net/privacy-policy/",
              },
              {
                label: "Terms and Conditions",
                href: "https://metamask-institutional.io/terms-and-conditions",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Consensys, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      languageTabs: [
        {
          highlight: "bash",
          language: "curl",
          logoClass: "bash",
        },
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
        },
        {
          highlight: "go",
          language: "go",
          logoClass: "go",
        },
        {
          highlight: "javascript",
          language: "nodejs",
          logoClass: "nodejs",
        },
      ],
    }),
  plugins: [
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-",
        anonymizeIP: true,
      },
    ],
    [
      "@docusaurus/plugin-google-tag-manager",
      {
        containerId: "GTM-",
      },
    ],
    // This is how redirects are done
    // [
    //   "@docusaurus/plugin-client-redirects",
    //   {
    //     redirects: [
    //       {
    //         from: "/HowTo/Get-Started/Installation-Options/Install-Binaries",
    //         to: "/get-started/install/install-binaries",
    //       },
    //     ],
    //     // its quite odd here in that its back to front - replace(to, from)
    //     createRedirects(existingPath) {
    //       if (existingPath.includes("/development")) {
    //         return [
    //           existingPath.replace("/development", "/en/latest"),
    //           existingPath.replace("/development", "/latest"),
    //         ];
    //       }
    //       if (existingPath.includes("/")) {
    //         return [existingPath.replace("/", "/stable")];
    //       }
    //       return undefined; // Return a falsy value: no redirect created
    //     },
    //   },
    // ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        docsRouteBasePath: "/",
        hashed: true,
        indexBlog: false,
      },
    ],
  ],
};

module.exports = config;
