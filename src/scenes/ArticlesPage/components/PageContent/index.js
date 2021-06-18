import React from "react";
import { Container, Typography } from "@material-ui/core";
import styled, { css } from "styled-components";
import { largeUp, mediumUp, smallUp } from "../../../../styles/mixins";
import { motion } from "framer-motion";

const drawerWidth = 240;

const ContentContainer = styled.main`
  flex-grow: 1;
  position: relative;
  margin-right: 0;
  //border: thick solid teal;
  //margin: 1rem;
  transition: all .5s;
  

  ${ largeUp( css`
      margin-right: ${ ({ open }) => open ? 0 : -drawerWidth + "px" };;
  ` ) }

  transition: ${ ({ theme, open }) => open ?
          theme.transitions.create( "margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
            delay: 200
          } )

          :

          theme.transitions.create( "margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
            delay: 200

          } ) };

`;

const PaddingContainer = styled( Container )`
  padding-bottom: 5.5rem;
  padding-top: 3.5rem;
  display: flex;
  flex-flow: column;
  gap: 2rem;

  //border: 2px dashed red;

  ${ smallUp( css`
    //padding-left: 3rem;
  ` ) };
`;

const MyArticles = styled( Typography )`
  ${ mediumUp( css`
    //margin-left: -2rem;
  ` ) }
`;


const PageContent = ({ open , children}) => {
  return (

    <ContentContainer open={ open }>


      <PaddingContainer fixed={ false } maxWidth={ "md" }>

        <MyArticles variant="h1">
          My Articles
        </MyArticles>

        { children }

        {/*<ArticlePagination />*/}

      </PaddingContainer>

    </ContentContainer>

  );
};

export default PageContent;
