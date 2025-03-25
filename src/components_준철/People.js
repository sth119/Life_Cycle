import char from "./img/bridegroom.png";
import styles from './People.module.css'

const People = (props) => {
  return (
    <div className = {styles.people}>
      <img src={char} alt="" />
    </div>
  );
};

export default People;
