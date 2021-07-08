import React from "react";
import styled, { css } from "styled-components";
import CardMedia from "@material-ui/core/CardMedia";
import { largeUp, mediumUp, smallUp, spacing } from "../../../styles/mixins";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const StyledThumbnail = styled.div`
  width: 88%;
  margin-left: auto; //center it
  margin-right: auto;
  height: 100%;
  //aspect-ratio: 4 / 1;
  //padding-bottom: 47%;
  position: relative;

  //border: thin solid red;
  overflow: hidden;

  .image-wrapper {
    width: 100%;
    height: 100%;
    display: block;


    img {
      max-width: 100%;
      width: 100%;
    }
  }

  ${ spacing( "mt", -5 ) };
  ${ spacing( "br", 2 ) };

  ${ smallUp( css`
    flex: 1 0;
    margin-top: 0;
    ${ spacing( "ml", -3 ) };

  ` ) }
  
  ${ mediumUp( css`
    ${ spacing( "ml", -5 ) };
    height: 350px;

  ` ) }
  
  ${ largeUp( css`
    ${ spacing( "ml", -7 ) };
  ` ) }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(137.81deg, #e7a28f 3.52%, #f9d6ac 41.89%, #fbfefc 96.77%);
    opacity: 0.3;

    ${ spacing( "br", 2 ) };
  }

`;


const Thumbnail = ({ media }) => {


  return (
    <StyledThumbnail
      image={
        media
      }
    >
      <GatsbyImage alt={ "featured image" } objectFit="cover"
                   objectPosition="center"
                   className="image-wrapper" image={ getImage( media ) } />

    </StyledThumbnail>
  );
};


export default Thumbnail;