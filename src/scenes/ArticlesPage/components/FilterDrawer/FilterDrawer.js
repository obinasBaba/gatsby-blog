import React from "react";
import styled, { css } from "styled-components";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { FaLinkedin } from "react-icons/all";
import ListItemText from "@material-ui/core/ListItemText";
import { heightWidth, largeUp, spacing } from "../../../../styles/mixins";
import { motion } from "framer-motion";
import { TextField, Typography } from "@material-ui/core";
import TagChips from "./TagChips";

const drawerWidth = 280;

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
      x: 280,
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

  ${ largeUp( css`
    width: ${ drawerWidth }px;
  ` ) };


  & .inner-container {
    background: rgba(238, 232, 170, 0.71);
    padding-top: 4rem;
    ${ heightWidth( 'width', 28 ) };
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;

    ${ spacing( 'ph', 2 ) };

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

        <Typography variant={'h6'}> Include Category : </Typography>

        <TagChips />


      </motion.div>


    </DrawerContainer>
  );
};

export default FilterDrawer;
