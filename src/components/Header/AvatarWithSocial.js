import React from "react";
import { Avatar, Divider } from "@material-ui/core";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/all";
import styled from "styled-components";

const AvatarSocial = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: .5em;
`;

const AvatarWithSocial = () => {
  return (

    <AvatarSocial>

      <Avatar src="https://i0.wp.com/tilomitra.com/wp-content/uploads/2019/10/1P0A8024.jpg?resize=627%2C940" />

      <Divider orientation="vertical" flexItem />

      <FaTwitter />
      <FaGithub />
      <FaLinkedin />

    </AvatarSocial>
  );
};

export default AvatarWithSocial;
