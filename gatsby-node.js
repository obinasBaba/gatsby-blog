const _ = require( "lodash" );
const path  = require('path');
const { createFilePath } = require( "gatsby-source-filesystem" );


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath( { node, getNode } );

    createNodeField({
      node,
      name: 'shiny_doddle',
      value: ':) doddle'
    });

    createNodeField( {
      node,
      name: "slug",
      value: slug
    } );
  }
};

//creating post page
exports.createPages = async ({ actions: { createPage }, graphql }) => {

  const result = await graphql( `
    query{
      allMarkdownRemark{
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  ` );

  result.data.allMarkdownRemark.edges
    .forEach(({node}) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/blog.js'),
        context: {
          slug: node.fields.slug,
        }
      })
    });


  // Pagination

  const posts = result.data.allMarkdownRemark.edges;
  const pageSize = 3;
  const pageCount = Math.ceil(posts.length / pageSize); //for 12 = 4
  const templatePath = path.resolve('./src/template/blog-list.js');

  for (let i = 0; i < pageCount; i++) {

    let path = '/blog';
    if (i > 0)
      path += `/${i + 1}`

    createPage({
      path,
      component: templatePath,
      context: {
        limit: pageSize,
        skip: i * pageSize,
        pageCount,
        currentPage: i + 1,
      }
    });
  }

};

