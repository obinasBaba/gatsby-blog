import React from "react";
import styled, { css } from "styled-components";
import { Card } from "@material-ui/core";
import { shadow, smallUp, spacing } from "../../../../../styles/mixins";



const StyledBlogCard = styled( Card )`
  margin: auto;
  border-radius: ${ ( {theme: {spacing}} ) => spacing( 2 ) + 'px' }; // 16px
  ${ spacing('br', 2) };
  ${ shadow() };
  transition: 0.3s;
  position: relative;
  width: clamp(200px, 72vw, 500px);
  
  //backdrop-filter: blur(10px);
  //background-color: rgba( 255, 255, 255 , .2);
   //border: solid 2px transparent;
  
  //background-attachment: fixed;
  background-clip: padding-box;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png");
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  overflow: initial;
  //background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-Bottom: ${ ( {theme: {spacing}} ) => spacing( 2 ) + 'px' };;
  
  &::before{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: ${ ( {theme: {spacing}} ) => spacing( 2 ) + 'px' }; // 16px
    backdrop-filter: blur(10px);
    background-color: rgba( 255, 255, 255 , .8);

    
    overflow: hidden;
    //z-index: -1;
  }
  
  ${ smallUp( css`
    flex-direction: row;
    ${ spacing( 'pt', 2 ) };
    width: clamp(500px, 75vw, 700px);
  `)};
`

const BlogCard = ({ children }) => {
  return (
    <StyledBlogCard>
      {children}
    </StyledBlogCard>
  );
};

export default BlogCard;
