import React from "react";
import ArticleCard from "../ArticleCard";
import Divider from "@material-ui/core/Divider";



const ArticleCardWrapper = () => {
  return (
    <>
      <ArticleCard />
      <Divider orientation='horizontal'/>
      <ArticleCard />
      <Divider orientation='horizontal'/>
      <ArticleCard />
      <Divider orientation='horizontal'/>
      <ArticleCard />
    </>
  );
};

export default ArticleCardWrapper;
