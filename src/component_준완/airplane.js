import React from "react";
import styles from "./airplane.module.css";
import air_plane from "./img/airplane.png"

const airplane = () => {
  return (
    <div className={styles.image}>
      <img src={air_plane} className={styles.image1}></img>
    </div>
  );
};

export default airplane;