// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Monster Hunter Rise Progression Wiki',
  favicon: 'img/favicon.ico',

  url: 'https://wiki.itsnoellahere.gay',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // id: 'lr',
          path: 'lr',
          routeBasePath: 'low-rank',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'hr',
        path: 'hr',
        routeBasePath: 'high-rank',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mr',
        path: 'mr',
        routeBasePath: 'master-rank',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'MHR Progression Wiki',
        logo: {
          alt: 'My Site Logo',
          src: 'https://files.itsnoellahere.gay/images/mhricon.png',
        },
        items: [
          {
            type: 'docSidebar',
            
            sidebarId: 'sidebar',
            position: 'left',
            label: 'Low Rank',
          },
          {
            type: 'docSidebar',
            docsPluginId: 'hr',
            sidebarId: 'sidebar',
            position: 'left',
            label: 'High Rank',
          },
          {
            type: 'docSidebar',
            docsPluginId: 'mr',
            sidebarId: 'sidebar',
            position: 'left',
            label: 'Master Rank',
          },
          {
            href: 'https://github.com/ItsNoellaHere/mhr-progress-wiki',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://monsterhunterrise.wiki.fextralife.com/Monster+Hunter+Rise+Wiki',
            label: 'MHR Wiki',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} ItsNoellaHere. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
