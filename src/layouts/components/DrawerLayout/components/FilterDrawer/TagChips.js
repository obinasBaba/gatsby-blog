import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Avatar, Chip, Typography } from "@material-ui/core";
import { useTagIconsAssets } from "../../../../../hooks/queries/useTagIconsAssets";
import { navigate } from "gatsby";
import { AppStateContext } from "../../../../../contexts/AppStateContext";

const ChipsContainer = styled.div`
  a {
    text-decoration: none;
    display: inline-block;

  }

  //& .MuiChip-outlined:focus{
  //  background-color: rgba(238, 232, 170, 0.48) !important;
  //}


  & .MuiTouchRipple-root {
    z-index: -2;
  }

  .MuiChip-outlined:hover {
    border: 1.5px solid palegoldenrod;
    
    & .MuiAvatar-img {
      filter: initial;
    }

    & .MuiTouchRipple-root {
      background-color: rgb(238, 232, 170);
    }
  }

  & .MuiChip-outlined:focus {
    background-color: rgba(238, 232, 170, .48);
  }


  .MuiAvatar-img {
    object-fit: contain;
    filter: grayscale(100%);
    transition: all .2s ease-in-out;
  }
`;

const StyledChip = styled( Chip )`
  margin: .3rem .2rem;
  user-select: text;

  .MuiChip-outlined:focus {
    background-color: initial;
  }

  ${ ({ isactive }) => isactive && css`
    background-color: rgba(238, 232, 170, 0.48);
    
    border: 1.5px solid palegoldenrod;

    & .MuiAvatar-img {
      filter: initial;
    }

  ` };
`;

const TagChips = () => {


    const { queryString, setQueryString } = useContext( AppStateContext );

    let { icons, tags } = useTagIconsAssets();
    const [tagsData, setTagsData] = useState( [] );

    useEffect( () => {

      console.log( "havey work" );

      let filteredTags;
      icons = icons.edges.map( (node) => node.node );

      //clearing duplicate using Set()
      filteredTags = tags.edges.map( (node) => node.node.frontmatter.tags )
        .reduce( ((previousValue, currentValue) => {

          currentValue && currentValue.forEach( ({ tag }) => previousValue.add( tag.toLowerCase() ) );

          return previousValue;
        }), new Set() );


      //mapping the cleared data;
      filteredTags = Array.from( filteredTags ).reduce( (previousValue, currentValue, currentIndex) => {

        previousValue.push( {
          tag: currentValue.slice( 1 ),
          icon: icons.find( ({ name }) =>
            name.toLocaleLowerCase() === currentValue.slice( 1 ).toLocaleLowerCase() )
        } );

        return previousValue;

      }, [] );

      setTagsData( filteredTags );

    }, [] );

    useEffect( () => {

      if (queryString !== "")
        navigate( `/tags/?tag=${ queryString }` );
      else
        navigate( `/blog` );


    }, [queryString] );


    return (
      <ChipsContainer>

        <Typography variant={ "h6" }> Tagged with :  </Typography>


        {

          tagsData.map( ({ tag, icon }, index) =>

              // <Link to={ `/tags/?tag=${ queryString }` } key={ tag + index }>

              <StyledChip variant="outlined"
                          key={tag + index}
                          avatar={
                            icon ? <Avatar className="icon" src={ icon.publicURL } /> :
                              <Avatar>{ tag.charAt( 1 ).toUpperCase() }</Avatar>
                          }
                          label={ "#" + tag }
                          clickable={ true }
                          isactive={ queryString.includes( tag ) }
                          onClick={ () => {

                            if (queryString.includes( tag )) {
                              setQueryString( queryString.replace( tag + ",", "" ) );

                            }else
                              setQueryString( `${ queryString + tag },` );

                            // console.log(queryString);
                            // navigate(`/tags/?tag=${queryString}`)


                          }
                          }
              />

            // </Link>
          )

        }

      </ChipsContainer>
    );
  }
;


export default TagChips;
