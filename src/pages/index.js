import React, { useState } from "react";
import Layout from "../components/Layout";
import * as styles from "../css/home.module.css";
import { graphql } from "gatsby";
import PostList from "../components/PostList";
import TagList from "../components/TagList";
import cover from "../images/cover.png";
import { FaSortAmountUp } from "react-icons/all";
import Burger from "../components/burger/Burger";
import Menu from "../components/menu/Menu";
import SeriesList from "../components/SeriesList";
import Advert from "../components/Advert";

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
                tags
                series
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

const Home = ({ data }) => {
  const allPosts = data.allMdx.edges;
  const emptyQuery = "";

  const [state, setState] = useState( { filteredData: [], query: emptyQuery } );
  const [open, setOpen] = useState( false );

  const handleInputChange = event => {
    const query = event.target.value;
    const posts = data.allMdx.edges || [];

    const filteredData = posts.filter( post => {
      const { title, tags, author } = post.node.frontmatter;
      const { excerpt } = post.node;

      return (
        author.toLowerCase().includes( query.toLowerCase() ) ||
        excerpt.toLowerCase().includes( query.toLowerCase() ) ||
        title.toLowerCase().includes( query.toLowerCase() ) ||
        tags.join( "" ).toLowerCase().includes( query.toLowerCase() )
      );
    } );


    setState( {
      query,
      filteredData
    } );
  };

  const { filteredData, query } = state;
  const hasSearchResult = query !== emptyQuery;
  const posts = hasSearchResult ? filteredData : allPosts;


  return (
    <Layout>

      <div className={ styles.mobileMenu }>
        <div>
          <Burger open={ open } setOpen={ setOpen } />
          <Menu open={ open } setOpen={ setOpen } />
        </div>
        <h2 className={ styles.mobileHeader }>My TWD</h2>
        <button type="button" className={ styles.logoBtn }>
          <FaSortAmountUp className={ styles.logoIcon } />
        </button>
      </div>

      <div className={ styles.home }>
        <section className={ styles.right__sec }>
          <TagList tags={ posts } />
        </section>

        <section className={ styles.blog__sec }>

          <div className={ styles.searchBox }>
            <input
              className={ styles.searchInput }
              type="text"
              id="filter"
              placeholder="Type to filter posts..."
              onChange={ handleInputChange }
            />
          </div>

          <PostList posts={ posts } />
        </section>

        <section className={ styles.left__sec }>

          <Advert imgPath={ cover } />

          <SeriesList seriesList={ posts } />

        </section>
      </div>
    </Layout>
  );
};


export default Home;