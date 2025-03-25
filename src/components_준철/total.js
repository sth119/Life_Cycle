import { Church, People, Tree, Bird, Flower } from './index'
import styles from './total.module.css'

const Total = () => {
  return (
    <div className={styles.marry}>
      <Church />
      <Bird />
      <People />
      <Tree />
      <Flower />
    </div>
  );
};

export default Total;
