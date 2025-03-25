import { Bench, Bird } from ".";
import styles from "./Elder_back.module.css";

console.groupCollapsed("src/component_성락/Elder_back.js invoked.");console.groupEnd();

function Elder_back() {
    console.log("Elder_back() invoked.");

    return (
      <div className={styles.back}>
        <Bench/>
        <Bird/>
      </div>
    );
  }

export default Elder_back;