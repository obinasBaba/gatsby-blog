import { graphql, useStaticQuery } from "gatsby";

const useHeroAssets = () => {
  return useStaticQuery( graphql`
    query{
      heroImg: file(relativePath: {eq: "hand2.svg"}) {
        publicURL
      }
    }
  ` );
};

export default useHeroAssets;