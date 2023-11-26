import styles from "./HomePage.module.css";
import NavBar from "./NavBar";


export default function HomePage(){
    return(
        <>
        <div className={styles.Homepage}>
        </div>
        <div className={styles.container}>
         <h1 className={styles.heading}>Online Cart</h1></div>
         <NavBar/>
              </>
    );

}