import styled from "styled-components";
import { Button, Grid } from "@material-ui/core";

export const PaddingContainer = styled( Grid )`
  padding: 3.5rem 1.5rem;
  row-gap: 2em;
  position: relative;

  ${ ({ theme }) => `
      ${ theme.breakpoints.up( "md" ) } {
         flex-wrap: nowrap;
      }
  ` }

  &::before{
    content: 'A';
    position: absolute;
    display: block;
    font-size: 25rem;
    z-index: -9999;
    line-height: 0;
    font-family: Poppins, sans-serif;
    font-weight: 900;
    opacity: .1;
    left: -20%;
    top: 30%;

    ${ ({ theme }) => `
      ${ theme.breakpoints.up( "sm" ) } {
         left: -10%;
         top: 40%;
      }
  ` }
  }
`;

export const TextWrapper = styled( Grid )`
  gap: 1em;
  position: relative;
`

export const CardWrapper = styled( Grid )`
  gap: 1em;
`

export const Header = styled.header`
  align-self: start;
  
  & > :first-child{
    margin-bottom: -5px;
  }
`

export const ReadMoreBtn = styled( Button)`
  align-self: start;
  border-radius: 400px;
  font-size: 0.8rem;
  font-family: Sofia Pro Soft, sans-serif;
  font-weight: 300;
`