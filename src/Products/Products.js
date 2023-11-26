import SearchItem from "./SerachItem";
import PackList from "./PackList";
import Pricefilter from "../Filter/Pricefilter";
import BrandFilter from "../Filter/BrandFilter";

import styles from "./Products.module.css";
import Filter from "../Filter/Filter";

export default function Products({TotalContext}){
    return(
        <>
        <SearchItem TotalContext={TotalContext}/>
        <div className={styles.outerproducts}>
        <PackList TotalContext={TotalContext}/>
       <Filter>
       <Pricefilter TotalContext={TotalContext}/>
       <BrandFilter TotalContext={TotalContext}/>
       </Filter>
        </div>
        </>
    );

}