module.exports = {

  siteMetadata: {
    customTxt: "random text generated"
  },

  plugins: [

    "gatsby-plugin-react-helmet",
    `gatsby-transformer-json`,
    "gatsby-plugin-layout",

    "gatsby-plugin-styled-components",


    { //sourcing markdown images
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `static/img`
      }
    }, { //blog
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `src/cms/blog`
      }
    }, { //pageData
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pageData`,
        path: `src/cms/pageData`
      }
    },{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/assets/images`
      }
    },

    // `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {  // markdown file transformer
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1024
            }
          },

        ]
      }
    },

    `gatsby-plugin-netlify-cms`,


    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },


  ]
};