import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

export const result = graphql`
  query{
    site{
      siteMetadata{
        customTxt
      }
    }
  }
`;


const About = () => {


  return (
    <Layout>
      <h1>About</h1>
    </Layout>
  );
};

export default About;
