import styles from "./Elder_bird.module.css";
import bird1 from "./img/Bird1.png";
import bird2 from "./img/Bird2.png";
import bird3 from "./img/Bird3.png";
import bird4 from "./img/Bird_move.gif";

console.groupCollapsed("src/component_성락/Elder_bird.js invoked.");console.groupEnd();

function Elder_bird() {
    console.log("Elder_bird() invoked.");

    return (
      <div>
        <img className={styles.bird1} src={bird1} alt=""/>
        <img className={styles.bird2} src={bird2} alt=""/>
        <img className={styles.bird3} src={bird3} alt=""/>
        <img className={styles.bird4} src={bird4} alt=""/>
      </div>
    );
  }

export default Elder_bird;