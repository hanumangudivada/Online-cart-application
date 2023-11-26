import { createContext,useState,useEffect } from "react";
var Items=[{
    id:1,
    productName:"Men Solid Polo Neck Pure Cotton Maroon T-Shirt",
    category:"TShirt",
    price:"1539",
    image:"https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/i/2/k/s-askporgfc95171-allen-solly-original-imafw2kfja6ftphf-bb.jpeg?q=70",
    brand:"Allen Solly",
    itemcount:1
  
  },
  {
    id:2,
    productName:"Men Solid Cowl Neck Cotton Blend Blue T-Shirt",
    category:"TShirt",
    price:"1239",
    image:"https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/5/c/j/-original-imagu3gfvkca7zyx.jpeg?q=70",
    brand:"Allen Solly",
    itemcount:1
  
  },
  {
    id:3,
    productName:"Men Self Design Polo Neck Poly Cotton Blue T-Shirt",
    category:"TShirt",
    price:"759",
    image:"https://rukminim2.flixcart.com/image/832/832/jcgjo280/t-shirt/g/6/b/s-amkp317g04248-allen-solly-original-imaffha29326e5md.jpeg?q=70",
    brand:"Allen Solly",
    itemcount:1
  
  },
  {
    id:4,
    productName:"M 3S PQ PS Men Solid Polo Neck Pure Cotton White T-Shirt",
    category:"TShirt",
    price:"1259",
    image:"https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/m/n/w/-original-imagq2q43bygamze.jpeg?q=70",
    brand:"Adidas",
    itemcount:1
  
  },
  {
    id:5,
    productName:"Men Solid Polo Neck Polyester Purple T-Shirt",
    category:"TShirt",
    price:"559",
    image:"https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/y/f/7/m-ir5632-adidas-original-imagtfuhzewbje5q.jpeg?q=70",
    brand:"Adidas",
    itemcount:1
  
  },{
    id:6,
    productName:"Men Self Design Polo Neck Poly Cotton Blue T-Shirt",
    category:"TShirt",
    price:"441",
    image:"https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/2/l/j/-original-imagkx55h9qdnft6.jpeg?q=70",
    brand:"Adidas",
    itemcount:1
  
  },{
    id:7,
    productName:"Men Colorblock Turtle Neck Wool Blend Red T-Shirt",
    category:"TShirt",
    price:"959",
    image:"https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/l/r/z/-original-imagngethb4ygfdn.jpeg?q=70",
    brand:"Levis",
    itemcount:1
  
  },{
    id:8,
    productName:"Men Self Design Polo Neck Poly Cotton Blue T-Shirt",
    category:"TShirt",
    price:"1059",
    image:"https://rukminim2.flixcart.com/image/832/832/jcgjo280/t-shirt/g/6/b/s-amkp317g04248-allen-solly-original-imaffha29326e5md.jpeg?q=70",
    brand:"Levis",
    itemcount:1
  
  },{
    id:9,
    productName:"Men Graphic Print, Typography Round Neck Pure Cotton Dark Blue T-Shirt",
    category:"TShirt",
    price:"350",
    image:"https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/p/i/r/l-16803408-levis-original-imagkf3rstpm6gjc.jpeg?q=70",
    brand:"Levis",
    itemcount:1
  
  },{
    id:10,
    productName:"Men Slim Fit Solid Button Down Collar Casual Shirt",
    category:"Shirt",
    price:"459",
    image:"https://rukminim2.flixcart.com/image/832/832/kt0enww0/shirt/j/r/n/xl-hlsh012775-highlander-original-imag6g5fcgu6zsgs.jpeg?q=70",
    brand:"HighLander",
    itemcount:1
  
  },{
    id:11,
    productName:"Men Slim Fit Printed Mandarin Collar Casual Shirt",
    category:"Shirt",
    price:"610",
    image:"https://rukminim2.flixcart.com/image/832/832/kfoapow0-0/shirt/k/6/g/m-hlsh009640-highlander-original-imafw2gs7scshggh.jpeg?q=70",
    brand:"HighLander",
    itemcount:1
  
  },
  {
    id:12,
    productName:"Men Slim Fit Checkered Cut Away Collar Casual Shirt",
    category:"Shirt",
    price:"837",
    image:"https://rukminim2.flixcart.com/image/832/832/l1zc6fk0/shirt/e/d/d/s-hlsh013551-highlander-original-imagdffbtfgd4ngz.jpeg?q=70",
    brand:"HighLander",
    itemcount:1
  
  },
  {
    id:13,
    productName:"Men Slim Fit Solid Casual Shirt",
    category:"Shirt",
    price:"427",
    image:"https://rukminim2.flixcart.com/image/832/832/j5bceq80/shirt/y/d/h/xl-1758578-wrogn-original-imaev3t28z5sqjxz.jpeg?q=70",
    brand:"Wrogn",
    itemcount:1
  
  },
  {
    id:14,
    productName:"Men Regular Fit Striped Casual Shirt",
    category:"Shirt",
    price:"1151",
    image:"https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/t/h/l/-original-imagr8y3dmxb4qpu.jpeg?q=70",
    brand:"Wrogn",
    itemcount:1
  
  },
  {
    id:15,
    productName:"Men Regular Fit Solid Casual Shirt",
    category:"Shirt",
    price:"544",
    image:"https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/u/2/e/-original-imagt3z5yvchktgf.jpeg?q=70",
    brand:"Wrogn",
    itemcount:1
  
  },
  {
    id:16,
    productName:"Men Regular Fit Self Design Spread Collar Casual Shirt",
    category:"Shirt",
    price:"1544",
    image:"https://rukminim2.flixcart.com/image/832/832/l3ys70w0/shirt/a/w/7/l-usshtc0001-u-s-polo-association-original-imageyzfptkkky4j.jpeg?q=70",
    brand:"U.S.POLO ASSN",
    itemcount:1
  
  },
  {
    id:17,
    productName:"Men Tailored Fit Solid Cut Away Collar Casual Shirt",
    category:"Shirt",
    price:"525",
    image:"https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/5/t/v/m-usshto2304-u-s-polo-assn-original-imagsn4zybgfv2zy.jpeg?q=70",
    brand:"U.S.POLO ASSN",
    itemcount:1
  
  },
  {
    id:18,
    productName:"Men Tailored Fit Solid Cut Away Collar Casual Shirt",
    category:"Shirt",
    price:"923",
    image:"https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/h/d/r/m-usshto2291-u-s-polo-assn-original-imagshwzm36fcshb.jpeg?q=70",
    brand:"U.S.POLO ASSN",
    itemcount:1
  
  },
    
    ];
  const Brand={All:["U.S.POLO ASSN","Wrogn","HighLander","Levis","Adidas","Allen Solly"],Shirt:["U.S.POLO ASSN","Wrogn","HighLander"],
  TShirt:["Levis","Adidas","Allen Solly"]
    };
  var elements=Object.keys(Brand);
  //to display different dropdown for brands
