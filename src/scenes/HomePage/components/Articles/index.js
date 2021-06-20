import React from "react";
import { Grid, Typography } from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import { CardWrapper, Header, PaddingContainer, ReadMoreBtn, TextWrapper } from "./components";
import { useFeaturedArticlesAssets } from "../../../../hooks/queries/useFeaturedArticlesAssets";


const Articles = () => {

  const { featuredArticles: {edges} } = useFeaturedArticlesAssets();
  console.log(edges);

  return (
    <PaddingContainer container>

      <Grid item xs md lg={1} />

      <TextWrapper item container xs={12} sm={5} md={5} direction="column">

        <Header>

          <Typography variant="h1" align='center'>
            Articles
          </Typography>

          <Typography variant="subtitle2"  align='right' >
            quick hit tips & tricks
          </Typography>


        </Header>

        <Typography >
          I come across a lot of fun snippets of information.

          As i learn things, my notes turn into articles to share.

          i share these little bits of information through my articles.
        </Typography>

        <ReadMoreBtn variant="outlined" color='secondary' >
          EXPLORE More
        </ReadMoreBtn>

      </TextWrapper>

      <Grid item xs sm={1} md={2} lg={3}  />


      <CardWrapper item container xs={12} sm={6} md={5} lg={7}
            wrap="nowrap" direction="column">

        {
          edges.map( ({
                        node: {
                          id, frontmatter: {
                            tags, thumbnail, title
                          }
                        }
                      }) => <ProjectCard item
                                         key={id}
                                         title={title}
                                         tags={tags}
                                         imgSrc={ thumbnail } />
           )
        }


      </CardWrapper>

      <Grid item xs md lg={1}/>


    </PaddingContainer>
  );
};

export default Articles;
