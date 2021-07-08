import { graphql, useStaticQuery } from "gatsby";


export const useRecommendedAssets = (slugs) => {
  return useStaticQuery( graphql`
 
 query boo {
  allPost :allMarkdownRemark(filter: {frontmatter: {contentKey: {eq: "blog"}}}) {
    edges {
      node {
        id
        fields {
          slug
        }
        excerpt(pruneLength: 350, truncate: false)
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          tags {
            tag
          }
          title
          thumbnail {
            publicURL
            childImageSharp {
              gatsbyImageData(
                aspectRatio: 1.5
                placeholder: BLURRED
                webpOptions: {quality: 100}
              )
            }
          }
        }
      }
    }
    totalCount
  }
}
  
` );
}