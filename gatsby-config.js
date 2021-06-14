module.exports = {

  siteMetadata: {
    customTxt: "random text generated"
  },

  plugins: [

    "gatsby-plugin-react-helmet",
    `gatsby-transformer-json`,
    "gatsby-plugin-layout",

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,

    "gatsby-plugin-styled-components",
    `gatsby-plugin-netlify-cms`,

    {
      //smart enough to use the plugin-sharp if it find any image ref in the mdx file
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },

    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/src/assets/images`
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cms`,
        path: `${ __dirname }/src/cms`
      }
    },

  ]
};