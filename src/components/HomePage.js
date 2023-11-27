import { useEffect, useRef } from "react";
import styles from "./HomePage.module.css";
import NavBar from "./NavBar";
export default function HomePage(){
    const imageref=useRef(null);
    const headingref=useRef(null);
    const quoteref=useRef(null);
    useEffect(() => {
        const handleAnimationEnd = () => {
          // Add border after the animation is complete
          imageref.current.style.border = '5px solid #5F9EA0';
          headingref.current.style.color="#3F000F";
          quoteref.current.className=`${styles.quotes}`;


        };
    
        // Attach the event listener
        imageref.current.addEventListener('animationend', handleAnimationEnd);
        headingref.current.addEventListener('animationend', handleAnimationEnd);
        quoteref.current.addEventListener('animationend', handleAnimationEnd);

    
        // Remove the event listener when the component is unmounted
        
      }, []);


    return(
        <>
        <div className={styles.Homepage}>
        </div>
        <div className={styles.container}>
            <div className={styles.inside}>
        <div className={styles.image} ref={imageref}>
        </div>
        <h1 className={styles.heading} ref={headingref}>Online <span>Cart</span></h1>
        <h3 className={styles.quote} ref={quoteref}>"Styles in your Cart,Fashion in you Heart"</h3>
         </div></div>
         
         <NavBar/>
              </>
    );

}