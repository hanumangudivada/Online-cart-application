import { useContext } from "react";

export default function Pricefilter({TotalContext}){
    const {setpricerange}=useContext(TotalContext);
    return(
        <div className='price-filter'>
        <h4>Select a price range</h4>
        <input type="radio" name="filter" id="1" value="100-500" onChange={(e)=>setpricerange((e.target.value).split("-"))}/>
        <label>100-500</label><br/>
        <input type="radio" name="filter" id="2" value="501-1000" onChange={(e)=>setpricerange((e.target.value).split("-"))}/>
        <label>501-1000</label><br/>
        <input type="radio" name="filter" id="3" value="1001-1500" onChange={(e)=>setpricerange((e.target.value).split("-"))}/>
        <label>1001-1500</label><br/>
        <input type="radio"  name="filter" id="4" value="1501-2000" onChange={(e)=>setpricerange((e.target.value).split("-"))}/>
        <label>1501-2000</label><br/></div>
    
      );
}