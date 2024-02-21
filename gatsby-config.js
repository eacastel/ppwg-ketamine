module.exports = {
  siteMetadata: {
    title: `Mental Health & Pain Management Solutions`,
    description: `Find relief with our
    personalized and innovative treatments`,
    twitterUsername: `@PacificPainGrp`,
    image: `src/images/icon.png`,
    siteUrl: `https://wellness.pacificpaingroup.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pacific Pain & Wellness Group Special Offer`,
        short_name: `Pacific Pain & Wellness Group Special Offer`,
        start_url: `/`,
        lang: `eng`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-VK55BK4WPF",
          "AW-11335981586",
        ],
        pluginConfig: {
          head: false,
          respectDNT: true,
          delayOnRouteUpdate: 0,
        },
      },
    },
  ],
};
