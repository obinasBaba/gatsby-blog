import React from "react";
import styled from "styled-components";

const Article = styled.article`
  padding: 2rem;
`

export default function BlogPost({ title, date, excerpt }) {
  return (
    <Article >
      <h2>{title}</h2>
      <h3>{date}</h3>
      <p>{excerpt}</p>
    </Article>
  );
}