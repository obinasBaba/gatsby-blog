import React from "react";
import Typography from "@material-ui/core/Typography";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { smallUp, spacing, text } from "../../../../../styles/mixins";
import { Button } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

const Overline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${ spacing( "ph", 2 ) };
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
  color: rgba(0, 0, 0, .7);
  line-height: 1.4;

  ${ text( 1 ) };
`;

const ReadMoreBtn = styled( Button )`
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  box-shadow: 0 4px 32px rgba(252, 56, 56, 0.4);
  border-radius: 100px;
  padding-left: 24px;
  padding-right: 24px;
  //font-size: 0.7rem;
  font-family: Sofia Pro Soft, sans-serif;
  font-weight: bold;
  color: #ffffff;
  ${ spacing( "mt", 3 ) };
  margin-top: calc(20px * var(--indent)) !important; //to kill specificity the in cardContent
  align-self: start;
  letter-spacing: 1px;
`;

const ContentWrapper = styled( CardContent )`
  display: flex;
  flex-flow: column;
  z-index: 11;
  //border: thin solid blue;
  align-self: stretch;

  flex: 1.5;

  ${ smallUp( css`
    max-width: 67%;
  ` ) };

  & > :not(:first-child) {
    ${ spacing( "mt", 1 ) };
  }

  ${ spacing( "p", 2.5 ) };
  ${ spacing( "ph", 3 ) };
`;


const CardContents = ({ overline, title, body, slug }) => {

  return (
    <ContentWrapper>


      <Overline variant="subtitle2" color="textSecondary">
        <MetaTxt>{ overline }</MetaTxt>
        <MetaTxt> #React, #Js </MetaTxt>
      </Overline>

      <Heading variant="h4"> <Link to={ slug }>{ title }</Link> </Heading>

      <Body gutterBottom={ true }>{ body }</Body>

      <ReadMoreBtn>Read more</ReadMoreBtn>


    </ContentWrapper>
  );
};

export default CardContents;