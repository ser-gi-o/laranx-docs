const { description } = require('../../package')

module.exports = {
  base: '/docs/',
  // dest: 'public/docs', //leave default dist as published directory

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'LaraNx Documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'SEO and Theme Management for Laravel',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#4f46e5' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: 'https://laranx.com/favicon/favicon.png' }],
    //['meta', { property: 'og:title', content: 'LaraNx Documentation Main' }],  //duplicates if exists in page. page is responsible
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'LaraNx Documentation - Laravel SEO and Theme Management' }],
    ['meta', { property: 'og:image', content: 'https://laranx.com/docs/LaraNx-documentation-cover.png' }],
    ['meta', { property: 'og:image:width', content: '1400' }],
    ['meta', { property: 'og:image:height', content: '727' }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    //['meta', { property: 'twitter:title', content: 'LaraNx Documentation' }], //page is responsible
    //['meta', { property: 'twitter:description', content: 'LaraNx Documentation - Laravel SEO and Theme Management' }],
    ['meta', { property: 'twitter:image', content: 'https://laranx.com/docs/LaraNx-documentation-cover.png' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    displayAllHeaders: true,
    logo: 'https://laranx.com/favicon/favicon.png',
    nav: [
      { text: 'Getting Started', link: '/', },
      { text: 'Home', link: 'https://laranx.com' }
    ],
    sidebar: [
      {
        title: 'Getting Started',
        collapsable: false,
        children: [
          '/',
          '/installation',
        ]
      },
      {
        title: 'How LaraNx works',
        collapsable: false,
        children: [
          '/admin/',
          '/admin/site-search-engine-optimization',
          '/admin/page-search-engine-optimization',
          '/admin/generate-sitemap',
          '/admin/theme-settings',
          '/theming',
        ]
      },
      {
        title: 'Install Examples',
        collapsable: false,
        children: [
          '/kit-installs/',
          '/kit-installs/breeze',
          '/kit-installs/inertia',
          '/kit-installs/livewire'
        ]
      },
      {
        title: 'Attribution',
        collapsable: false,
        children: [
          'attribution',
        ]
      },
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['google-gtag', { 'ga': 'G-Q2NBPERYMB'}]
  ]
}
