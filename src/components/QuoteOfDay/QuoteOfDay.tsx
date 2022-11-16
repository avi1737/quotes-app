import React from "react";
import { Quote } from "../Category/Category";
import styles from "./QuoteOfDay.module.css";

type propTypes = {
  data: Quote;
};

export default function QuoteOfDay(props: propTypes) {
  const {
    data: { quoteString, author, background, tags },
  } = props;

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: 430,
      }}
    >
      <div className={styles.quoteContainer}>
        <p className={styles.quote}>{quoteString}</p>
        <h5 className={styles.authorName}>{author}</h5>
        {tags.map((tag) => (
          <div className={styles.chip}>{tag.name}</div>
        ))}
      </div>
    </div>
  );
}
