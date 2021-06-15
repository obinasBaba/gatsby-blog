import React from "react";
import styled from "styled-components";

const StyledPage =  styled.main`
  display: flex;
  height: 100%;
  position: relative;
  flex-flow: column;
  flex-direction: column;
  overflow: hidden;
  min-height: 100vh;
`

const Page = ( {children} ) => {
  return (
    <StyledPage>
      {children}
    </StyledPage>
  );
};

export default Page;
