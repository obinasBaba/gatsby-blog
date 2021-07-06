import styled, { createGlobalStyle } from "styled-components";
import { responsiveVar } from "./commons";


export const GlobalStyle = createGlobalStyle`

  ${ responsiveVar }

  ;

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    //height: 100%;
  }

  html {
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


  body {

    &.locked {
      overflow: hidden;
      height: 100vh;
    }

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    margin: 0;
    position: relative;

    .light {
      --clr-accent: palegoldenrod;
      --clr-accent2: #dbdb74;
      --clr-accent-light: rgba(238, 232, 170, 0.73);
      --clr-bg: #1c1b1b;
      --clr-txt: #939393;
      --clr-title: #d3d3d3;
      --clr-title-light: #c7c7c7;
      --clr-nav: rgba(46, 45, 45, 0.89);
    }

    background-color: var(--clr-bg);
    color: var(--clr-txt);

    h1, h2 {
      color: var(--clr-title);
    }

    h3 {
      color: var(--clr-title-light);
    }

  }


  .hero.gatsby-image-wrapper { //todo fix this
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

`;

export const Main = styled.main`
  flex: 1;
  position: relative;
  min-height: 100vh;
`