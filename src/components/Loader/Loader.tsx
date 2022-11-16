import React from "react";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className="wrapper">
      <h1 className={styles.text}>Loading categories...</h1>
    </div>
  );
}

export default Loader;
