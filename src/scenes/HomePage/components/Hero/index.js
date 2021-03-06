import React from "react";
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";
import { AboutParagraph, AboutText, HelloTxt, HeroWrapperGird, PaddingContainer } from "./components";
import useHeroAssets from "../../../../hooks/queries/useHeroAssets";

const Hero = () => {

  // const media = useMediaQuery( "(min-width: 632px) and (max-width: 960px)" );

  const theme = useTheme();
  // const media2 = useMediaQuery( theme.breakpoints.up( "md" ) );
  //
  // const { heroImg } = useHeroAssets();


  return (

    < PaddingContainer maxWidth="lg">

      <HeroWrapperGird>

        <HelloTxt>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
            <path fill="#EF9645"
                  d="M4.861 9.147c.94-.657 2.357-.531 3.201.166l-.968-1.407c-.779-1.111-.5-2.313.612-3.093 1.112-.777 2.646-.509 3.426.605L19.961 18l.07-.031-8.062-11.844c-.786-1.122-.639-2.544.483-3.331 1.122-.784 2.67-.513 3.456.611l10.42 14.72c.787 1.123.401 2.661-.721 3.447-.191.134-.397.226-.607.299V31H15v-3.113c-.146-.129-.967-.763-1.083-.929L4.25 12.625c-.793-1.129-.519-2.686.611-3.478z" />
            <path fill="#FFDC5D"
                  d="M2.695 17.336s-1.132-1.65.519-2.781c1.649-1.131 2.78.518 2.78.518l5.251 7.658c.181-.302.379-.6.6-.894L4.557 11.21s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l6.855 9.997c.255-.208.516-.417.785-.622L7.549 6.732s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l7.947 11.589c.292-.179.581-.334.871-.498L12.238 4.729s-1.131-1.649.518-2.78c1.649-1.131 2.78.518 2.78.518l7.854 11.454.629.917.565.825c-4.948 3.394-5.419 9.779-2.592 13.902.565.825 1.39.26 1.39.26-3.393-4.949-2.357-10.51 2.592-13.903L24.515 8.62s-.545-1.924 1.378-2.47c1.924-.545 2.47 1.379 2.47 1.379l1.685 5.004c.668 1.984 1.379 3.961 2.32 5.831 2.657 5.28 1.07 11.842-3.94 15.279-5.465 3.747-12.936 2.354-16.684-3.11-.198-.29-.364-.573-.522-.855l-.044.03-8.483-12.372z" />
            <g fill="#5DADEC">
              <path
                d="M12 32.042C8 32.042 3.958 28 3.958 24c0-.553-.405-1-.958-1s-1.042.447-1.042 1C1.958 30 6 34.042 12 34.042c.553 0 1-.489 1-1.042s-.447-.958-1-.958z" />
              <path
                d="M7 34c-3 0-5-2-5-5 0-.553-.447-1-1-1s-1 .447-1 1c0 4 3 7 7 7 .553 0 1-.447 1-1s-.447-1-1-1zM24 2c-.552 0-1 .448-1 1s.448 1 1 1c4 0 8 3.589 8 8 0 .552.448 1 1 1s1-.448 1-1c0-5.514-4-10-10-10z" />
              <path
                d="M29 .042c-.552 0-1 .406-1 .958s.448 1.042 1 1.042c3 0 4.958 2.225 4.958 4.958 0 .552.489 1 1.042 1s.958-.448.958-1C35.958 3.163 33 .042 29 .042z" />
            </g>
          </svg>

          <Typography variant="h1">
            Hi, I'm Henok
          </Typography>

        </HelloTxt>

        <StaticImage src={ "./img_1.png" }
                     placeholder="blurred"
                     className="hero-image"


                     formats={ ["AUTO", "WEBP", "AVIF"] }

                     alt="hero img" />


        <AboutText variant='h4'>
          I'm Front-end developer with a little bit of
          backend knowledge, working with
          startups to create growth&#8209;driven products and Brands.
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
