import React from "react";

const withLocation = (ComponentToWrap) => (props) => {
  return (
    <Location>
      {({location, navigate}) => (
        <ComponentToWrap {...props} location={location}  />
      )}
    </Location>
  );
};

export default withLocation;
