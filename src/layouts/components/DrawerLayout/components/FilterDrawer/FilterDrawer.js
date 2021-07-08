import React from "react";
import styled, { css } from "styled-components";
import { heightWidth, mediumUp, spacing, xLargeUp } from "../../../../../styles/mixins";
import { motion } from "framer-motion";
import { TextField } from "@material-ui/core";
import TagChips from "./TagChips";
import SeriesPosts from "./SeriesPosts";

const drawerWidth = 300;

const containerVariant = {
  initial: {},
  animate(custom){
      return {
      x: custom.open ? 0 : 300,
        transition: {
          delay: custom.open ? .2 : .3
        }
    };
  },
  exit: {
    x: 300,
  },
}

const DrawerContainer = styled( motion.div )`
  width: 0;
  z-index: 2;
  color: black;

  ${ xLargeUp( css`
    width: ${ drawerWidth }px;
  ` ) };


  & .inner-container {
    background: rgba(238, 232, 170, 0.6);
    backdrop-filter: blur(10px);
    padding-top: 4rem;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;

    ${ spacing( 'ph', 2 ) };
    ${ heightWidth( 'width', 40 ) };

    ${ mediumUp( css`
      ${ heightWidth( 'width', 30 ) };

    ` ) };


    & > :not( :first-child ) {
      ${ spacing('mt', 2) };
    }

  }

`;


const FilterDrawer = ( {open} ) => {
  return (
    <DrawerContainer>

      <motion.div className='inner-container'
                  variants={containerVariant}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  custom={{ open }}
      >

        <TextField label='search-post'
                   variant='outlined'
                   fullWidth={true}
        />



        <TagChips />

        <SeriesPosts />


      </motion.div>


    </DrawerContainer>
  );
};

export default FilterDrawer;
