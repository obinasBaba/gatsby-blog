import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import NavLinks from "../Header2/components/NavLinks";

const PaddingContainer = styled( Grid )`
  padding: 4rem  0;
  z-index: 991300;
  position: relative;
  background-color: var(--clr-bg);
`;

const CopyRightWrapper = styled.div`
  padding: 5rem 0;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  row-gap: 1.5rem;
`;

const LetsTalkContainer = styled( Container )`
  background-color: var(--clr-accent);
  border-radius: 1rem;
  padding: 1rem;
  //border: thick solid red;


  ${ ({ theme }) => `
      ${ theme.breakpoints.up( "sm" ) } {
             padding: 3.4rem;
      }
  ` }

  ${ ({ theme }) => `
      ${ theme.breakpoints.up( "md" ) } {
        padding: 5rem;
      }
  ` }
  

`;

const LetsTalkWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  row-gap: 1em;
`;

const Footer = () => {
  return (

    <PaddingContainer container component="footer">

      <LetsTalkContainer fixed={ true } maxWidth="md">

        <LetsTalkWrapper>

          <Typography variant='h5' style={{fontWeight: 'bold'}}>
            Let's stay in touch.
          </Typography>

          <Typography gutterBottom={ true }>
            I usually write in-depth article sharing what i learned.
            It's usually about software engineering or management.
            if this sounds interesting, sign up below to get notified.
          </Typography>

          <ContactForm />

        </LetsTalkWrapper>

      </LetsTalkContainer>

      <CopyRightWrapper>

        <Typography variant="body1">
          &copy;
          2021
          Henok Get
        </Typography>

        <NavLinks/>

      </CopyRightWrapper>

    </PaddingContainer>

  );
};

export default Footer;
