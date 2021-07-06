import { graphql, useStaticQuery } from "gatsby";
import { useState } from "react";

export const useTagIconsAssets = () => {


  return useStaticQuery( graphql`
    query  {
      icons: allFile( filter: {sourceInstanceName: {regex: "/icons/"}} ) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
      
      tags: allMarkdownRemark(filter: {frontmatter: {contentKey: {eq: "blog"}}}) {
        edges {
          node {
            frontmatter {
              tags {
                tag
              }
            }
          }
        }
  }
}

  ` );

};