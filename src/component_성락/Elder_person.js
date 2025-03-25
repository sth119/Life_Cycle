import styles from "./Elder_person.module.css";
import person from "./img/elder_person.png";
import bird from "./img/person_bird.gif";

console.groupCollapsed("src/component_성락/Elder_person.js invoked.");console.groupEnd();

function Elder_person() {
    console.log("Elder_person() invoked.");

    return (
      <div >
        <div className={styles.person}>
        <img className={styles.img} src={person} alt="노인"/>
        </div>
        <div className={styles.bird}>
        <img className={styles.img_bird} src={bird} alt="새"/>
        </div>
      </div>
    );
  }

export default Elder_person;