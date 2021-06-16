const path  = require('path');
const { createFilePath } = require( "gatsby-source-filesystem" );

// creating 'slug' field for URL string
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath( { node, getNode } );

    createNodeField( {
      node,
      name: "slug",
      value: slug
    } );
  }
};

//creating post Page
exports.createPages = async ({ actions: { createPage }, graphql }) => {

  const result = await graphql( `
    query{
      allMarkdownRemark(
         filter: {frontmatter: {contentKey: {eq: "blog"}}}
      ){
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

  //creating pages for all markdown file with content-key of 'blog'
  result.data.allMarkdownRemark.edges
    .forEach(({node : {fields: {slug}}}) => {
      createPage({
        path: slug,
        component: path.resolve('./src/templates/blog/blog.js'),
        context: {
          slug: slug,
        }
      })
    });


  // Pagination

  const posts = result.data.allMarkdownRemark.edges;
  const pageSize = 3;
  const pageCount = Math.ceil(posts.length / pageSize); //for 12 = 4
  const templatePath = path.resolve('./src/templates/blog-list.js');

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

