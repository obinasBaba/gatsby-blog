import styled, { css } from "styled-components";
import CardMedia from "@material-ui/core/CardMedia";
import { largeUp, mediumUp, smallUp, spacing } from "../../../../../styles/mixins";

const Thumbnail = styled( CardMedia )`
  width: 88%;
  margin-left: auto; //center it
  margin-right: auto;
  ${ spacing('mt', -3 ) };
  height: 0;
  padding-bottom: 48%;
  ${ spacing('br', 2) };
  background-Color: #fff;
  position: relative;

  ${ smallUp( css`
    width: 100%;
    height: 80%;
    ${ spacing('ml', -3) };
    margin-top: 0;
    transform: translateX(-8px);
  `)}
  
  ${ mediumUp(css`
    ${ spacing('ml', -5) };
  `)}
  
  ${ largeUp(css`
    ${ spacing('ml', -10) };
    margin-top: .5rem;
    margin-bottom: .5rem;
  `)}
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    ${ spacing('br', 2) };
    opacity: 0.5
  }`;

export default Thumbnail;