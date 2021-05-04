import React from "react";

const NoDataComponent = ({ pageContext }) => {



  return (
    <div>
      <h1>{ pageContext.title }</h1>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </div>
  );
};

export default NoDataComponent;
