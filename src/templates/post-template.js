import React from "react";
import * as styles from "../css/postTemplate.module.css";
import { Link, graphql } from "gatsby";
import Image from "gatsby-image";
import Layout from "../components/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

export const result = graphql`
query MyQuery($slug: String) {
  mdx(frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      image {
        absolutePath
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      author
      slug
      title
      date(formatString: "MMM Do, YYYY")
    }
    body
  }
}
`;


const postTemplate = ({ data }) => {

  console.log( data );

  const { title, date, author, image } = data.mdx.frontmatter;
  const { body } = data.mdx;
  const img = image.childImageSharp.fluid;


  return (
    <Layout>
      <section className={ styles.template }>
        <Link to="/" className={ styles.link }>
          back to all posts
        </Link>

        <div className={ styles.info }>
          <h1>{ title }</h1>
          <h4>
            <span>by { author }</span> / <span>{ date }</span>
          </h4>
        </div>

        <Image fluid={ img } />

        <div className={ styles.content }>
          <MDXRenderer>{ body }</MDXRenderer>
        </div>

      </section>
    </Layout>
  );
};
export default postTemplate;