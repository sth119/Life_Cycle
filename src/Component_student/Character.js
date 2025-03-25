import Character_student_image  from "./img/남학생.png";
import styles from './Lifecyclestudent.module.css';



function Character_student() {


    return (
        <div className= {styles.Character_student_image} >
        <img src= {Character_student_image }  />
        </div>
    );
}


export default Character_student;