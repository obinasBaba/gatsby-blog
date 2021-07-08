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


  ${ spacing( "br", 3 ) };
  ${ spacing( "mv", 11 ) };
  // ${ spacing( "mb", 15 ) };

  &:before {
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
    //z-index: -1;
  }

  &::after {
    content: '';
    display: none;
    position: absolute;
    //width: 100%;
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
  }
}

const BlogCard = ({ children, media }) => {
  return (
      <motion.div variants={topVariant}
                  initial='initial'
                  whileHover='hover'>

        <StyledBlogCard variants={innerVariant} media={media}>
          { children }
        </StyledBlogCard>

      </motion.div>
  );
};

export default BlogCard;
