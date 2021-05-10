import React from "react";
import { Container, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";
import { AboutParagraph, AboutText, HelloTxt, HeroWrapperGird } from "./components";


const Hero = () => {

  // const media = useMediaQuery( "(min-width: 632px) and (max-width: 960px)" );

  const theme = useTheme();
  const media2 = useMediaQuery( theme.breakpoints.up( "md" ) );


  return (

    < Container maxWidth="md">

      <HeroWrapperGird>

        <HelloTxt>
          <Typography variant="h1">
            Hi, I'm Henok
          </Typography>

          <svg xmlns="http://www.w3.org/2000/svg" width="49px" viewBox="0 0 80.738 80.738">
            <g id="_1f44b-1" data-name="1f44b-1" transform="translate(0 -0.042)">
              <path id="Path_1" data-name="Path 1"
                    d="M6.187,17.616a6.237,6.237,0,0,1,7.187.373L11.2,14.83c-1.749-2.495-1.123-5.193,1.374-6.945a5.527,5.527,0,0,1,7.693,1.358L40.091,37.494l.157-.07-18.1-26.594a5.194,5.194,0,0,1,1.084-7.479,5.574,5.574,0,0,1,7.76,1.372l23.4,33.051a5.606,5.606,0,0,1-1.619,7.74,5.455,5.455,0,0,1-1.363.671v20.5H28.952v-6.99a32.021,32.021,0,0,1-2.432-2.086L4.815,25.426A5.6,5.6,0,0,1,6.187,17.616Z"
                    transform="translate(4.728 2.869)" fill="#ef9645" />
              <path id="Path_2" data-name="Path 2"
                    d="M3.166,36.992s-2.542-3.7,1.165-6.244,6.242,1.163,6.242,1.163l11.79,17.195A23.043,23.043,0,0,1,23.711,47.1L7.347,23.237s-2.539-3.7,1.165-6.242,6.242,1.163,6.242,1.163L30.146,40.6c.573-.467,1.159-.936,1.763-1.4L14.065,13.182s-2.539-3.7,1.165-6.242S21.473,8.1,21.473,8.1L39.316,34.124c.656-.4,1.3-.75,1.956-1.118L24.594,8.685s-2.539-3.7,1.163-6.242S32,3.606,32,3.606L49.634,29.324l1.412,2.059,1.269,1.852a22.5,22.5,0,0,0-5.82,31.215,2.2,2.2,0,0,0,3.121.584c-7.618-11.112-5.292-23.6,5.82-31.217l-3.276-16.4s-1.224-4.32,3.094-5.546,5.546,3.1,5.546,3.1l3.783,11.236A99.77,99.77,0,0,0,69.792,39.3,26.946,26.946,0,0,1,23.484,66.623c-.445-.651-.817-1.287-1.172-1.92l-.1.067L3.166,36.992Z"
                    transform="translate(2.885 1.881)" fill="#ffdc5d" />
              <g id="Group_10" data-name="Group 10" transform="translate(0 0.042)">
                <path id="Path_3" data-name="Path 3"
                      d="M24.506,43.3c-8.981,0-18.057-9.076-18.057-18.057A2.165,2.165,0,0,0,4.3,23a2.326,2.326,0,0,0-2.34,2.245c0,13.472,9.076,22.548,22.548,22.548a2.326,2.326,0,0,0,2.245-2.34A2.165,2.165,0,0,0,24.506,43.3Z"
                      transform="translate(2.438 28.548)" fill="#5dadec" />
                <path id="Path_4" data-name="Path 4"
                      d="M15.717,73.851c-6.736,0-11.227-4.491-11.227-11.227a2.245,2.245,0,1,0-4.491,0A15.348,15.348,0,0,0,15.717,78.341a2.245,2.245,0,1,0,0-4.491ZM53.888,2a2.245,2.245,0,1,0,0,4.491c8.981,0,17.963,8.059,17.963,17.963a2.245,2.245,0,0,0,4.491,0C76.341,12.073,67.36,2,53.888,2Z"
                      transform="translate(0 2.396)" fill="#5dadec" />
                <path id="Path_5" data-name="Path 5"
                      d="M30.245.042A2.168,2.168,0,0,0,28,2.193a2.329,2.329,0,0,0,2.245,2.34A10.781,10.781,0,0,1,41.378,15.665a2.327,2.327,0,0,0,2.34,2.245,2.166,2.166,0,0,0,2.151-2.245A15.41,15.41,0,0,0,30.245.042Z"
                      transform="translate(34.869 -0.042)" fill="#5dadec" />
              </g>
            </g>
          </svg>
        </HelloTxt>

        <StaticImage src="https://i0.wp.com/tilomitra.com/wp-content/uploads/2019/10/1P0A8024.jpg?resize=627%2C940"
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
                       maxWidth: "400px",
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

    </Container>
  );
};

export default Hero;
