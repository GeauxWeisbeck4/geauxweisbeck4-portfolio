/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Andrew Weisbeck - Full Stack Developer',
  author: 'Andrew Weisbeck',
  headerTitle: 'GeauxWeisbeck4',
  description: 'The personal website of Andrew Weisbeck, which is a collection of content, programming projects, notes and more.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://geauxweisbeck4.dev',
  siteRepo: 'https://github.com/geauxweisbeck4-portfolio.vercel.app',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  mastodon: 'https://fosstodon.org/@GeauxWeisbeck4',
  email: 'andrew.weisbeck@gmail.com',
  github: 'https://github.com/geauxweisbeck4',
  x: 'https://twitter.com/x/geauxweisbeck4',
  // twitter: 'https://twitter.com/Twitter',
  facebook: 'https://facebook.com/geauxweisbeck4',
  youtube: 'https://www.youtube.com/channel/UC8S2Rk7U83DnGaT3EibIREw',
  linkedin: 'https://www.linkedin.com/in/geauxweisbeck4',
  threads: 'https://www.threads.net/@geauxweisbeck4',
  instagram: 'https://www.instagram.com/geauxweisbeck4',
  locale: 'en-US',
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: 'G-JYT5BR2CJH', // e.g. G-XXXXXXX
     },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'mailchimp',
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  search: {
    provider: 'algolia', // kbar or algolia
    algoliaConfig: {
      appId: 'F5HBJL8M49',
      apiKey: '3aa6d305e15a1ac3b142717a7e52546a',
      indexName: 'prod_ANDREW',
    },
  },
}

module.exports = siteMetadata
