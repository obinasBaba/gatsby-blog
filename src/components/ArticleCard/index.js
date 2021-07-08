import React from "react";
import CardContents from "./components/CardContents";
import BlogCard from "./components/BlogCard";
import Thumbnail from "./components/Thumbnail";


const ArticleCard = ({ date, title, body, slug, featuredMedia, tags, small, line }) => {

  const { childImageSharp, publicURL } = featuredMedia;


  return (
    <BlogCard  media={publicURL} small={small} line={line}>

      <Thumbnail

        media={childImageSharp}
        small={small}

        image={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png"
        } />


        <CardContents
          overline={date}
          title={title }
          body={body }
          slug={slug}
          tags={tags}
          small={small}
        />

    </BlogCard>
  );
};

export default ArticleCard;
