import React from "react";
import { Grid, Typography } from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import p from "../../../../images/youtube-1.jpeg";
import p2 from "../../../../images/youtube-2.jpg";
import p3 from "../../../../images/youtube-3.jpeg";
import { CardWrapper, Header, PaddingContainer, ReadMoreBtn, TextWrapper } from "./components";


const Articles = () => {
  return (
    <PaddingContainer container>

      <Grid item xs md lg={1} />

      <TextWrapper item container xs={12} sm={5} md={5} direction="column">

        <Header>

          <Typography variant="h1" align='center'>
            Articles
          </Typography>

          <Typography variant="subtitle2" color="textSecondary" align='right' >
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

      <Grid item xs sm={1} md={2} lg={3}  spacing={0} />


      <CardWrapper item container xs={12} sm={6} md={5} lg={7}
                   spacing={0}
            wrap="nowrap" direction="column">

          <ProjectCard item
                       title={'How to check the website before releasing it?'}
                       imgSrc={ p } />

          <ProjectCard item
                       title={'Halo Lab Named Top ethiopian b2b company'}
                       imgSrc={ p2 } />

          <ProjectCard item
                       title={'Brand analysis: seconde step to the brand identity'}
                       imgSrc={ p3 } />

      </CardWrapper>

      <Grid item xs md lg={1}/>


    </PaddingContainer>
  );
};

export default Articles;
