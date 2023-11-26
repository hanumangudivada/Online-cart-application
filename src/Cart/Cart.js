 import { useState,useEffect,useRef, useContext } from "react";
 import CartElements from "./CartElements";
 import { NavLink } from "react-router-dom";

 export default function Cart({TotalContext}){
    const cartRef=useRef();
    const [total, setTotal] = useState(0); // State to store the total
    const{cartItems,setcartItems}=useContext(TotalContext);
    console.log(cartItems);
  
    // Update the total whenever cartItems change
    useEffect(() => {
      const newTotal = cartItems.reduce((acc, item) => acc + Number(item.itemcount), 0);
      setTotal(newTotal);
    }, [cartItems]);
    
  
    function Addcount(id){
      setcartItems((cartItems)=>
      cartItems.map((item)=>item.id===id?{...item,itemcount:Number(item.itemcount)+1}:{...item})
      );
    
    }
  
    function Deletecount(id){
      setcartItems((cartItems)=>
      cartItems.map((item)=>item.id===id && item.itemcount>1?{...item,itemcount:Number(item.itemcount)-1}:{...item})
      );
      
    }
  

    return(
      cartItems.length!==0?
      <div>
        <div className="nav">
       <NavLink to="/home" className="navlink"><h3>HomePage</h3></NavLink>
       <NavLink to="/products" className="navlink"><h3>Products</h3></NavLink></div>
      <div className='Cart' ref={cartRef}>
        <h3>{`Cart(${cartItems.length})`}</h3>
        <h4>{`Total items ${total}`}</h4>
        {cartItems.map((item)=>
        <CartElements Element={item} TotalContext={TotalContext} Addcount={Addcount} Deletecount={Deletecount}/>
        )}
      </div>
      </div>
      :
      <div>
      <div className="Cart">
      <h4>Your Cart is Empty
      </h4>
      <img src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"/>
      </div>
      </div>
      
      
  
    );
  }