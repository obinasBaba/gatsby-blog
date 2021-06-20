import styled, { css } from "styled-components";
import { Container, Typography } from "@material-ui/core";
import { heightWidth, mediumUp, smallUp, spacing, text } from "../../../../styles/mixins";

export const PaddingContainer = styled( Container )`
  margin-bottom: 4.5rem;
  margin-top: 6rem;
  
  ${mediumUp(css`
      ${ spacing('mt', 10) };
  `)};
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

    border: thin solid rgba(238, 232, 170, 0.71);
    background-image: linear-gradient(to right, rgba(238, 232, 170, 0.56) -70%, var(--clr-bg) 90%);

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

    img {
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
  
  ${ smallUp( css`
    ${ spacing('mb', 5) };

  ` ) };


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
    line-height: 1.3;

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