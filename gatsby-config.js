module.exports = {

  siteMetadata: {
    customTxt: "random text generated"
  },

  plugins: [

    "gatsby-plugin-react-helmet",

    `gatsby-transformer-json`,

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,

    "gatsby-plugin-styled-components",
    {
      //smart enough to use the plugin-sharp if it find any image ref in the mdx file
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },


    `gatsby-plugin-netlify-cms`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `./src/posts`
      }
    },

    "gatsby-plugin-layout",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `./src/assets/images`
      }
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
        name: `fonts`,
        path: `${ __dirname }/src/assets/fonts/`
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${ __dirname }/src/blog`
      }
    },

  ]
};