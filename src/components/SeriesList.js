import React from 'react'
import * as styles from "../css/taglist.module.css"
import { Link } from "gatsby"


const SeriesList = ({ seriesList }) => {
  let tmpArr = [];

  seriesList.forEach(element => {
    if (element.node.frontmatter.series === null)
      return;

    tmpArr = [...tmpArr, element.node.frontmatter.series];
  });

  tmpArr = [...new Set(tmpArr)];

  return (
    <section className={styles.tagList}>
      <div className={styles.boxTag}>

        <h2>Series</h2>

        {tmpArr.map((series, index) => {

          return <Link to={`/series/${series}`}
                       key={index}
                       className={styles.link}> {series} </Link>

        })}
      </div>

    </section>
  )
}
export default SeriesList;