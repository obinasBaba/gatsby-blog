import React from "react";
import Layout from "../components/Layout";
import * as styles from "../css/home.module.css";
import { graphql, useStaticQuery } from "gatsby";
import PostList from "../components/PostList";

export const getPosts = graphql`
{
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        totalCount
        edges {
            node {
            frontmatter {
                title
                slug
                date(formatString: "MMMM Do, YYYY")
                author
                image {
                childImageSharp {
                    fluid {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
              }
            }
            excerpt
          }
        }
    }
}
`;

const Home =  ({ data }) => {
  console.log('data - >> ', data);
  const response = useStaticQuery(getPosts)
  const posts = response.allMdx.edges

  return (
    <Layout>
      <div className={styles.home}>
        <section className={styles.right__sec}/>

        <section className={styles.blog__sec}>
          <PostList posts={posts} />
        </section>

        <section className={styles.left__sec}/>
      </div>
    </Layout>
  )
}


export default Home;