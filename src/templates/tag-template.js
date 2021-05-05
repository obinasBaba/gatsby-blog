import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import * as styles from "../css/tagsTemplate.module.css";

export const query = graphql`

query AllTags($tag: [String]) {
  allMdx(
    filter: {frontmatter: {tags: {in: $tag}}}
    sort: {order: ASC, fields: frontmatter___date}
  ) {
  
    totalCount
    edges {
      node {
        frontmatter {
          title
          tags
          slug
          date(formatString: "MMM Do, YYYY")
        }
      }
    }
  }
}


`;

const tagsTemplate = ({ data, pageContext: { tag } }) => {

  console.log( tag );

  const { totalCount, edges } = data.allMdx;
  const tagHeader = `${ totalCount } post${ totalCount === 1 ? "" : "s" } tagged with ${ tag }`;


  return (
    <Layout>
      <section className={ styles.template }>
        <h1>{ tagHeader }</h1>
        <ul>
          { edges.map( ({ node }) => {
            const { title, date, slug } = node.frontmatter;
            return (
              <li key={ slug }>
                <Link to={ `/${ slug }` }>
                  { title } ({ date })
                </Link>
              </li>
            );
          } ) }
        </ul>
      </section>
    </Layout>
  );
};
export default tagsTemplate;