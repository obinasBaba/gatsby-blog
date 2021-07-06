import React from "react";
import { FaAdobe, FaExpand } from "react-icons/all";
import { Fab, Typography, useMediaQuery, Zoom } from "@material-ui/core";
import PageContent from "./components/PageContent";
import FilterDrawer from "./components/FilterDrawer";
import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
import { spacing } from "../../../styles/mixins";


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
  ${ spacing('mt', 16) };
`

export default function DrawerLayout({ children }) {

  const [open, setOpen] = React.useState( false );
  const [fabIndex, setFabIndex] = React.useState( 0 );
  // let fabIndex = 0;

  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('sm'))

  const handleDrawerOpen = (index) => {
    setOpen( !open );
    setFabIndex(index)
  };

  const fabs = [{
    color: "primary",
    icon: <FaExpand />,
    label: "expand"
  }, {
    color: "#123",
    icon: <FaAdobe />,
    label: "colapse"
  }
  ];

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  }

  return (

      <DrawerContainer >

        <PageContent open={ open } children={ children } />

        <FilterDrawer open={ open } />



        {
          fabs.map( (fab, i) => (

            <Zoom key={fab.label}
                  in={fabIndex === i}
                  timeout={transitionDuration}

                  unmountOnExit
            >

              <Fab color="primary"
                   size={ match ? 'medium' : 'small' }
                   onClick={ () => handleDrawerOpen(i) }
                   style={ {
                     position: "fixed",
                     right: "7%",
                     bottom: "4%",
                     zIndex: 99999,
                     opacity: .7,
                   } }>
                {fab.icon}
              </Fab>

            </Zoom>

          ) )
        }

        <ArticleEffect variant="h1" open={ open }>
          BLOG
        </ArticleEffect>

      </DrawerContainer>

  );
}