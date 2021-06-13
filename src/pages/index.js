import React from "react";
import HomePage from "../scenes/HomePage";
import BlogList from "../components/blogs/BlogList";


const Home = () => {

  return(
    <main>
      <HomePage />
      <BlogList />
    </main>
  );
};


export default Home;