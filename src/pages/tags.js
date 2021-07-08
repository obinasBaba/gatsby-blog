import React, { useEffect, useLayoutEffect, useState } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import ArticleCard from "../components/ArticleCard";
import queryString from 'query-string'

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

`;


const Tags = ({ location, data }) => {

  const [tagsArr, setTagsArr] = useState( [] );




  useEffect( () => {
    let urlParams = new URLSearchParams( location.search );
    setTagsArr(urlParams.get('tag').split(','))

    console.log( queryString.parse( location.search ) );

    // console.log( urlParams.get( "tag" ).split(',') );
    console.log('tagsArrays: ', tagsArr);
  }, [] );


  return (
    <TagsContainer>
      {
        data.allBlogs.edges.map( ({
                                    node: {
                                      id, excerpt, fields: { slug },
                                      frontmatter: {
                                        title,
                                        thumbnail: {
                                          publicURL
                                        },
                                        date,
                                        tags
                                      }
                                    }
                                  }, index) => {

          if (tags){
            let mappedTags = tags.map(({tag}) => tag)
            console.log('mapped: ', mappedTags, 'targes: ', tagsArr);
            let includes = tagsArr.some((t, i) => {
              return mappedTags.includes(t)
            })

            if (includes)
              return (
                <ArticleCard title={ title } date={ date } key={ excerpt }
                             featuredMedia={ publicURL }
                             tags={mappedTags}
                             body={ excerpt } slug={ slug } />

              );
          }



        } )
      }
    </TagsContainer>
  );
};

export default Tags;
