import React from "react";
import styles from "./wooden_horse.module.css";
import horse from "./img/wooden_horse.png"

const wooden_horse = () => {
  return (
    <div className={styles.image}>
      <img src={horse} className={styles.image1}></img>
    </div>
  );
};

export default wooden_horse;