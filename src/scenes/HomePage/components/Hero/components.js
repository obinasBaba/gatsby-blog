import styled from "styled-components";
import { Container, Typography } from "@material-ui/core";

export const PaddingContainer = styled( Container )`
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;

`

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

  ${ ({ theme }) => `
      ${ theme.breakpoints.up( "sm" ) } {

         grid-template-areas: 
              'hello-txt   hello-txt'
              'img         aboutS'
              'aboutL      aboutL';
      }
  ` }
  
  ${ ({ theme }) => `
      ${ theme.breakpoints.up( "md" ) } {
         grid-template-areas: 
              'hello-txt  hello-txt'
              'img        aboutS'
              'img      aboutL';
      }
  ` }
  &::before {
    content: '';
    position: absolute;
    display: block;
    top: -.5em;
    left: -.5em;
    right: -.5em;
    bottom: -.5em;
    grid-row: 3/4;
    z-index: -999;
    border-radius: 1em;
    
    background-image: linear-gradient(to bottom right, #1c1b1b -10%, #ebf9ff 130%);

    ${ ({ theme }) => `
      ${ theme.breakpoints.up( "sm" ) } {   
            grid-row: 2/3;

      }
  ` }

  }

`;

export const HelloTxt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  grid-area: hello-txt;
  margin-bottom: 2em;
  

  & > :first-child {
    white-space: nowrap;
    margin-left: -20px;

    ${ ({ theme }) => `
      ${ theme.breakpoints.up( "sm" ) } {   
              margin-left: 0px;

      }
  ` }
  }

`;

export const AboutText = styled( Typography )`
  grid-area: aboutS;
  font-family: Poppins, sans-serif;
  font-weight: 900;
  padding: 1em;
`;

export const AboutParagraph = styled.div`
  grid-area: aboutL;
  align-self: start;
  
  & > :first-child{
    margin-bottom: .5em;
  }
`;