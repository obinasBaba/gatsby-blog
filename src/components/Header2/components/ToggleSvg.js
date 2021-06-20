import React from 'react';
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import { heightWidth } from "../../../styles/mixins";

const svgVariants = {};

const sunVariants = {
  transition: {
    duration: 2
  }
}

const moonVariants = {
  initial: {
    pathLength: 0
  },
  transition: {
    duration: 2
  }
}

const lightVariant = {
  initial: {
    pathLength: 0,
  },

}

const ToggleSvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 calc(1.2rem * var(--indent)) 0 0;


  svg {
    ${heightWidth('height', 3)};
    ${heightWidth('width', 3)};
  }
`

const ToggleSvg = () => {

  // const [toggle, setToggle] = useState(true);

  const sun = useAnimation();
  const moon = useAnimation();
  const light = useAnimation();

  let i = true;

  return (
    <ToggleSvgContainer onClick={() => {

      if (i) {

        moon.start( {
          pathLength: 0,
          scale: 0,
        } )

        sun.start( {
          pathLength: 1,
          scale: 1,
          transition: {
            duration: 1,
            // delay: .5
          }
        } );
      }

      else {

        sun.start({
          pathLength: 0,
          scale: 0,
        })

        moon.start( {
          pathLength: 1,
          scale: 1,
          transition: {
            duration: 1,
            // delay: .5
          }
        } );

      }

      i = !i;

    }}

    >
      <motion.svg xmlns="http://www.w3.org/2000/svg"
                  variants={svgVariants}
                  initial='initial'
                  animate='animate'
                  width='100%'
                  height='100%'
                   viewBox="0 0 24 24">
        <g id="toggle" transform="translate(-0.406 -0.762)">

          <motion.path id="sun"
                       variants={sunVariants}

                       animate={sun}
                       onTap={() => {


                       }}
                       d="M12.406,17.763a5,5,0,1,0-5-5A5,5,0,0,0,12.406,17.763Z" fill="none" stroke="var(--clr-title)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="31.42 31.42"/>

          <g id="light">
            <motion.path id="Path_39"
                         variants={lightVariant}
                         animate={light}
                         data-name="Path 39" d="M12.406,1.763v2" fill="none" stroke="var(--clr-title)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="2 2"/>
            <motion.path id="Path_40"
                         variants={lightVariant}
                         animate={light}
                         data-name="Path 40" d="M12.406,21.763v2" fill="none" stroke="var(--clr-title)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="2 2"/>
            <motion.path id="Path_41"
                         variants={lightVariant}
                         animate={light}
                         data-name="Path 41" d="M4.626,4.982,6.046,6.4" fill="none" stroke="var(--clr-title)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="2.008 2.008"/>
            <motion.path id="Path_42"
                         variants={lightVariant}
                         animate={light}
                         data-name="Path 42" d="M18.766,19.122l1.42,1.42" fill="none" stroke="var(--clr-title)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="2.008 2.008"/>
            <motion.path id="Path_43"
                         variants={lightVariant}
                         animate={light}
                         data-name="Path 43" d="M1.406,12.762h2" fill="none" stroke="var(--clr-title)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="2 2"/>
            <motion.path id="Path_44"
                         variants={lightVariant}
                         animate={light}
                         data-name="Path 44" d="M21.406,12.762h2" fill="none" stroke="var(--clr-title)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="2 2"/>
            <motion.path id="Path_45"
                         variants={lightVariant}
                         animate={light}
                         data-name="Path 45" d="M4.626,20.542l1.42-1.42" fill="none" stroke="var(--clr-title)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="2.008 2.008"/>
            <motion.path id="Path_46"
                         variants={lightVariant}
                         animate={light}
                         data-name="Path 46" d="M18.766,6.4l1.42-1.42" fill="none" stroke="var(--clr-title)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="2.008 2.008"/>
          </g>

          <motion.path id="moon"
                       variants={moonVariants}

                       initial='initial'
                       animate={moon}
                       d="M21.192,13.2a9,9,0,1,1-9.79-9.79,7,7,0,0,0,9.79,9.79Z"
                       transform="translate(0.676 -0.25)" fill="rgba(0,0,0,0)" stroke="var(--clr-title)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="60.66 60.66"/>


        </g>
      </motion.svg>

    </ToggleSvgContainer>
  );
};

export default ToggleSvg;
