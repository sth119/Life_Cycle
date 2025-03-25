import styles from "./Elder_bench.module.css";
import bench from "./img/elder_bench.png";

console.groupCollapsed("src/component_성락/Elder_bench.js invoked.");console.groupEnd();

function Elder_bench() {
    console.log("Elder_bench() invoked.");

    return (
      <div className={styles.bench_position}>
        <img className={styles.bench} src={bench} alt=""/>
      </div>
    );
  }

export default Elder_bench;