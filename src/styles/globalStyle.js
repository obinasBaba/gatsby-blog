import { createGlobalStyle, css } from "styled-components";

const GlobalVariables = css`
  --font-sofia-pro-soft: 'Sofia Pro Soft', sans-serif;
  --font-sofia-pro: 'Sofia Pro', sans-serif;
  --font-gramatika: 'Gramatika', sans-serif;
`

export const GlobalStyle = createGlobalStyle`

  ${ GlobalVariables };
  
  body {
    //background-color: palevioletred;
  }

  .hero.gatsby-image-wrapper {
    
    
    @media (min-width: 600px) and (max-width: 960px) {
      height: 330px;
    }
  }

`;
