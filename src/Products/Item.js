import { useContext } from "react";
import styles from "./Item.module.css";
import { Link, NavLink } from "react-router-dom";
 export default function Item({data,TotalContext}){
  const {Addcart,searchItem,pricerange,brand}=useContext(TotalContext);
    return(
      searchItem==="All"? 
      <div className={styles.card}>
        <p className={styles.brand}>{data.brand}</p>
        <img src={data.image} alt="ok"></img>
        <h5>{data.productName}</h5>
        <h5>{`₹ ${data.price}`}</h5>
        <NavLink to={`/itemdescription/${data.id}`}>
         <button><p>show more..</p></button>
        </NavLink>

  
      </div>:
      searchItem===data.category &&(Number(data.price)>=pricerange[0] && Number(data.price)<=pricerange[1]) &&(data.brand===brand)?<div className={styles.card}>
      <p className={styles.brand}>{data.brand}</p>
      <img src={data.image} alt="ok"></img>
      <h5>{data.productName}</h5>
      <h5>{`₹ ${data.price}`}</h5>
      <NavLink to={`/itemdescription/${data.id}`}>
        <button><p>show more..</p></button>
          </NavLink>

    </div>:" "
    );
  }
