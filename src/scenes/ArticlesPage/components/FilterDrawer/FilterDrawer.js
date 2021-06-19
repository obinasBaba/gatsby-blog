import React from "react";
import styled, { css } from "styled-components";
import { heightWidth, largeUp, spacing } from "../../../../styles/mixins";
import { motion } from "framer-motion";
import { TextField } from "@material-ui/core";
import TagChips from "./TagChips";
import SeriesPosts from "./SeriesPosts";

const drawerWidth = 300;

const containerVariant = {
  initial: {

  },
  animate(custom){
    if (custom.open)
      return {
      x: 0,
        transition: {
          delay: .2
        }
    };

    return {
      x: 300,
      transition: {
        delay: .3
      }
    }
  },
  exit: {
    x: 300,
  },
}

const DrawerContainer = styled( motion.div )`
  width: 0;
  z-index: 999;

  ${ largeUp( css`
    width: ${ drawerWidth }px;
  ` ) };


  & .inner-container {
    background: rgba(238, 232, 170, 0.8);
    padding-top: 4rem;
    ${ heightWidth( 'width', 30 ) };
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;

    ${ spacing( 'ph', 2 ) };

    & > :nth-child( n + 1 ) {
      ${ spacing('mt', 3) };
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
