import React from "react";
import { graphql } from "gatsby";
import HeadLine from "./components/Headline";
import Article from "./components/Article";
import styled from "styled-components";

const DIV = styled.div``

const BlogTemplate = ({ data }) => {
  const { title, date, tags, thumbnail } = data.markdownRemark.frontmatter;


  return (
    < >
      <HeadLine title={ title } date={ date } tags={ tags }
                thumbnail={ thumbnail }
      />

      <Article html={ data.markdownRemark.html } />

      <footer/>
    </>
  );
};

export const query = graphql`
      query($slug: String!) {
      markdownRemark(
        fields: { slug: { eq: $slug } }
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
