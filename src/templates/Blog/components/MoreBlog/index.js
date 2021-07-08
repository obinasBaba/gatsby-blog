import React from "react";
import styled from "styled-components";
import { spacing, text } from "../../../../styles/mixins";
import { Container, Typography } from "@material-ui/core";
import ArticleCard from "../../../../components/ArticleCard";
import { useRecommendedAssets } from "../../../../hooks/queries/useRecommendedAssets";

const MoreBlogContainer = styled( Container )`
  
  ${ spacing('mb', 14) };
  
`

const MoreTitle = styled( Typography )`
  ${text(5)};
  ${spacing('mb', 5)};
  ${spacing('ml', 3)};
  text-decoration: underline;
  
`

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: wrap;
  justify-content: space-evenly;
  gap: 1rem;
  
`

const MoreBlog = ( { } ) => {

  const {allPost} = useRecommendedAssets();



  return (
    <MoreBlogContainer maxWidth={false}>

      <MoreTitle variant='h1'> Other Posts :  </MoreTitle>


      <CardWrapper>
        {
          allPost.edges.map((post, index) => {

            if (index >= 3)
              return ;

            const {
              excerpt,
              fields: {slug},
              frontmatter: {
              title, date, tags, thumbnail
            } } = post.node;

            console.log(post);


            return <ArticleCard title={ title } date={ date } key={ date + index }
                                featuredMedia={thumbnail}
                                tags={tags && tags.map(({tag}) => tag)}
                                body={ `${excerpt.substr(0, 100)}...` }
                                slug={ slug }  small={true}
                                line={false}
            />


          })
        }
      </CardWrapper>


    </MoreBlogContainer>
  );
};

export default MoreBlog;
