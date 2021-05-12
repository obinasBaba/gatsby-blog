import React from "react";
import { FaTwitter } from "react-icons/all";
import { Fab, Typography } from "@material-ui/core";
import PageContent from "./components/PageContent";
import FilterDrawer from "./components/FilterDrawer";
import styled from "styled-components";


const ArticleEffect = styled( Typography )`
  position: fixed;
  top: 13%;
  font-size: 12rem;
  right: -5%;
  font-weight: 900;
  opacity: .09;
  z-index: -9999;
  background-image:
          linear-gradient(to right, #e8e8e8 10%, #ff0808 ${ ({open}) => open ? '70%': '170%' });
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;


`

export default function PersistentDrawerRight() {

  const [open, setOpen] = React.useState( true );

  const handleDrawerOpen = () => {
    setOpen( !open );
  };

  return (
    <div style={ {
      display: "flex",
      position: "relative",
      minHeight: '100vh',
      overflow: 'hidden',
    } }>

      <PageContent open={open} />

      <FilterDrawer open={ open }/>

      <Fab color='primary'
           onClick={ handleDrawerOpen }
           style={{
        position: 'fixed',
        right: '5%',
        bottom: '5%',
        zIndex: 99999
      }}>
        < FaTwitter />
      </Fab>

      <ArticleEffect variant='h1' open={open}   >
        BLOG
      </ArticleEffect>

    </div>
  );
}