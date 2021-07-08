import React from "react";
import { graphql } from "gatsby";
import HeadLine from "./components/Headline";
import Article from "./components/Article";
import MoreBlog from "./components/MoreBlog";
import { useRecommendedAssets } from "../../hooks/queries/useRecommendedAssets";

function getRecommendedPosts(allPosts = [], currentPost) {
  const RECOMMENDED_POSTS_LIMIT = 4;
  const recommendedPosts = [];

  while (
    recommendedPosts.length < RECOMMENDED_POSTS_LIMIT &&
    allPosts.length > RECOMMENDED_POSTS_LIMIT
    ) {
    const random = Math.floor( Math.random() * allPosts.length );

    if (
      !recommendedPosts.includes( allPosts[random] ) &&
      allPosts[random].id !== currentPost.id
    ) {
      recommendedPosts.push( allPosts[random] );
    }
  }

  return recommendedPosts;
}

const Blog = ({ data, pageContext }) => {
  const { title, date, tags, thumbnail } = data.markdownRemark.frontmatter;

  const { slug, allPost } = pageContext;

  // const recommendedPosts = getRecommendedPosts( all.edges, data, [allPost, data] )

  console.log( 'context- - -- - -----',  allPost, data);

  return (
    < >
      <HeadLine title={ title } date={ date } tags={ tags ? tags : [] }
                thumbnail={ thumbnail }
      />

      <Article html={ data.markdownRemark.html } />

      <MoreBlog frontmatter={data.markdownRemark.frontmatter}
                slug={slug}
                excerpt={data.markdownRemark.excerpt} />
    </>
  );
};

export const query = graphql`
      query($slug: String!) {
      markdownRemark(
        fields: { slug: { eq: $slug } }
      ){
      
      excerpt(pruneLength: 350, truncate: false)
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

export default Blog;
