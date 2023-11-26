import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
export default function NavBar(){
    return(
        <>
         <div className={styles.nav}>
            <NavLink to="/products" className={styles.navlink}><h3>Products</h3></NavLink>
            <NavLink to="/cart" className={styles.navlink}><h3>Cart</h3></NavLink>
         </div>
        </>
    );
}
