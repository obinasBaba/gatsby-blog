import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled, { css } from "styled-components";
import { heightWidth, mediumUp, smallUp, spacing } from "../../../../styles/mixins";
import { Link } from "gatsby";
import { Grid, Typography } from "@material-ui/core";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const CardContainer = styled( Grid )`
  display: flex;
  flex-direction: column;
  //border: thin solid greenyellow;
  //padding-top: 2rem;

  ${ mediumUp( css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 0;

  ` ) };

  &:not(:first-child) {
    position: relative;
    ${ spacing( "mt", 8 ) };

    &::before {
      content: '';
      display: none;
      position: absolute;
      width: calc(100% + (40px * var(--indent)));
      height: 1px;
      ${ spacing( "top", -4 ) };

      left: 50%;
      transform: translateX(-50%);
      background-color: var(--clr-accent);


      ${ smallUp( css`
        display: initial;
      ` ) };
    }
  }
`;

const ImageBox = styled.div`
  width: calc(100% + 48px);
  transform: translateX(-24px);
  height: 100%;


  ${ smallUp( css`
    ${ heightWidth( "max-width", 20 ) };
    width: calc(100%);
    transform: translateX(0);
    //flex: 1 1;

  ` ) };

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-wrapper {
    width: 100%;
    height: 100%;
  }
`;

const Description = styled.div`
  margin-top: calc(1rem * var(--indent));

  ${ mediumUp( css`
    margin-top: 0;
    ${ spacing( "ml", 4 ) };
    flex: 1 1;


  ` ) };
`;

const Tag = styled( Typography )`
  //font-family: var(--gramatika);
  //font-weight: 700;
  //text-transform: capitalize;
  color: gray;
  opacity: .9;
  font-size: .75rem;
  letter-spacing: .5px;
`;

const Title = styled( Typography )`
  font-weight: bolder;
`;

export default function ProjectCard({ imgSrc, title, tags, link }) {

  return (
    <CardContainer>

      <ImageBox>
        <GatsbyImage alt={ title }
                     className={ "image-wrapper" }
                     objectFit={ "cover" }
                     image={ getImage( imgSrc ) } />
      </ImageBox>

      <Description>

        <Link to={ link }>
          <Tag>{

            tags ? tags.map( ({ tag }) => tag + ", " ) : "no-tags"


          }</Tag>


          <Title>
            { title }
          </Title>
        </Link>

      </Description>


    </CardContainer>
  );
}