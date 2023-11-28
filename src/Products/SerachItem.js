import { useState,useEffect, useContext } from "react";
import styles from "./SearchItem.module.css";
import { elements } from "../Contextitems";
import { NavLink } from "react-router-dom";
function SearchItem({TotalContext}){
  const{searchItem,handleSearchItem,cartItems}=useContext(TotalContext);
    const[activebtn,setactivebtn]=useState("");
    //useffect for changing color of active button
    useEffect(function(){
      setactivebtn((activebtn)=>searchItem);
    },[searchItem]);
    
    return( 
    <div className={styles.ItemButtons}>
    {elements.map((element,index)=><button className={`${activebtn===element?"button-value":"nav-button"}`} key={index} onClick={()=>handleSearchItem(element)}>{element}</button>)}
   <div className="nav"> <NavLink to="/" className="navlink"><h3>HomePage</h3></NavLink>
    <NavLink to="/cart" className="navlink">
    <div className="innerCart"><h3>Cart</h3>
                <div className="cartvalue">{cartItems.length}</div>
                </div></NavLink></div>
    </div>) ;
  }
export default SearchItem;