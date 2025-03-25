import { Character_student, Book, Acc , Schoolimage } from "./Index";
import styles from './Lifecyclestudent.module.css';


function Lifecyclestudent() {

    return (
        <div className= {styles.studentTopbox}>
            <Schoolimage />
            <Character_student />
            <Book />
            <Acc />
        </div>
    );
}

export default Lifecyclestudent;