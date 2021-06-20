import React from "react";
import { Avatar, Divider } from "@material-ui/core";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/all";
import styled from "styled-components";
import { heightWidth } from "../../../styles/mixins";

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

      <Avatar src="https://i0.wp.com/tilomitra.com/wp-content/uploads/2019/10/1P0A8024.jpg?resize=627%2C940" />

      <div className="divider"/>

      <FaTwitter />
      <FaGithub />
      <FaLinkedin />

    </AvatarSocial>
  );
};

export default AvatarWithSocial;
