import React from "react";
import styled, { css } from "styled-components";
import { gridColWidth, gridify, mediumUp, smallDown, smallUp, spacing, text } from "../../../../styles/mixins";
import { Container, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import image from "./featured-media.png";

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
    ${ spacing( "ph", 6 ) };
  ` ) };

`;

const ImageBox = styled.div`
  max-width: 1060px;
  //width: 100%;
  
  
  ${
    smallDown(css`
      width: 110%;
      transform: translateX(-5%);

    `)
  };

  display: flex;
  justify-content: center;
  //border: thick solid yellow;
  margin: 0 auto;


  img {
    display: block;
    max-height: 530px;
    max-width: 100%;
    height: auto;
    width: 100%;
    object-fit: cover;
  }
`;


const Title = styled( Typography )`
  //@include hl-margin('top', 26px);
  //@include hl-font-size-title(52px);
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
  //letter-spacing: 0;
  ${ text(1.5) };


  ${ smallUp( css`
    ${ text(1.7) };

  ` ) };
  
  ${ mediumUp(css`
    ${ spacing( "ph", 3 ) };
  `) };


  & > :first-child {
    margin-right: .5rem;
    ${ smallDown( css`
      letter-spacing: -.3px;
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


const HeadLine = ({ categories, title, imgData, date, tags }) => {


  return (
    <HeadLineContainer>



      <TextAlign maxWidth="md" fixed={ true } disableGutters={ true }>
        <Title variant="h1"> Magnet-Button with Framer-motion </Title>
        <DateAndTags>
          <span  >Aug 5 2019 · ( 30 mins read ) </span>
          <span  >#React, #Js</span>
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
        <img src={ image } alt={ "featured image" } />
      </ImageBox>


    </HeadLineContainer>
  );
};

export default HeadLine;
