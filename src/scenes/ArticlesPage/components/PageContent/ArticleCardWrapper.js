import React from "react";
import ArticleCard from "../ArticleCard";
import Divider from "@material-ui/core/Divider";
import { graphql, useStaticQuery } from "gatsby";



const ArticleCardWrapper = () => {

  const data = useStaticQuery( graphql`
    query{
        blogs: allMdx( filter: {fileAbsolutePath: {regex: "/\\/src\\/blog/"}} ){
            nodes {
                id
                frontmatter {
                    title
                    date(formatString: "MMMM D, YYYY")
                }
                excerpt
            }
        }
    }
` );

  return (
    <>

      {
        data.blogs.nodes.map(({ id, excerpt, frontmatter: {title, date} }) => {
          return (
            <>
              <ArticleCard key={id} title={title} date={date} body={excerpt} />
              <Divider orientation='horizontal'/>
            </>

          );
        })
      }

    </>
  );
};

export default ArticleCardWrapper;
