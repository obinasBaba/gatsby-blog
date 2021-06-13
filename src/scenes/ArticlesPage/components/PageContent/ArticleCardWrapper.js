import React from "react";
import ArticleCard from "../ArticleCard";
import Divider from "@material-ui/core/Divider";
import { graphql, useStaticQuery } from "gatsby";


const ArticleCardWrapper = () => {

  const data = useStaticQuery( graphql`
    query{
      blogs: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "//src/blog/"}}
        sort: {fields: frontmatter___date, order: DESC} 
        ) {
          edges {
            node {
              id
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
              }
            }
          }
      }
    }
` );

  return (
    <>

      {
        data.blogs.edges.map( ({
                                 node: {
                                   id, excerpt, fields: { slug },
                                   frontmatter: { title, date }
                                 }
                               }) => {
          return (
            <>
              <ArticleCard key={ id } title={ title } date={ date }
                           body={ excerpt } slug={ slug} />

              <Divider key={`div${id.toString()}`} orientation="horizontal" />
            </>

          );
        } )
      }

    </>
  );
};

export default ArticleCardWrapper;
