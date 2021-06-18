import React from "react";
import styled, { css } from "styled-components";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { FaLinkedin } from "react-icons/all";
import ListItemText from "@material-ui/core/ListItemText";
import { largeUp } from "../../../../styles/mixins";

const drawerWidth = 300;


const DrawerContainer = styled( Drawer )`
  padding-top: 4rem;
  width: ${ 0 }px;


  //backdrop-filter: blur(5px);
  background-color: rgba(130, 107, 107, 0.24);
  border: solid 2px transparent;
  background-clip: padding-box;

  border: thick solid palevioletred;

  background: palegoldenrod;

  ${ largeUp( css`
    width: ${ drawerWidth }px;
  ` ) };

  & > .MuiDrawer-paper {
    width: ${ drawerWidth }px;
    padding-top: 3rem;
    top: 70px;

    backdrop-filter: blur(5.45px);
    border: solid 2px transparent;
    background-clip: padding-box;
    box-shadow: 10px 80px 20px rgba(0, 0, 0, .14);

    background: rgba(128, 128, 128, 0.38);

    opacity: 1;
    z-index: 999;
  }

`;


const FilterDrawer = ( {open} ) => {
  return (
    <DrawerContainer variant="persistent" anchor="right" open={ open }>


      <Divider />
      <List>
        { ["Inbox", "Starred", "Send email", "Drafts"].map( (text, index) => (
          <ListItem button key={ text }>
            <ListItemIcon>{ index % 2 === 0 ? <FaLinkedin /> : <FaLinkedin /> }</ListItemIcon>
            <ListItemText primary={ text } />
          </ListItem>
        ) ) }
      </List>
      <Divider />
      <List>
        { ["All mail", "Trash", "Spam"].map( (text, index) => (
          <ListItem button key={ text }>
            <ListItemIcon>{ index % 2 === 0 ? <FaLinkedin /> : <FaLinkedin /> }</ListItemIcon>
            <ListItemText primary={ text } />
          </ListItem>
        ) ) }
      </List>
    </DrawerContainer>
  );
};

export default FilterDrawer;
