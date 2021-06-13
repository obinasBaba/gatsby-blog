import React from "react";
import { Typography } from "@material-ui/core";
import ArticleCard from "../scenes/ArticlesPage/components/ArticleCard";
import Divider from "@material-ui/core/Divider";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

const PageLinks = styled.div`
  padding: 1rem;
  
  a{
    margin: 1rem;
  }
`

const BlogListTemplate = ({ data, pageContext: {currentPage, pageCount} }) => {

  const previousPage = currentPage === 2 ? "/blog" :
    `/blog/${ currentPage - 1 }`;

  const nextPage = `/blog/${ currentPage + 1 }`;

  return (
    <div>
      <Typography variant="h1">Be Stubborn on it.</Typography>
      <main>
        {
          data.allMarkdownRemark.edges.map( ({
                                               node: { id, frontmatter: { title, date } },
                                               excerpt, fields: { slug }
                                             }) => {
            return (
              <div key={ id }>
                <ArticleCard title={ title } date={ date }
                             body={ excerpt } slug={ slug } />

                <Divider orientation="horizontal" />
              </div>
            );

          } )
        }
      </main>

      <PageLinks>
        {
          currentPage > 1 && (
            <Link to={previousPage}>
               Prev Page
            </Link>
          )
        }

        {
          currentPage < pageCount && (
            <Link to={nextPage}>
              Next Page
            </Link>
          )
        }

      </PageLinks>

    </div>
  );
};

// The page query.
export const query = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { contentKey: { eq: "blog" }}}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default BlogListTemplate;
