import React from "react";
import styles from "./robot.module.css";
import bot from "./img/robot.png"

const robot = () => {
  return (
    <div className={styles.image}>
      <img src={bot} className={styles.image1}></img>
    </div>
  );
};

export default robot;