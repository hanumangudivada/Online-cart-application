import { useContext } from "react"

export default function CartElements({Element,Addcount,Deletecount,TotalContext}){
    const{RemoveItem}=useContext(TotalContext);
    return(
      <div className='cartElement'>
        <img src={Element.image} alt="ok"></img>
        <h5>{Element.productName}</h5>
        <h5>₹{Element.price}</h5>
        <h5>{`Quantity (${Element.itemcount})`}</h5>
        <div>
        <button onClick={()=>Deletecount(Element.id)}>-</button>
        <button onClick={()=>Addcount(Element.id)}>+</button></div>
        <button className='remove' onClick={()=>{RemoveItem(Element.id)}}><p>Remove Item</p></button>
      </div>
    );
  
  }