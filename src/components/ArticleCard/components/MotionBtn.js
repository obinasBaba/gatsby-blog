import React from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { smallDown, spacing } from "../../../styles/mixins";

const ReadMoreBtn = styled( motion.div ) `
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

  //border: thin solid lightblue;


  ${ smallDown( css`
    margin: 0 auto;
  ` ) };
  
  
  
  .txt{
    margin: 0;
    padding: .7rem 1rem;
  }
  
`;

const Background = styled( motion.div )`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: auto;

  border: 2px solid #CA3B4B;
  border-radius: 100px;

  //width: 2.5rem;
  //height: 2.5rem;

  margin: auto;

`

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
`


const parentVariant = {
  initial: {},
  animate :{},
  hover :{}
}

const txtVariant = {
  initial: {
    x: 0,
  },

  hover: {
    x: '-1.7em',
  }
}

const bgVariant = {
  initial: {
    width: '100%',
    height: '100%'
  },

  hover: {
    width: '2.1rem',
    height: '2.1rem'
  },
}

const arrowVariant = {
  initial: {
    opacity: 0,
    rotate: '-90deg',
    x: -30,

  },

  hover: {
    x: 0,
    opacity: 1,
    transition :{
      opacity: {
        duration: .3,
        // delay: .02,
        ease: [.17, .17, .16, 1]
      },

      default: {
        duration: .33,
        ease: [.17, .17, .16, 1]
      }
    }
  },


}

const transition = {
  duration: .33,
  ease: [.17, .17, .16, 1]
}

const arrowTransition = {
  opacity: {
    duration: .15,
      delay: 0,
      ease: [.17, .17, .16, 1]
  },

  default: {
    duration: .33,
    ease: [.17, .17, .16, 1]
  }
}


const MotionBtn = () => {
  return (
    <ReadMoreBtn variants={parentVariant}
                 initial='initial'
                 animate='animate'
                 whileHover='hover'
    >


      <Background variants={bgVariant} transition={transition} />

      <motion.p className='txt' variants={txtVariant} transition={transition} >Read More</motion.p>

      <Arrow variants={arrowVariant} transition={arrowTransition}>
        <svg viewBox="0 0 7 4" className="chevron" width='100%' height='100%'>
          <path d="M3.5 2.4L.9.1l-.9 1 3.1 2.7c.3.2.7.2.9 0L7 1 6 0 3.5 2.4z" fillRule="evenodd"/>
        </svg>
      </Arrow>

    </ReadMoreBtn>
  );
};

export default MotionBtn;
