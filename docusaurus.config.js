var extraPlugins;

try {
  extraPlugins = require('./extra-plugins.js');
} catch (e) {
  extraPlugins = [];
  console.log('no extra plugins');
}

module.exports = {
  title: 'Open Source Continuous Profiling Platform',
  tagline: 'Debug performance issues down to a single line of code',
  url: 'https://pyroscope.io',
  baseUrl: '/',
  onBrokenLinks: 'throw', // Talk to Dmitry (@petethepig) if you ever want to change this setting
  favicon: 'img/favicon.ico',
  organizationName: 'pyroscope-io', // Usually your GitHub org/user name.
  projectName: 'pyroscope', // Usually your repo name.
  trailingSlash: true, // Talk to Dmitry (@petethepig) if you ever want to change this setting
  customFields: {
    apiAddress: process.env.API_ADDRESS || 'https://pyroscope.io', // Usually your repo name.
  },
  themeConfig: {
    image: "/img/demo-thumbnail.png",
    metadatas: [
      {
        name: 'og:image', content: "/img/demo-thumbnail.png"
      }
    ],
    prism: {
      additionalLanguages: ['ruby', 'rust', 'java'],
    },
    posthog: {
      apiKey: "phc_MwF5liyV3wxYN2keLgioVUu4FMiMze7Iu3rh6denuDb",
      appUrl: "https://app.posthog.com",  // optional
      enableInDevelopment: false,  // optional
    },
    algolia: {
      apiKey: '36ebff722c41a8fb7d1b11b4abcc980c',
      indexName: 'pyroscope',
      contextualSearch: false,
      searchParameters: {},
    },
    googleAnalytics: {
      trackingID: 'UA-185672451-1'
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false
    },
    navbar: {
      title: 'Pyroscope',
      logo: {
        alt: 'Pyroscope Logo',
        src: 'img/logo-v3-small.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://pyroscope.io/slack',
          icon: "/img/navbar/slack.svg",
          label: 'Slack',
          position: 'right',
        },
        {
          href: 'https://github.com/pyroscope-io/pyroscope',
          icon: "/img/navbar/github.svg",
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://twitter.com/PyroscopeIO',
          icon: "/img/navbar/twitter.svg",
          label: 'Twitter',
          position: 'right',
        },
      ],
    },
    announcementBar: {
      id: 'give_us_a_star',
      content: '★&nbsp;If you like Pyroscope, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/pyroscope-io/pyroscope">GitHub</a>!&nbsp;★', //★🔥',
      backgroundColor: 'var(--announcement-bar-bg-color)', // Defaults to `#fff`
      textColor: 'var(--announcement-bar-text-color)', // Defaults to `#000`
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
            {
              label: 'Downloads',
              to: 'downloads',
            },
            {
              label: 'Deployment Guide',
              to: 'docs/deployment',
            },
            {
              label: 'Schedule a demo call',
              icon: "/img/navbar/setup-call.svg",
              to: 'setup-call',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/pyroscope',
            // },
            {
              label: 'Slack',
              icon: "/img/navbar/slack.svg",
              href: "https://pyroscope.io/slack",
            },
            {
              label: 'Twitter',
              icon: "/img/navbar/twitter.svg",
              href: 'https://twitter.com/PyroscopeIO',
            },
            {
              label: 'GitHub',
              icon: "/img/navbar/github.svg",
              href: 'https://github.com/pyroscope-io/pyroscope',
            },
            {
              label: 'Contribute',
              to: 'https://github.com/pyroscope-io/pyroscope/blob/main/CONTRIBUTING.md',
            },
            {
              label: 'Roadmap',
              to: 'https://github.com/pyroscope-io/pyroscope/projects/1',
            },
            {
              label: 'Merch',
              icon: "/img/navbar/tshirt.svg",
              to: 'https://merch.pyroscope.io/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Careers',
              href: 'https://apply.workable.com/pyroscope/',
            },
            {
              label: 'Privacy Policy',
              href: '/privacy',
            },
            {
              label: 'Contact Us',
              href: 'mailto:contact@pyroscope.io',
            },
            {
              label: 'Status Page',
              href: 'https://pyroscope.statuspage.io/',
            }
          ],
        },
      ],
      copyright: `Copyright © 2020 – ${new Date().getFullYear()} <img style="width:22px; vertical-align: sub;" src="/img/logo.svg"/> Pyroscope, Inc`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/pyroscope-io/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/pyroscope-io/docs/edit/main/',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        sitemap: {},
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    'webpack-plugin',
    'posthog-docusaurus'
  ].concat(extraPlugins)
};
