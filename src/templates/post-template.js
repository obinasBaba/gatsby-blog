import React from "react";
import * as styles from "../css/postTemplate.module.css";
import { Link, graphql } from "gatsby";
import Image from "gatsby-image";
import Layout from "../components/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { FaDev, FaGithub, FaTwitterSquare } from "react-icons/fa";
import { kebabCase } from "lodash";

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
      tags
      twitter
      github
      dev
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

  const { title, date, author, twitter, github, dev, image, tags } = data.mdx.frontmatter;
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

          <h5>
            {tags.map((tag, index) => <Link to={ `/tags/${kebabCase(tag)}`}
                                            key={index}
                                            className={styles.tagLink}> #{tag} </Link>)

            }
          </h5>

        </div>

        <Image fluid={ img } />

        <div className={ styles.content }>
          <MDXRenderer>{ body }</MDXRenderer>
        </div>


        <div className={ styles.author }>
          <h1>{ author }</h1>
          { twitter && <a href={ twitter }
                          target="_blank"
                          rel="noopener noreferrer">{ <FaTwitterSquare /> }</a> }

          { github && <a href={ github }
                         target="_blank"
                         rel="noopener noreferrer">{ <FaGithub /> }</a> }

          { dev && <a href={ dev }
                      target="_blank"
                      rel="noopener noreferrer">{ <FaDev /> }</a> }
        </div>

      </section>
    </Layout>
  );
};
export default postTemplate;