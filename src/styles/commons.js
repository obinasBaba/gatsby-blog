import { css } from 'styled-components'

export const responsiveVar = css`
  :root {
    --indent: 1; // for margin and padding
    --indent-high: 1;
    --title: 1; // for title font-size
    --text: 1; // for regular text which size less than 20px font-size
    --size: 1; // for element width, height
    --column-width: 100vw / 64; // column width

    --sofia-soft: 'Sofia Pro Soft', sans-serif;
    --sofia-pro: 'Sofia Pro', sans-serif;
    --gramatika: 'Gramatika', sans-serif;
    --abyss: 'abyssopelagic', sans-serif;

    --thin: thin solid crimson;

    // colors
    --clr-accent: palegoldenrod;
    --clr-bg: #1c1b1b;
    --clr-txt: #939393;
    --clr-title: #d3d3d3;
    --clr-nav: rgba(46, 45, 45, 0.78);

    @media screen and (max-width: 1025px) {
      --indent-high: 0.9;
      --title: 0.9;
      --text: 0.9;
    }

    @media screen and (max-width: 768px) {
      --indent: 0.7;
      --indent-high: 0.6;
      --title: 0.8;
      --size: 0.8;
      --text: 0.8;

    }
    @media screen and (max-width: 576px) {
      --indent: 0.5;
      --indent-high: 3.5;
      --title: 0.7;
      --size: 0.7;
    }

    @media screen and (min-width: 1600px) {
      --indent: 1.25;
      --title: 1.25;
      --text: 1.25;
      --size: 1.25;
    }

    //responsive threshold for blog-post margin and padding
    --halo: 1.125;

    @media screen and (max-width: 1920px) {
      --halo: 1;
    }
    @media screen and (max-width: 1400px) {
      --halo: 0.875;
    }
    @media screen and (max-width: 1200px) {
      --halo: 0.75;
    }

  }
`