var Brands=["U.S.POLO ASSN","Wrogn","HighLander","Levis","Adidas","Allen Solly"];
const TotalContext=createContext();
function Contextitems({children}){
  const [cartItems,setcartItems]=useState([]);
  const[searchItem,setSearchitem]=useState("All");
  const [pricerange,setpricerange]=useState([]);
  const [brand,setbrand]=useState("U.S.POLO ASSN");
  const[brandlist,setbrandlist]=useState([]);
  const[count,setcount]=useState(0);
  useEffect(()=>{
    console.log("useffect runs");
    //when we are trying to access the object using variable we should not use "."operator ,we should use "[variable]" to access the object.
    setbrandlist((brandlist)=>Brand[searchItem]); 
    console.log(brandlist);
  },[searchItem]);
  useEffect(
    ()=>{
      setcount(cartItems.length-1);
    }
  ,[cartItems]);
  

  function handleSearchItem(element){
    setSearchitem((searchItem)=>element);
  }
  
  function AddCart(data){
    setcartItems((cartItem)=>cartItems.includes(data[0])?[...cartItems]:[...cartItems,data[0]]);
  }



  function RemoveItem(id){
    setcartItems((cartItems)=>cartItems.filter((item)=>item.id!==id));
  }
  return(
    <>
    <TotalContext.Provider
    value={{cartItems,setcartItems,pricerange,setpricerange,searchItem,brand,setbrand,brandlist,handleSearchItem,RemoveItem,AddCart,count,setcount}}
    >
        {children}
    </TotalContext.Provider>
    </>

  );
}
export {Contextitems,TotalContext,Items,Brand,elements};