import React from "react";
import { graphql, Link } from "gatsby";
import styled, { useTheme } from "styled-components";
import { useMediaQuery } from "@material-ui/core";
import ArticleCard from "../components/ArticleCard";

const PageLinks = styled.div`
  padding: 1rem;
  
  a{
    margin: 1rem;
  }
`

const BlogListTemplate = ({ data, pageContext: {currentPage, pageCount} }) => {

  const previousPage = currentPage === 2 ? "/blog" : `/blog/${ currentPage - 1 }`;

  const nextPage = `/blog/${ currentPage + 1 }`;
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('sm'))



  return (
    < >

        {
          data.allMarkdownRemark.edges.map( ({
                                               node: {
                                                 id, excerpt, fields: { slug },
                                                 frontmatter: {
                                                   title,
                                                   thumbnail: {
                                                     publicURL
                                                   },
                                                   date
                                                 }
                                               }
                                             }, index) => {
            return (
                <ArticleCard title={ title } date={ date } key={excerpt}
                             featuredMedia={publicURL}
                             body={ match ? excerpt : `${excerpt.substr(0, 220)}...` } slug={ slug } />

            );

          } )
        }

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

    </>
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
        excerpt(pruneLength: 350, truncate: false)
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          thumbnail {
            publicURL
            childImageSharp {
              gatsbyImageData(
                aspectRatio: 1.5
                placeholder: BLURRED
                webpOptions: {quality: 100}
              )
            }
          }
        }
      }
    }
  }
  }
`;

export default BlogListTemplate;

