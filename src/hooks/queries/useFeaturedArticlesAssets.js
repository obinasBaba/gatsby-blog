import { graphql, useStaticQuery } from "gatsby";

export function useFeaturedArticlesAssets() {
  return useStaticQuery( graphql`
    query  {
      featuredArticles: allMarkdownRemark(
        filter: {frontmatter: {contentKey: {eq: "blog"}}}
        sort: {fields: frontmatter___date, order: DESC}
        limit: 3
      ) {
        
        edges {
          node {
            id
            frontmatter {
              tags {
                tag
              }
              thumbnail {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, webpOptions: {quality: 100})
                }
              }
              title
            }
          }
        }
      }
}

  ` )
}