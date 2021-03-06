import React, { useContext } from "react";
import { graphql, Link } from "gatsby";
import styled, { css, useTheme } from "styled-components";
import { Typography, useMediaQuery } from "@material-ui/core";
import ArticleCard from "../components/ArticleCard";
import { largeUp, mediumUp, spacing, text, xLargeUp } from "../styles/mixins";
import { AppStateContext } from "../contexts/AppStateContext";

const PageLinks = styled.div`
  padding: 1rem;
  
  a{
    margin: 1rem;
  }
`

const MyArticles = styled( Typography )`
  ${ text(4) };
  transition: ${ ({ theme, isOpen }) => isOpen ?
          theme.transitions.create( "transform", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
            delay: 280
          } )

          :

          theme.transitions.create( "transform", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
            delay: 200

          } ) };
  
  ${ largeUp( css`
    transform: translateX( -50px );
    ${ text(5.6) };


  ` ) }
  
  ${ xLargeUp( css`

    ${ ({isOpen}) => isOpen ?
            'transform: translateX( 0 )' :
            'transform: translateX( calc(-130px * var(--size) ) )' };
  
  ` ) };
`;


const BlogListTemplate = ({ data, pageContext: {currentPage, pageCount} }) => {

  const previousPage = currentPage === 2 ? "/blog" : `/blog/${ currentPage - 1 }`;

  const nextPage = `/blog/${ currentPage + 1 }`;
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('sm'))
  const { isDrawerOpen, setDrawerOpen } = useContext( AppStateContext );




  return (
    < >

      <MyArticles variant="h1" isOpen={isDrawerOpen}>
        My Articles
      </MyArticles>

        {
          data.allMarkdownRemark.edges.map( ({
                                               node: {
                                                 id, excerpt, fields: { slug },
                                                 frontmatter: {
                                                   title,
                                                   thumbnail,
                                                   date,
                                                   tags
                                                 }
                                               }
                                             }, index) => {

              return (
                <ArticleCard title={ title } date={ date } key={excerpt}
                             featuredMedia={thumbnail}
                             tags={tags && tags.map(({tag}) => tag)}
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
          tags {
            tag
          }
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

