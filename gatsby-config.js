module.exports = {
  siteMetadata: {
    title: `Ketamine Infusion Therapy Clinic in Torrance, CA and South Bay Los Angeles`,
    description: `Find relief with our personalized and innovative ketamine infusion treatments`,
    twitterUsername: `@PacificPainGrp`,
    image: `src/images/ketamine-infusions-pacific-pain-and-wellness.png`,
    siteUrl: `https://ketamine.pacificpaingroup.com`,
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
        name: `Pacific Pain & Wellness Group | On-Site Ketamine Infusions`,
        short_name: `Pacific Pain & Wellness | On-Site Ketamine Infusions`,
        start_url: `/`,
        lang: `eng`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `browser`,
        icon: `src/images/favicon-16x16.png`,
        icons: [
          {
            src: `src/images/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `src/images/icon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `src/images/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `src/images/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
        ],
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
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "5037797342981559",
      },
    },
  ],
};
