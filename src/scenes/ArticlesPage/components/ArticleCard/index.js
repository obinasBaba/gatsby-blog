import React from "react";
import { Button } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

import styled from "styled-components";
import { spacing } from "../../../../styles/mixins";
import TextInfoContent from "./components/TextInfoContent";
import BlogCard from "./components/BlogCard";
import Thumbnail from "./components/Thumbnail";


const ReadMoreBtn = styled( Button )`
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  box-shadow: 0 4px 32px rgba(252, 56, 56, 0.4);
  border-radius: 100px;
  padding-left: 24px;
  padding-right: 24px;
  font-size: 0.7rem;
  font-family: Sofia Pro Soft, sans-serif;
  font-weight: bold;
  color: #ffffff;
  ${ spacing('mt', 2) };
  align-self: start;
`;

const ArticleCard = ({ date, title, body }) => {

  return (
    <BlogCard>

      <Thumbnail
        image={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png"
        } />

      <CardContent  style={{
        display: 'flex',
        flexFlow: 'column',
        paddingBottom: '0',
        zIndex: 11,
      }} >

        <TextInfoContent
          overline={date}
          heading={title }
          body={body }
        />
        <ReadMoreBtn>Read more</ReadMoreBtn>

      </CardContent>

    </BlogCard>
  );
};

export default ArticleCard;
