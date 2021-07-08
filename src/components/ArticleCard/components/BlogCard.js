import React from "react";
import styled, { css } from "styled-components";
import { shadow, smallUp, spacing} from "../../../styles/mixins";
import { motion } from "framer-motion";


const StyledBlogCard = styled( motion.div )`
  position: relative;
  margin: auto;
  box-shadow: 0 5px 20px rgba(34, 45, 58, 0.2);
  width: calc(100% + 20px);
  transform: translateX(-10px) !important; //killing framer-motion x specificity

  display: flex;
  flex-direction: column;
  align-items: center;
  background-clip: padding-box;
  background-image: url(${ ({ media }) => media });
  background-position: 80% 1%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(238, 232, 170, 0.80);
  border: 2px solid palegoldenrod;


  ${ spacing( "br", 3 ) };
  
  ${ spacing( "mt", 11 ) };
  ${ spacing( "mb", 11 ) };

  /* background for blur effect */
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    ${ spacing( "br", 3 ) };
    backdrop-filter: blur(10px);
    background-color: rgba(238, 232, 170, 0.80);
    overflow: hidden;
  }

  /* divider line */
  &::after {  
    content: ${ ({line}) => line ? '' : null };
    position: absolute;
    background-color: var(--clr-accent);
    height: 1px;

    opacity: .2;
    left: -10%;
    right: -8%;

    ${ spacing( 'bottom', -11 ) };


    ${ smallUp( css`
      display: initial;
    ` ) };
  }


  &:first-child {
    ${ spacing( "mt", 7 ) };
  }

  ${ smallUp( css`
    flex-direction: row;
    width: clamp(500px, 76vw, 800px);
    transform: translateX(0);

    ${ shadow() };
    ${ spacing( "pv", 2 ) };

  ` ) };
  
  ${ ({small}) => small && css`

    flex-direction: column;
    width: calc(100% + 10px);
    transform: translateX(-5px) !important;

    ${ smallUp( css`

      max-width: 400px;
      width: 100%;
      flex-direction: column;
      
  ` ) };
  
  ` };
`;

const topVariant = {
  initial: {
    opacity: 0,
  },
  animate :{
    opacity: 1,
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
  }
}

const BlogCard = ({ children, media, small }) => {
  return (
      <motion.div variants={topVariant}
                  initial='initial'
                  animate='animate'
                  whileHover='hover'>

        <StyledBlogCard variants={innerVariant} media={media} small={small}>
          { children }
        </StyledBlogCard>

      </motion.div>
  );
};

export default BlogCard;
