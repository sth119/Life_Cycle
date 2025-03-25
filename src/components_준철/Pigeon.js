import bird_stable from "./img/bird.gif";
import bird_flying from "./img/bird_flying.gif";
import styles from './Pigeon.module.css'

const Pigeon = (props) => {
  return (
    <div className = {styles.bird}>
      <img className = { styles.bird_stable1 } src={bird_stable} alt="" />
      <img className = { styles.bird_stable2 } src={bird_stable} alt="" />
      <img className = { styles.bird_flying1 } src={bird_flying} alt="" />
      <img className = { styles.bird_flying2 } src={bird_flying} alt="" />
    </div>
  );
};

export default Pigeon;
