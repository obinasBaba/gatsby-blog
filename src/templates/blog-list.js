import React from "react";
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

  const previousPage = currentPage === 2 ? "/blog" : `/blog/${ currentPage - 1 }`;

  const nextPage = `/blog/${ currentPage + 1 }`;

  return (
    <main>

      <>
        {
          data.allMarkdownRemark.edges.map( ({
                                               node: {
                                                 id, excerpt, fields: { slug },
                                                 frontmatter: { title, date }
                                               }
                                             }, index) => {
            return (
              <div key={ `${id} ${index}` }>
                <ArticleCard title={ title } date={ date }
                             body={ excerpt } slug={ slug } />

                <Divider orientation="horizontal" />
              </div>
            );

          } )
        }
      </>

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

    </main>
  );
};

// The Page query that accept parameter.
export const query = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(    
    filter: {frontmatter: {contentKey: {eq: "blog"}}}
    sort: {fields: frontmatter___date, order: DESC}
    limit: $limit
    skip: $skip
      
  ) {
    edges {
      node {
        id
        fields {
          slug
        }
        excerpt
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
      }
    }
  }
  }
`;

export default BlogListTemplate;

