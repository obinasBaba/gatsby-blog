import React from "react";
import Hero from "./components/Hero";
import Articles from "./components/Articles";
import styled from "styled-components";


const RecentWorks = styled.div`  //todo - linking with my portfolio

`

const HomePage = () => {
  return (
    <>
      <Hero />
      <Articles/>
      <RecentWorks/>
    </>
  );
};

export default HomePage;
