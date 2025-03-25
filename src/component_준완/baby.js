import React from "react";
import styles from "./baby.module.css";
import ba_by from "./img/baby.png"

const baby = () => {
  return (
    <div className={styles.image}>
      <img src={ba_by} className={styles.image1}></img>
    </div>
  );
};

export default baby;