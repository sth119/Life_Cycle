import flower from "./img/flower.png";
import styles from './Flower.module.css'

const Flower = (props) => {
  return (
    <div className = {styles.Flower}>
      <img className = { styles.Flower1 } src={flower} alt="" />
      <img className = { styles.Flower2 } src={flower} alt="" />
      <img className = { styles.Flower3 } src={flower} alt="" />
      <img className = { styles.Flower4 } src={flower} alt="" />
    </div>
  );
};

export default Flower;
