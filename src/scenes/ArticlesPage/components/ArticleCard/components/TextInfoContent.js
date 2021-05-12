import React from "react";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const Overline = styled( Typography )`
  font-size: .75rem;
  letter-spacing: .5px;
  text-transform: uppercase;
`;

const Heading = styled( Typography )`
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 2;
`;

const Body = styled( Typography )`
  color: rgba(0, 0, 0, .7);
  flex: 1 1 auto;
`;

const TextInfoContent = ({ overline, heading, body }) => {

  return (
    <>

      <Overline variant="subtitle2" color="textSecondary"> {overline} </Overline>
      <Heading variant='h1' >{ heading }</Heading>
      <Body  variant='body2' gutterBottom={true}>{ body }</Body>

    </>
  );
};

export default TextInfoContent;