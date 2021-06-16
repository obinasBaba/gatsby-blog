import React from "react";
import { graphql } from "gatsby";
import HeadLine from "./components/Headline";

const BlogTemplate = ( { data } ) => {
  const { title, date, tags, thumbnail } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark.html;


  return (
      < >
        <HeadLine title={title} date={date} tags={tags}
                  thumbnail={thumbnail}
        />

        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: {slug: {eq: $slug }}
    ){
        frontmatter {
          contentKey
          date(formatString: "MMMM D, YYYY")
          title
          tags {
            tag
          }
          thumbnail {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, quality: 100)
            }
          }
        }
        html
    }
  }
`;

export default BlogTemplate;
