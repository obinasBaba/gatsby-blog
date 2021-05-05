import React from "react";
import * as styles from "../css/taglist.module.css";
import { Link } from "gatsby";
import { kebabCase } from 'lodash';

const TagList = ({ tags }) => {
  var tmpArr = [];

  console.log(tags);

  tags.forEach( edge => {
    if(edge.node.frontmatter.tags === null )
      return;

    tmpArr = [...tmpArr,  ...edge.node.frontmatter.tags];

  } );

  tmpArr = [...new Set( tmpArr )];

  return (
    <section className={ styles.tagList }>
      <div className={ styles.boxTag }>
        <h2>Tags</h2>
        { tmpArr.map( (tag, index) => {

          return <Link to={ `/tags/${ kebabCase(tag) }` }
                       key={ index }
                       className={ styles.link }> { tag } </Link>;
        } ) }
      </div>
    </section>
  );
};
export default TagList;