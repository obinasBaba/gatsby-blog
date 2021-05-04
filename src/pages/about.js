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


const About = ({ data }) => {

  const { customTxt, title, description } = data.site.siteMetadata;

  return (
    <Layout>
      <h1>About</h1>

      <h2> {customTxt} </h2>

    </Layout>
  );
};

export default About;
