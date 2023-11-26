import { NavLink, useParams} from "react-router-dom";
import { useState,useEffect } from "react";
import styles from "./ItemDesc.module.css";
import { useContext } from "react";
import NavBar from "./NavBar";
export default function ItemDesc({TotalContext,Items}){
    const {AddCart}=useContext(TotalContext);
    const {itemid}=useParams();
    console.log(itemid);
    console.log(Items);
    const itemNumber=parseInt(itemid,10);
    const[ItemData,setItemData]=useState(Items);
    console.log(ItemData);

    useEffect(
        function(){
           setItemData((Items)=>Items.filter((item)=>item.id===itemNumber));
        }
     ,[itemNumber]);
    return(
        <>
        <NavBar/>
     <div className={styles.item}>
        <img src={ItemData[0].image} alt="ok"/>
        <div className={styles.itemdes}>
        <p className={styles.category}>{ItemData[0].category}</p>
        <h2 className={styles.productName}>{ItemData[0].productName}</h2>
        <p className={styles.price}>Price: ₹ {ItemData[0].price}</p>
        <div className={styles.available}>
            <h5>Available offers</h5>
            <ul>
                <li>Bank Offer10% off on Axis Bank Credit Card EMI Transactions, up to ₹1,500 on orders of ₹5,000 and aboveT&C</li>
                <li>Bank Offer10% off on Flipkart Axis Bank Credit Card EMI Transactions, up to ₹1500 on orders of ₹5000 and aboveT&C</li>
                <li>Bank Offer10% off on Citi Credit Card EMI Transactions, up to ₹1,500 on orders of ₹5,000 and aboveT&C</li>
                <li>Combo OfferBuy 3 items save 5%; Buy 4 save 10%; Buy 5+ save 15%See all productsT&C</li>
            </ul>
        </div>
        <button className={styles.buttoncart} onClick={()=>AddCart(ItemData)}>Add to cart</button>
        </div>
        
     </div>
     </>
    );
}