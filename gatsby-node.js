const _ = require( "lodash" );


//creating post page
exports.createPages = async ({ actions: { createPage }, graphql }) => {

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
                      series
                  }
              }
          }
        }
      }
  ` );

  //creating post-template
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
  tempArr = [...new Set( tempArr )]; //clearing the duplicates
  tempArr.forEach( tag => {
    createPage( {
      path: `/tags/${ _.kebabCase( tag ) }/`,
      component: require.resolve( "./src/templates/tag-template.js" ),
      context: {
        tag
      }
    } );
  } );


  //creating series-template
  let seriesArr = new Set();
  posts.forEach(({ node }) => {
    const { series } = node.frontmatter;
    seriesArr.add(series);
  })

  seriesArr.forEach( series => {

    if (series === null)
      return;

    createPage( {
      path: `/series/${  series  }/`,
      component: require.resolve( "./src/templates/series-template.js" ),
      context: {
        series
      }
    } );
  } );


  /*//creating product pages
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
  } );*/

};

