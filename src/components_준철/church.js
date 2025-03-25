import church from "./img/church.png";
import styles from './church.module.css'

const Church = (props) => {
  return (
    <div className = {styles.church}>
      <img src={church} alt="" />
    </div>
  );
};

export default Church;
