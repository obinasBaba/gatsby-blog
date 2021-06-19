import React from "react";
import styled from "styled-components";
import { Avatar, Chip } from "@material-ui/core";

const ChipsContainer = styled.div`
  & > * {
    margin: .3rem .2rem;
  }
`

const TagChips = () => {

  let tags = [
    '#react', '#vue', '#Js', '#gatsby', '#css', '#framer-motion', '#Gsap',
    '#Animation'
  ];

  return (
    <ChipsContainer>

      {

        tags.map( txt => <Chip variant='outlined'
                               avatar={ <Avatar>{txt.charAt(1).toUpperCase()}</Avatar> }
                               label={txt}
                               clickable={true}
                               />  )

      }

    </ChipsContainer>
  );
};

export default TagChips;
