import React, { useEffect } from "react";

const Tags = ({location, data}) => {

  useEffect(() => {

    let urlParams = new URLSearchParams(location.search)

    console.log(urlParams.get('tag'));
  })


  return (
    <div>
      {
        location.toString()
      }
    </div>
  );
};

export default Tags;
