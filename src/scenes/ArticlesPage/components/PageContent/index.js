import React from "react";
import { Container, Typography } from "@material-ui/core";
import styled, { css } from "styled-components";
import { largeUp, mediumUp, smallUp } from "../../../../styles/mixins";
import ArticlePagination from "./ArticlePagination";
import ArticleCardWrapper from "./ArticleCardWrapper";

const drawerWidth = 240;

const StyledPageContent = styled.main`
  flex-grow: 1;
  position: relative;
  margin-right: 0;

  ${ largeUp( css`
    margin-right: ${ ({ open }) => open ? 0 : -drawerWidth + "px" };;
  ` ) }

  transition: ${ ({ theme, open }) => open ?
          theme.transitions.create( "margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
          } )

          :

          theme.transitions.create( "margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
          } ) };

`;

const PaddingContainer = styled( Container )`
  padding-bottom: 5.5rem;
  padding-top: 3.5rem;
  display: flex;
  flex-flow: column;
  gap: 4rem;

  //border: 2px dashed red;

  ${ smallUp( css`
    padding-left: 3rem;
  ` ) };
`;

const MyArticles = styled( Typography )`
  ${ mediumUp( css`
    margin-left: -2rem;
  ` ) }
`;

const PageContent = ({ open , children}) => {
  return (

    <StyledPageContent open={ open }>


      <PaddingContainer fixed={ false } maxWidth={ "md" }>

        <MyArticles variant="h1">
          My Articles
        </MyArticles>

        { children }

        {/*<ArticlePagination />*/}

      </PaddingContainer>

    </StyledPageContent>

  );
};

export default PageContent;
