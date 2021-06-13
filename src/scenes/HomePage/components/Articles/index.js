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

      <Grid item xs md={1} lg={2} />

      <TextWrapper item container xs={12} sm={5} md={4} direction="column">

        <Header>

          <Typography variant="h1">
            Articles
          </Typography>

          <Typography variant="subtitle2" color="textSecondary" align='right' >
            quick hit tips & tricks
          </Typography>


        </Header>

        <Typography >
          i come across a lot of fun snippets of information.
          i share these little bits of information-plus the occasional
          deep dive-through my articles.
        </Typography>

        <ReadMoreBtn variant="outlined" color='secondary' >
          EXPLORE More
        </ReadMoreBtn>

      </TextWrapper>

      <Grid item xs sm={1} md  />


      <CardWrapper item xs={12} sm={6} md={5} lg={4}
            container
            wrap="nowrap" direction="column">

        <Grid item>
          <ProjectCard imgSrc={ p } />
        </Grid>

        <Grid item>
          <ProjectCard imgSrc={ p2 } />
        </Grid>

        <Grid item>
          <ProjectCard imgSrc={ p3 } />
        </Grid>

      </CardWrapper>

      <Grid item xs md={1} lg={2}/>


    </PaddingContainer>
  );
};

export default Articles;
