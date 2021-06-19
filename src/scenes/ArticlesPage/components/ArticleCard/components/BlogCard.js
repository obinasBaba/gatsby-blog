import React from "react";
import styled, { css } from "styled-components";
import { shadow, smallUp, spacing } from "../../../../../styles/mixins";
import { motion } from "framer-motion";


const StyledBlogCard = styled( motion.div )`
  margin: auto;
  box-shadow: 0 5px 20px rgba(34, 45, 58, 0.2);
  //transition: 0.3s;
  position: relative;
  width: calc(100% + 20px);
  transform: translateX(-10px) !important; //killing framer-motion x specificity
  
  display: flex;
  flex-direction: column;
  align-items: center;
  //backdrop-filter: blur(10px);
  //background-color: rgba( 255, 255, 255 , .2);
   //border: solid 2px transparent;
  background-attachment: fixed;
  background-clip: padding-box;
  background-image: url( ${ ({media}) => media } );
  background-position: 80% 1%;
  background-repeat: no-repeat;
  background-size: cover;
  


  ${ spacing( "br", 2 ) };
  ${ spacing( "mv", 10 ) };
  ${ spacing( "mb", 15 ) };

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: ${ ({ theme: { spacing } }) => spacing( 2 ) + "px" }; // 16px
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, .8);
    overflow: hidden;
    //z-index: -1;
  }

  &::after {
    content: '';
    display: none;
    position: absolute;
    width: 100%;
    transform: translateX(-50%);
    background-color: rgba(191, 191, 191, 0.9);
    height: 1px;
    left: 50%;

    ${ spacing( 'bottom', -7.5 ) };


    ${ smallUp( css`
      display: initial;
    ` ) };
  }


  &:first-child {
    ${ spacing( "mt", 7 ) };
  }

  ${ smallUp( css`
    flex-direction: row;
    width: clamp(500px, 75vw, 785px);
    transform: translateX(0);
    
    ${ shadow() };
    ${ spacing( "pv", 3 ) };
    ${ spacing( 'ml', 1 ) };

  ` ) };
`;

const topVariant = {
  initial: {

  },
  hover: {
  }
}

const innerVariant = {
  initial: {
    scale: 1,
    x: 0
  },
  hover: {
    x: 1,
    y: 1,
    scale: .99 ,
    ['box-shadow']: '0 4px 20px 0 rgba(0, 0, 0, 0.12)',
    transition: {
      ease: 'easeOut',
      type: 'tween',

      ['box-shadow']: {
        type: 'tween',
        duration: .05
      }
    }

  }
}

const BlogCard = ({ children, media }) => {
  return (
      <motion.div variants={topVariant}
                  initial='initial'
                  whileHover='hover'
      >

        <StyledBlogCard variants={innerVariant}
                        media={media}
        >
        { children }
        </StyledBlogCard>

      </motion.div>
  );
};

export default BlogCard;
