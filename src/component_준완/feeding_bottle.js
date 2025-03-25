import React from "react";
import styles from "./feeding_bottle.module.css";
import bottle from "./img/feeding_bottle.png"

const feeding_bottle = () => {
  return (
    <div className={styles.image}>
      <img src={bottle} className={styles.image1}></img>
    </div>
  );
};

export default feeding_bottle;