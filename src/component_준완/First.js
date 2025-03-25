import React from "react";
import { Baby, Plane, Bottle, Horse, Robot, Crib } from '.';
import styles from "./first.module.css";

const First = () => {
  return (
    <div className={styles.container}>
        <Baby />
        <Plane />
        <Bottle />
        <Horse />
        <Robot />
        <Crib />
    </div>
  );
};

export default First;