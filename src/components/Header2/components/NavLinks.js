import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Typography } from "@material-ui/core";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  & > :not( :first-child){
    margin-left: 1rem;
  }

  & a {
    text-decoration: none;
    color: initial;
  }
  
  p{
    font-weight: 400;
  }

`;

const NavLinks = () => {
  return (
    <Nav>

      <Link to="/blog">
        <Typography variant="body1">
          Articles
        </Typography>
      </Link>
      <Link to="/timeline">
        <Typography variant="body1">
          Timeline
        </Typography>
      </Link>
      <Link to="/">
        <Typography variant="body1">
          About
        </Typography>
      </Link>

    </Nav>
  );
};

export default NavLinks;
