import React from "react";
import styled, { css } from "styled-components";
import {
  heightWidth, largeUp,
  mediumDown,
  mediumUp, smallDown,
  smallUp,
  spacing,
  text, title,
  xLargeUp,
  xxLargeUp
} from "../../../../styles/mixins";
import { Container } from "@material-ui/core";

const ArticleContainer = styled.div`
  
  ${ spacing( "pt", 22 ) };
  ${ spacing( "pb", 10 ) };
  ${ spacing( "mt", -16 ) };

  //background-color: #e0e0e0;
   
 
  color: var(--dark);
  //border: thick solid blue;

`;

const ArticleWrapper = styled ( Container ) `
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 20px;

  //color: #02021e;

  ${ xxLargeUp( css`
      max-width: 900px;
    ` ) };
  
  ${ smallUp( css`
       // ${ spacing( "ph", 3 ) };

  ` ) };

  & > :not(figure) {
    width: auto;
    margin: auto;
    max-width: 100%;

    ${ largeUp( css`
      max-width: 720px;
    ` ) };

    ${ xxLargeUp( css`
      max-width: 900px;
    ` ) };

  }


  blockquote{
    font-family: var(--gramatika);
    max-width: 35rem;
    text-align: right;
    margin: 2.75rem auto;
    //border: thin solid red;
    
    ${ smallUp(css`
      margin: 4.2rem auto 1.18rem ;

    `) };
    
    ${ mediumDown(css`
      max-width: 100%;
    `) };

    p {
      ${ text(1.4) };
      color: blue;
      
    }
    
    em{
      ${ text(1.13) };

      //color: inherit;
      opacity: .8;
    }
    
    cite {
      display: flex;
      align-items: center;
      font-weight: 300;
      line-height: 160%;
      letter-spacing: 0.5px;
      ${ text(1.13) };
      font-style: normal;
      color: rgba(0 0 0 / 70%);

      > span {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 1rem;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
  }
  
  h2{
    font-family: var(--gramatika);
    ${title(1.9)};
    line-height: 1.3; 
    font-weight: bold;
    letter-spacing: -0.2px;
    margin-top: calc(3rem * var(--halo));
    margin-bottom: calc(.7rem * var(--halo));
    
    ${ smallUp(css`
      margin-top: calc(3.7rem * var(--halo));
      margin-bottom: calc(1rem * var(--halo));
      line-height: 45px;
      letter-spacing: 0.5px;

    `) };
    
  }

  h3 {
    font-family: var(--gramatika);
    ${title(1.65)};
    font-weight: bold;
    margin-top: calc(2.5rem * var(--halo));
    margin-bottom: calc(1rem * var(--halo));
    
    
    ${ smallUp( css`
      line-height: 160.6%;
      letter-spacing: 0.5px;
    ` ) };
    
  }

  h4 {
    font-family: var(--gramatika);
    ${title(1.65)};
    line-height: 35px;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
  }

  p {
    font-family: var(--sofia-pro);
    //font-size: 1.13rem;
    ${ text(1.13) };

    line-height: 1.3;
    font-weight: 300;
    letter-spacing: -0.2px;
    margin-bottom: calc(1.5rem * var(--halo));
    
    ${ mediumUp( css`
      letter-spacing: .5px;
      line-height: 161%;

    ` ) };
    
  }

  ul, ol {
    list-style: none;
    font-family: var(--sofia-pro);
    ${ text(1.135) };
    line-height: 25px;
    font-weight: 300;
    letter-spacing: 0.5px;
    padding-left: 10px;
    margin-bottom: calc(1.5rem * var(--halo));


    & > li {
      position: relative;
      padding-left: 24px;
      margin-bottom: 2rem;

      &:before {
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }

  ul {

    & > li {

      &:before {
        content: '•';
      }
    }
  }

  ol {
    counter-reset: list-number;

    & > li {
      counter-increment: list-number;

      &:before {
        content: counter(list-number) '.';
      }
    }
  }

  a {
    font-family: var(--sofia-pro);
    ${ text(1.13) };
    line-height: 1.5;
    font-weight: 300;
    letter-spacing: 0.5px;
    color: rgb(0, 0, 238);

    &:hover {
      text-decoration: underline;
    }
  }

  strong {
    font-weight: 600;
  }
  
  
`;

const Article = ({ html }) => {
  return (
    <ArticleContainer>



      <ArticleWrapper dangerouslySetInnerHTML={ { __html: html } }
                      fixed={true}
                      maxWidth={'md'}
                      disableGutters={false}
                      className='article-wrapper' />

    </ArticleContainer>
  );
};

export default Article;
