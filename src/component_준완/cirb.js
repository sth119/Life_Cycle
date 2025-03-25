import React from "react";
import styles from "./crib.module.css";
import crib from "./img/crib.png"

const crib1 = () => {
  return (
    <div className={styles.image}>
      <img src={crib} className={styles.image1}></img>
    </div>
  );
};

export default crib1;