import React from "react";
import { Container, Typography } from "@material-ui/core";
import styled, { css } from "styled-components";
import { largeUp, mediumUp, smallUp, text, xLargeUp } from "../../../../../styles/mixins";

const drawerWidth = 300;

const ContentContainer = styled.div`
  flex-grow: 1;
  position: relative;
  margin-right: 0;
  //border: thick solid teal;
  transition: all .5s;
  

  ${ xLargeUp( css`
      margin-right: ${ ({ open }) => open ? 0 : -drawerWidth + "px" };;
  ` ) }

  transition: ${ ({ theme, open }) => open ?
          theme.transitions.create( "margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
            delay: 280
          } )

          :

          theme.transitions.create( "margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
            delay: 200

          } ) };

`;

const ArticleCardWrapper = styled( Container )`

  //padding-bottom: 5.5rem;
  //padding-top: 3.5rem;
  display: flex;
  flex-flow: column;
  gap: 2rem;

  //border: 2px dashed red;

  ${ smallUp( css`
    //padding-left: 3rem;
  ` ) };
`;



const PageContent = ({ open , children}) => {
  return (

    <ContentContainer open={ open }>


      <ArticleCardWrapper fixed={ false } maxWidth={ "md" }>

        { children }

        {/*<ArticlePagination />*/}

      </ArticleCardWrapper>

    </ContentContainer>

  );
};

export default PageContent;
