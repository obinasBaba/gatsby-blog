import React from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import ProjectCard from "./components/Card";
import p from "../../../../images/youtube-1.jpeg";
import p2 from "../../../../images/youtube-2.jpg";
import p3 from "../../../../images/youtube-3.jpeg";


const PaddingContainer = styled( Grid )`
  padding: 3.5rem 1.5rem;
  row-gap: 2em;

  ${ ({ theme }) => `
      ${ theme.breakpoints.up( "md" ) } {
         flex-wrap: nowrap;
      }
  ` }
`;

const TextWrapper = styled( Grid )`
  gap: 1em;
  position: relative;
  
  &::before{
    content: 'A';
    position: relative;
    display: block;
    font-size: 25rem;
    line-height: 0;
    font-family: Poppins, sans-serif;
    font-weight: 900;
    opacity: .1;
    left: -80%;
    top: 40%;

    ${ ({ theme }) => `
      ${ theme.breakpoints.down( "sm" ) } {
         left: -40%;
      }
  ` }
    
  }
  
`

const CardWrapper = styled( Grid )`
  gap: 1em;
`

const Header = styled.header`
  align-self: start;
  
  & > :first-child{
    margin-bottom: -5px;
  }
`

const ReadMoreBtn = styled( Button)`
  align-self: start;
  border-radius: 400px;
  font-size: 0.8rem;
  font-family: Sofia Pro Soft, sans-serif;
  font-weight: 300;
`

const Articles = () => {
  return (
    <PaddingContainer container>

      <Grid item xs={0} md={1} lg={2} />

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

      <Grid item xs={0} sm={1} md={0}  />


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

      <Grid item xs={0} md={1} lg={2}/>


    </PaddingContainer>
  );
};

export default Articles;
