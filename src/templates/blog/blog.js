import React from "react";
import { graphql } from "gatsby";
import HeadLine from "./components/Headline";

const BlogTemplate = ( { data } ) => {
  return (
      < >
        <HeadLine />
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: {slug: {eq: $slug }}
    ){
        html
        frontmatter {
          title
        }
    }
  }
`;

export default BlogTemplate;
