import React from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { transition, arrowTransition, parentVariant, bgVariant, arrowVariant, txtVariant } from "./variants";
import { Link } from "gatsby";
import { smallDown, spacing } from "../../styles/mixins";

const ReadMoreBtn = styled( motion.div )`
  //box-shadow: 0 4px 32px rgba(252, 56, 56, 0.4);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  //font-size: 0.7rem;
  font-weight: bold;
  //color: #ffffff;
  ${ spacing( "mt", 3 ) };
  align-self: start;
  letter-spacing: 1px;
  margin-top: calc(20px * var(--indent)) !important;


  ${ smallDown( css`
    margin: 0 auto;
  ` ) };


  .txt {
    margin: 0;
    padding: .7rem 1rem;
  }

  a {
    text-decoration: none;
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

`;

const Background = styled( motion.div )`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: auto;
  display: block;

  border: ${({clr}) => `2px solid ${clr}`};
  
  
  border-radius: 100px;
  margin: auto;
`;

const Arrow = styled( motion.div )`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  //border: thin solid lightblue;
  transform: rotate(-90deg);

  width: 2.1rem;
  height: 2.1rem;
  padding: .6rem;

  right: 0;
`;


const SlideButton = ({ slug, text = "Read More", color='#fff7a5' }) => {
  return (

    <ReadMoreBtn variants={ parentVariant }
                 initial="initial"
                 animate="animate"
                 whileHover="hover"

    >
      <Link to={ slug } />

      <Background variants={ bgVariant } transition={ transition } clr={color}/>

      <motion.p className="txt" variants={ txtVariant } transition={ transition }>{ text }</motion.p>

      <Arrow variants={ arrowVariant } transition={ arrowTransition }>
        <svg viewBox="0 0 7 4" className="chevron" width="100%" height="100%">
          <path d="M3.5 2.4L.9.1l-.9 1 3.1 2.7c.3.2.7.2.9 0L7 1 6 0 3.5 2.4z"
                fill={color}
                fillRule="evenodd" />
        </svg>
      </Arrow>

    </ReadMoreBtn>
  );
};

export default SlideButton;
