import React from "react";
import styled, { css } from "styled-components";
import { mediumUp, smallDown, smallUp, spacing, text } from "../../../../styles/mixins";
import { Container, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const HeadLineContainer = styled( Container )`
  //border: thick solid red;
  max-width: 1600px;
  font-family: var(--sofia-pro);
  ${ spacing( "mt", 11 ) };

  display: flex;
  flex-flow: column;


`;

const TextAlign = styled( Container )`
  display: flex;
  flex-flow: column;
  //border: thick solid blue;
  ${ spacing( "ph", 4 ) };


  ${ mediumUp( css`
    ${ spacing( "ph", 8 ) };
  ` ) };

`;

const ImageBox = styled.div`
  max-width: 1060px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-height: 530px;
  width: calc( 100% + 48px );
  transform: translateX(-24px);



  ${ mediumUp( css`
    width: calc( 100% );
    transform: translateX(0);
  ` ) };


  & .img-container {
    width: 100%;
  }

  img {
    display: block;
    max-width: 100%;
    width: 100%;
    object-fit: cover;
  }
  
`;


const Title = styled( Typography )`
  ${ spacing( "mt", 1.6 ) };
  ${ spacing( "mb", 3 ) };

  font-weight: 900;
  line-height: 1.25em;
  text-transform: capitalize;
  text-align: center;
`;


const DateAndTags = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-between;
  ${ spacing( "mb", 4 ) };
  letter-spacing: 1px;
  font-size: 1.1rem;
  font-family: var(--gramatika);
  
  ${ mediumUp( css`
    ${ spacing( "ph", 3 ) };
  ` ) };


  & > :first-child {
    margin-right: .5rem;


    ${ smallDown( css`
      
    ` ) };
  }

  ${ smallUp( css`
    flex-flow: row;
    align-items: center;
    justify-content: space-between;

  ` ) };
`;

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-family: var(--sofia-soft);
  font-weight: 900;
  letter-spacing: 1px;
  line-height: 1.55em;
  text-transform: uppercase;
  //@include hl-font-size-text(12px);
  ${ text( 1.4 ) };
  ${ spacing( "mb", 2 ) };


  ${ smallUp( css`


  ` ) };

  .link {
    text-decoration: none;

    &:hover {
      color: greenyellow;
      transition: 0.4s;
    }
  }

  .item {
    a {
      //color: white;
    }
  }

  .all-posts {
    a {
      color: #414162;
    }
  }
`;


const HeadLine = ({ categories, title, imgData, date, tags, thumbnail }) => {


  return (
    <HeadLineContainer>


      <TextAlign maxWidth="lg" fixed={ true } disableGutters={ true }>
        <Title variant="h1"> { title } </Title>
        <DateAndTags>
          <span> { date } </span>
          <span> {
            tags.map( i => i.tag ).join( ", " )
          } </span>
        </DateAndTags>

        <Category>
          <span className="all-posts">
            <Link to="/">
              Home
            </Link>
          </span>
          <span>&nbsp;/&nbsp;</span>
          <span key="all posts" className="all-posts">
            <Link to="/blog">
              Articles
            </Link>
          </span>
          <span>&nbsp;/&nbsp;</span>
          <span key="all posts" className="item">
            <Link to="/blog">
              2021-06 ...
            </Link>
          </span>
        </Category>
      </TextAlign>

      <ImageBox>
        <GatsbyImage alt={ "thisis sk si s" } image={ getImage( thumbnail ) } className="img-container" />
      </ImageBox>


    </HeadLineContainer>
  );
};

export default HeadLine;
