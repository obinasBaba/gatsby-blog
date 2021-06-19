import React from "react";
import { FaTwitter } from "react-icons/all";
import { Fab, Typography } from "@material-ui/core";
import PageContent from "./components/PageContent";
import FilterDrawer from "./components/FilterDrawer";
import styled from "styled-components";
import { motion } from "framer-motion";
import { spacing } from "../../styles/mixins";


const ArticleEffect = styled( Typography )`
  position: fixed;
  top: 13%;
  font-size: 12rem;
  right: -5%;
  font-weight: 900;
  opacity: .1;
  z-index: -9999;
  background-image:
          linear-gradient(to right, #e8e8e8 10%, #ff0808 ${ ({open}) => open ? '70%': '170%' });
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const DrawerContainer = styled( motion.div )`
  display: flex;
  position: relative;
  min-height: 100vh;
  ${ spacing('mt', 5) };
`

export default function DrawerLayout({ children }) {

  const [open, setOpen] = React.useState( false );

  const handleDrawerOpen = () => {
    setOpen( !open );
  };

  return (

      <DrawerContainer >

        <PageContent open={ open } children={ children } />

        <FilterDrawer open={ open } />

        <Fab color="primary"
             onClick={ handleDrawerOpen }
             style={ {
               position: "fixed",
               right: "7%",
               bottom: "5%",
               zIndex: 99999
             } }>
          < FaTwitter />
        </Fab>

        <ArticleEffect variant="h1" open={ open }>
          BLOG
        </ArticleEffect>

      </DrawerContainer>

  );
}