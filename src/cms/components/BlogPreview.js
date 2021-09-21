import React from "react";
import { Typography } from "@material-ui/core";

const BlogPreview = ({entry}) => {

  console.log(entry);
  console.log(entry.getIn(['data']).toJS());

  return (
    <div>
      <Typography variant='h1'>
        THis is Custome preview
        {entry.getIn(['data']).toJS().body}
      </Typography>
    </div>
  );
};

export default BlogPreview;
