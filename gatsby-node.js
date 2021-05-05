const _ = require('lodash');

exports.createPages = async ({ actions: { createPage }, graphql }) => {

  console.log( "inside gatsby-node-config ------" );

  const {
    data: {
      allMdx: { edges: posts }
    }
  } = await graphql( `
      {
          allMdx {
          edges {
              node {
           frontmatter {
                      slug
                      tags 
                  }
              }
          }
        }
      }
  ` );

  posts.forEach( ({ node }) => {
    const { slug } = node.frontmatter;
    createPage( {
      path: slug,
      component: require.resolve( "./src/templates/post-template.js" ),
      context: {
        slug: slug
      }
    } );
  } );

  //creating tags pages
  let tempArr = [];
  posts.forEach( ({ node }) => {
    const { tags } = node.frontmatter;
    tempArr = [...tempArr, ...tags];

  } );

  tempArr = [...new Set(tempArr)] //clearing the duplicates
  tempArr.forEach( tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: require.resolve('./src/templates/tag-template.js'),
      context: {
        tag
      },
    })
  })

  //creating product pages
  const results = await graphql( `
  {
    allProductJson {
      edges {
        node {
          slug
        }
      }
    }
  }` );

  if (results.error)
    console.error( "something went wrong!" );

  results.data.allProductJson.edges.forEach( ({ node }) => {
    createPage( {
      path: `/product/${ node.slug }/`,
      component: require.resolve( "./src/templates/product.js" ),
      context: {
        slug: node.slug
      }
    } );
  } );

};