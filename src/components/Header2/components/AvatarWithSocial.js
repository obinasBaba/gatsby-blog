import React from "react";
import { Avatar, Divider } from "@material-ui/core";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/all";
import styled from "styled-components";
import { heightWidth } from "../../../styles/mixins";
import img from './img_1.png';
import { Link } from "gatsby";

const AvatarSocial = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: calc( 0.5rem * var(--indent));
  margin-right: auto;
  color: var( --clr-title );

  .divider{
    background-color: var( --clr-txt );
    //height: 30px;
    ${ heightWidth('height', 3) };
    width: 1px;
    margin: 0 calc( 0.5rem * var(--indent));
  }
`;

const AvatarWithSocial = () => {
  return (

    <AvatarSocial>

      <Link to='/' >
        <Avatar src={img} />
      </Link>

      <div className="divider"/>

      <FaTwitter />
      <FaGithub />
      <FaLinkedin />

    </AvatarSocial>
  );
};

export default AvatarWithSocial;
