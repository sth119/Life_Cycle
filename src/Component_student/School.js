import schoolpicture from './img/학교.png';
import styles from './Lifecyclestudent.module.css';




function Schoolimage () {
  return(  
  <div className= { styles.schoolpicture }>
    <img src= {schoolpicture}/>
    </div> 
);
}


export default Schoolimage;