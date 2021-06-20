import styled, { css } from "styled-components";
import { Button, Grid } from "@material-ui/core";
import { mediumUp, smallUp, spacing, text } from "../../../../styles/mixins";

export const PaddingContainer = styled( Grid )`
  padding: 3.5rem 1.5rem;
  row-gap: 2em;
  position: relative;
  
  
  ${ mediumUp( css`
    flex-wrap: nowrap;
  ` ) };

`;

export const TextWrapper = styled( Grid )`
  gap: calc( 2rem * var(--size) );
  position: relative;

  &::before{
    content: 'A';
    position: absolute;
    display: block;
    font-size: 28rem;
    z-index: -9999;
    line-height: 0;
    font-family: Poppins, sans-serif;
    font-weight: 900;
    opacity: .1;
    left: -50%;
    top: 30%;

     
  }


  ${ smallUp( css`
    padding-top: 4rem;
    
    &::before{
      top: 40%;
    }
    
  ` ) };


`

export const CardWrapper = styled( Grid )`
  margin-top: calc(2rem * var( --size ));
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
  ${ text(.9) };
  padding: .7rem 1rem;
  letter-spacing: calc(1px * var(--indent));
  font-family: Sofia Pro Soft, sans-serif;
  font-weight: 300;
`