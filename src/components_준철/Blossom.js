import tree from "./img/blossom.png";
import styles from './Blossom.module.css'

const Blossom = (props) => {
  return (
    <div className = {styles.tree}>
      <img src={tree} alt="" />
    </div>
  );
};

export default Blossom;
