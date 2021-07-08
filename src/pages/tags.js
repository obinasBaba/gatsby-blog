import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import ArticleCard from "../components/ArticleCard";
import queryString from 'query-string'
import { AppStateContext } from "../contexts/AppStateContext";

export const query = graphql`
  query{
    allBlogs: allMarkdownRemark(filter: {frontmatter: {contentKey: {eq: "blog"}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 350, truncate: false)
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            tags {
              tag
            }
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
      totalCount
  }
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;


const Tags = ({ location, data }) => {

  const lastRef = useRef( null );
  const [tagsArr, setTagsArr] = useState( [] );
  const { queryString, setQueryString } = useContext( AppStateContext );





  useEffect( () => {

    let urlParams = new URLSearchParams( location.search );

    setTagsArr(queryString.split(','))

    // console.log( queryString.parse( location.search ) );

    // console.log('tagsArrays: ------- ******** * * ** * * * **\n', tagsArr, 'qS : ', queryString.split(','));

    window.scrollTo(lastRef.current && {
      top: 600
    })

  }, [queryString] );


  return (
    <>
      {

        data.allBlogs.edges.map( ({
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

          if (tags){


            let mappedTags = tags.map(({tag}) => tag)
            let includes = tagsArr.some((t, i) => {
              return mappedTags.includes(`#${t}`)
            })

            console.log('mapped: ', mappedTags, 'targes: ', tagsArr, 'includes: ', includes);

            if (includes)
              return (
                <ArticleCard title={ title } date={ date } key={ excerpt }
                             featuredMedia={ thumbnail }
                             ref={ index === data.allBlogs.edges.length - 1 ? lastRef : null }
                             tags={mappedTags}
                             body={ excerpt } slug={ slug } />

              );
          }



        } )
      }
    </>
  );
};

export default Tags;
