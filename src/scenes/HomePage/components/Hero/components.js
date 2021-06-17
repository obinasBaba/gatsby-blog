import styled, { css } from "styled-components";
import { Container, Typography } from "@material-ui/core";
import { heightWidth, mediumUp, smallUp, spacing, text } from "../../../../styles/mixins";

export const PaddingContainer = styled( Container )`
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;

`;

export const HeroWrapperGird = styled.section`
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 1em;
  row-gap: 2em;
  grid-template-areas: 
          'hello-txt'
          'img'
          'aboutS'
          'aboutL';
  
  ${ smallUp( css`
    grid-template-areas: 
              'hello-txt   hello-txt'
              'img         aboutS'
              'aboutL      aboutL';
  ` ) };

  ${ mediumUp( css`
    grid-template-areas: 
              'hello-txt  hello-txt'
              'img        aboutS'
              'img      aboutL';
  ` ) };

  &::before {
    content: '';
    position: absolute;
    display: block;
    top: -.5em;
    left: -.5em;
    right: -.5em;
    bottom: -.5em;
    grid-row: 3/4;
    z-index: -1;
    border-radius: 1em;

    background-image: linear-gradient(to bottom right, #1c1b1b -10%, #ebf9ff 130%);

    ${ smallUp( css`
      grid-row: 2/3;
    ` ) };

  }


  .hero-image {
    border: .5em solid white;
    border-radius: .5em;
    box-shadow: 0 0.5em 1em rgba(0, 0, 0, .15);
    grid-area: img;
    max-width: 330px;
    align-self: start;
    margin: 1rem;
    display: block;
    background: white;
    
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: .5em;
    }
    
  }

`;

export const HelloTxt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: hello-txt;
  //margin-bottom: 2em;
  //border: thin solid red;


  & h1 {
    white-space: nowrap;
    font-size: calc(4.5rem * var(--indent));
    letter-spacing: -1.3px;
    width: min-content;
    margin: 0;
  }

  & svg {
    ${ spacing( "max-width", 7 ) };
    ${ spacing( "max-height", 7 ) };
    ${ spacing( "mr", 2 ) };
    min-width: 30px;
    width: max-content;
  }

`;

export const AboutText = styled( Typography )`
  //border: thin solid red;
  grid-area: aboutS;
  font-family: Poppins, sans-serif;
  font-weight: 900;
  padding: 1em .5em;
  ${ text( 1.6243 ) };
  
  ${ smallUp( css`
    ${ text( 2.0243 ) };

  ` ) };
`;

export const AboutParagraph = styled.div`
  grid-area: aboutL;
  align-self: start;

  & > * {
    margin-bottom: .5em;
  
    ${ smallUp( css`
      padding: 0 .5em .5em;


    ` ) };
  }
`;