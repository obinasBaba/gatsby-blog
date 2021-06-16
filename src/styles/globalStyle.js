import styled, { createGlobalStyle, css } from "styled-components";
import { responsiveVar } from "./commons";


export const GlobalStyle = createGlobalStyle`
  
  ${ responsiveVar }  ;

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    //height: 100%;
  }

  html {
    --dark: #02021e;
    -webkit-font-smoothing: antialiased;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;

  }


  * {
    scrollbar-width: thin;
    scrollbar-color: #3719ca #1e213d;
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    background: #072142;
    transition: background-color 1s ease-in-out;

  }

  *::-webkit-scrollbar-thumb {
    background-color: #3719ca;
    border-radius: 100px;
    transition: background-color 1s ease-in-out;
  }

  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  body {
    
    &.locked{
      overflow: hidden;
      height: 100vh;
    }

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    margin: 0;
    position: relative;
  
     

  }
  
  
  .hero.gatsby-image-wrapper {  //todo fix this
    @media (min-width: 600px) and (max-width: 960px) {
      height: 330px;
    }
  }

  .pageWrapper {
    margin: 0 auto;
    max-width: 1600px;
    font-family: var(--sofia-pro);
  }

  .oldPageWrapper {
    margin: 0 auto;
    padding-right: 15px;
    padding-left: 15px;
    max-width: 90rem;
    font-family: var(--sofia-pro);
    @media screen and (min-width: 768px) {
      padding-right: 4.28rem;
      padding-left: 4.28rem;
    }
  }
  
  h1{
    font-size: 3rem;
    display: none;
  }
  
`;

export const Main = styled.main`
  flex: 1;
  position: relative;

`