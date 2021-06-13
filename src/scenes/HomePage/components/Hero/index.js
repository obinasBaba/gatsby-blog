import React from "react";
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";
import { AboutParagraph, AboutText, HelloTxt, HeroWrapperGird, PaddingContainer } from "./components";
import useHeroAssets from "../../../../hooks/queries/useHeroAssets";

const Hero = () => {

  // const media = useMediaQuery( "(min-width: 632px) and (max-width: 960px)" );

  const theme = useTheme();
  const media2 = useMediaQuery( theme.breakpoints.up( "md" ) );

  const { heroImg } = useHeroAssets();


  return (

    < PaddingContainer maxWidth="md">

      <HeroWrapperGird>

        <HelloTxt>
          <Typography variant="h1">
            Hi, I'm Henok
          </Typography>

          <img src={heroImg.publicURL}
                       placeholder='blurred'
                       style={{
                         width: 'clamp(1.5em, 2em, 43em)'
                       }}

                       alt='waving hand'/>

        </HelloTxt>

        <StaticImage src={ "../../../../images/heroPic.jpg" }
                     placeholder="blurred"
                     className="hero"
                     imgStyle={ {
                       borderRadius: ".5em"
                     } }

                     style={ {
                       border: `.5em solid white`,
                       borderRadius: ".5em",
                       boxShadow: "0 0.5em 1em rgba(0, 0, 0, .15)",
                       gridArea: "img",
                       maxWidth: "330px",
                       alignSelf: "start"
                     } }

                     formats={ ["AUTO", "WEBP", "AVIF"] }

                     alt="hero img" />


        <AboutText gutterBottom={ true } variant={ `${ media2 ? "h5" : "h4" }` }>
          Full-Stack developer working with
          startups to create growth-driven products and Brands
        </AboutText>

        <AboutParagraph>

          <Typography gutterBottom={true}>
            I love coding and the feeling that comes with building something by yourself.
            When I build something new, I usually learn something in the process.
          </Typography>

          <Typography>
            This website is a way for me to chronicle these lessons and ideas. Most of my
            articles are around solutions to problems that we face when building great web products.
          </Typography>


        </AboutParagraph>

      </HeroWrapperGird>

    </PaddingContainer>
  );
};

export default Hero;
