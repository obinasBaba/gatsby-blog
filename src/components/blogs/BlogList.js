import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BlogPost from "./BlogPost";


const BlogList = () => {

  const data = useStaticQuery( graphql`
    query{
        allMdx( filter: {fileAbsolutePath: {regex: "/\\/src\\/blog/"}} ){
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

  // console.log( data, '----data' );

  return (

    <div>
      {data.allMdx.nodes.map( ({ id, excerpt, frontmatter }) => (
        <BlogPost
          key={ id}
          title={ frontmatter.title}
          date={ frontmatter.date}
          excerpt={excerpt} />
      ))}
    </div>
  );
}
;

export default BlogList;
