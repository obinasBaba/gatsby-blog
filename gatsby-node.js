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

  /*  createPage( {
      path: "/no-data/",
      component: require.resolve( "./src/templates/no-data.js" ),
      context: {
        title: "we dont need graphql",
        content: "<p>this is page content</p>"
      }
    } );

    const products = require( "./data/product.json" );

    products.forEach( product => {
      createPage( {
        path: `/product/${ product.slug }/`,
        component: require.resolve( "./src/templates/product.js" ),
        context: {
          title: product.title,
          description: product.description,
          image: product.image,
          price: product.price
        }
      } );
    } );*/


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
      path: `/product/${node.slug}/`,
      component: require.resolve( "./src/templates/product.js" ),
      context: {
        slug: node.slug
      }
    } );
  } );

};