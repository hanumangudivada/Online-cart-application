import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { TotalContext } from "../Contextitems";
import { useContext } from "react";
export default function NavBar(){
    const{cartItems}=useContext(TotalContext);
    return(
        <>
         <div className={styles.nav}>
            <NavLink to="/products" className={styles.navlink}><h3>Products</h3></NavLink>
            <NavLink to="/cart" className={styles.navlink}>
                <div className={styles.innerCart}><h3>Cart</h3>
                <div className={styles.cartvalue}>{cartItems.length}</div>
                </div>
                </NavLink>
         </div>
        </>
    );
}

