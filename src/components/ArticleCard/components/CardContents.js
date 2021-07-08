import React from "react";
import Typography from "@material-ui/core/Typography";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { smallDown, smallUp, spacing, text } from "../../../styles/mixins";
import {motion} from "framer-motion";
import MotionBtn from "./MotionBtn";

const ContentWrapper = styled.div `
  display: flex;
  flex-flow: column;
  z-index: 11;
  //border: thin solid blue;
  align-self: stretch;
  color: black;
  flex: 1.5;

  & > :not(:first-child) {
    ${ spacing( "mt", 1 ) };
  }

  ${ spacing( "p", 2.5 ) };
  ${ spacing( "ph", 3 ) };
  
  ${ ({small}) => !small && css`

    ${ smallUp( css`
    max-width: 67%;
  ` ) };
  
  ` };
`;


const Overline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MetaTxt = styled( Typography )`
  font-size: .75rem;
  letter-spacing: .5px;
  //text-transform: uppercase;
`;

const Heading = styled( Typography )`
  font-weight: 900;
  font-family: var(--Poppins);
  line-height: 1.2;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Body = styled( Typography )`
  //color: rgba(0, 0, 0, .7);
  line-height: 1.4;

  ${ text( 1 ) };
`;




const CardContents = ({ overline, title, body, slug='/', tags, small }) => {

  return (
    <ContentWrapper small={small} >


      <Overline variant="subtitle2" color="textSecondary">
        <MetaTxt>{ overline }</MetaTxt>
        <MetaTxt> {
          tags && tags.join(', ')
        } </MetaTxt>
      </Overline>

      <Heading variant="h4"> <Link to={ slug }>{ title }</Link> </Heading>

      <Body gutterBottom={ true }>{ body }</Body>

      <MotionBtn />


    </ContentWrapper>
  );
};

export default CardContents;