// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Appunti di Matematica e Fisica',
  tagline: 'Interactive notes for the modern classroom',
  favicon: 'img/atom.svg',
  clientModules: [require.resolve('./src/dyslexia.js')],

  stylesheets: [
    {
    href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css', // Updated version
    type: 'text/css',
    integrity: 'sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvEasxt3WoSVX',
    crossorigin: 'anonymous',
    },
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          
          // custom admonitions
          admonitions: {
            keywords: ['goal'],
            extendDefaults: true,
          },

          // These two lines are the magic for LaTeX
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Appunti di Matematica e Fisica',
        logo: {
          alt: 'Atom Logo',
          src: 'img/atom.svg',
        },
        items: [
          {
            to: '/matematica', // The link destination
            label: 'Matematica',             // What the button says
            position: 'left',
          },
          {
            to: 'fisica',
            label: 'Fisica',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'html',
            position: 'right',
            // We added 'window.' and removed 'return false' to see if Safari likes this better
            value: '<button type="button" onclick="window.toggleDyslexia()" class="button button--secondary button--sm" style="cursor:pointer;">Dyslexia Font</button>',
          },

        ],
      },
      footer: {
                style: 'dark',
                links: [
                  // You can keep or delete the link columns here
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Appunti di Matematica e Fisica. Built with Docusaurus.`,
              },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  }
export default config;