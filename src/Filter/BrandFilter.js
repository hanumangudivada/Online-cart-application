import { useContext } from "react";

export default function BrandFilter({TotalContext}){
    const{brand,setbrand,brandlist}=useContext(TotalContext);
    return(
        <div className='brand-filter'>
          <h4>Pick your desired brand</h4>
      <select className="selectbrand" value={brand} onChange={(e)=>setbrand(e.target.value)}>
        {brandlist?.map((ele)=><option  key={ele} value={ele}>{ele}</option>)} 
      </select></div>
      );
}