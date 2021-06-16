import React from "react";
import styled, { css } from "styled-components";
import { heightWidth, mediumDown, mediumUp, smallUp, spacing, xLargeUp } from "../../../../styles/mixins";

const ArticleContainer = styled.div`
  //@include hl-margin('top', -160px);
  //@include hl-padding('top', 220px);
  //@include hl-padding('bottom', 100px);
  //@include hl-font-size-text(18px);

  border: var(--thin);

  ${ spacing( "pt", 22 ) };
  ${ spacing( "pb", 10 ) };
  ${ spacing( "mt", -16 ) };

  background-color: #fff;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.5px;
  font-weight: 300;
  //color: $dark-color;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;

const ArticleWrapper = styled.div`

  ${ spacing( "max-width", 76 ) };

  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 20px;
  color: #02021e;

  //border: thin solid yellow;

  & > :not(figure) {
    width: auto;
    margin: auto;
    max-width: 720px;

    ${ xLargeUp( css`
      max-width: 900px;
    ` ) };

    
    ${ mediumDown( css`
      max-width: 100%;

    ` ) };
  }

  blockquote{
    font-family: var(--gramatika);
    font-size: 1.7rem;
    line-height: 2.9rem;
    color: blueviolet;
    max-width: 27rem;
    margin: 3.7rem auto;  //todo figure this out
    
    ${ mediumUp( css`
      margin: 5.7rem auto 4.3rem auto;
    ` ) };
    
    ${ mediumDown(css`
      max-width: 100%;
    `) };

    p {
      font-family: var(--sofia-pro);
      font-weight: 300;
      line-height: 150%;
      letter-spacing: 0.5px;
      font-size: 1.0rem;
      color: blueviolet;
      text-align: end;
    }

    cite {
      display: flex;
      align-items: center;
      font-family: var(--sofia-pro);
      font-weight: 300;
      line-height: 160%;
      color: rgba(dark, 0.8);
      letter-spacing: 0.5px;
      font-size: 1.3rem;
      font-style: normal;

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
    font-size: 30px;
    line-height: 45px;
    font-weight: bold;
    margin-top: 3rem;
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
    
    ${ smallUp(css`
      margin-top: 3.9rem;
    `) };
    
  }

  h3 {
    font-family: var(--gramatika);
    font-size: 26px;
    line-height: 40px;
    font-weight: bold;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
  }

  h4 {
    font-family: var(--gramatika);
    font-size: 22px;
    line-height: 35px;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
  }

  p {
    font-family: var(--sofia-pro);
    font-size: 18px;

    line-height: 30px;
    font-weight: 300;
    letter-spacing: 0.5px;
    margin-bottom: 1.5rem;
    color: #02021e;

    
    ${ smallUp( css`
      font-size: 18px;
      margin-bottom: 1.5rem;

    ` ) };
  }

  ul, ol {
    list-style: none;
    font-family: var(--sofia-pro);
    font-size: 18px;
    line-height: 25px;
    font-weight: 300;
    letter-spacing: 0.5px;
    padding-left: 10px;
    margin-bottom: 1.5rem;

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
    font-size: 18px;
    line-height: 30px;
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
                      className='article-wrapper' />

    </ArticleContainer>
  );
};

export default Article;
