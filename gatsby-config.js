module.exports = {
  siteMetadata: {
    title: `Mood Tracker - A Safe Space`,
    description: `Track your daily moods and recieve a weekly summary right in your mailbox.`,
    author: `@vishwamehta`,
  },
  pathPrefix: "/gatsby-a11y-demo",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
