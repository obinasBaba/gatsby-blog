import React from "react";
import { graphql } from "gatsby";

const BlogTemplate = ( { data } ) => {
  return (
      <div >
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: {slug: {eq: $slug }}
    ) {
    html
    frontmatter {
      title
    }
  }
  }
`;

export default BlogTemplate;
