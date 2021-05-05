module.exports = {

  siteMetadata: {
    customTxt: 'random text generated',

  },

  plugins: [

    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,  //smart enough to use the plugin-sharp if it find any image ref in the mdx file

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `./src/posts`,
      },
    },
  ]
}