import React from "react";
import { Avatar, Chip, Typography } from "@material-ui/core";
import styled from "styled-components";
import { spacing } from "../../../../../styles/mixins";

const SeriesPostsContainer = styled.div`
 
`
const SeriesContainer = styled.div`
  ${ spacing('pl', 2) };
  ${ spacing('pt', 2) };
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  gap: .7rem;
  
  
`

const Tags = styled( Typography )`
  font-size: .75rem;
  letter-spacing: .5px;
  //text-transform: uppercase;
`;

const SeriesPosts = () => {
  return (
    <SeriesPostsContainer>

      <Typography variant={'h6'}> Series Posts : </Typography>


      <SeriesContainer>

        <Chip variant='outlined'
              label='Three faces of your plan'
              clickable={true}
              size='small'
        />


        <Chip variant='outlined'
              label='Magnetic button with framer-motion. '
              clickable={true}
              size='small'
        />

        <Chip variant='outlined'
              label='Things to consider while animating'
              clickable={true}
              size='small'
        />

      </SeriesContainer>



    </SeriesPostsContainer>
  );
};

export default SeriesPosts;
