import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";

export const result = graphql`
  query($slug: String){
    productJson(slug: { eq: $slug }){
      title
      description
      price
      image{
        childImageSharp{
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;


const Product = ({ data }) => {
  const product = data.productJson;
  console.log( product );

  return (
    <div>
      <h1>{ product.title }</h1>
      <Image
        fluid={ product.image.childImageSharp.fluid.base64 }
        alt={ product.title }
        style={ { float: 'left', marginRight: "1rem", width: 250 } }
      />
      <h3>{ product.price }</h3>
      <div dangerouslySetInnerHTML={ { __html: product.description } } />
    </div>
  );
};

export default Product;