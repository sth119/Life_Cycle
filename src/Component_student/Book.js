
import bookimage2 from './img/책2.png';
import styles from './Lifecyclestudent.module.css';



function Book () {


    return (
        <div>
        <img src= { bookimage2 } className= { styles.student_book1}  />
        <img src= { bookimage2 } className= { styles.student_book2} />
        <img src= { bookimage2 } className= { styles.student_book3}  />
        <img src= { bookimage2 } className= { styles.student_book4} />
        </div>
    );
}



export default Book;