import styles from "./Elder.module.css";
import {Person, Back} from "./index";

console.groupCollapsed("src/component_성락/Elder.js invoked.");console.groupEnd();

// person이 걸어오다가, 벤치가 떨어지고, 새도 움직이고 구현하기

function Elder() {
    console.log("Elder() invoked.");

    return (
      <div className={styles.background}>
        <Back/>
        <Person/>
      </div>
    );
  }

export default Elder;