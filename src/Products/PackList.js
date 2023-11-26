import Item from "./Item";
import { Items } from "../Contextitems";
import styles from "./PackList.module.css";
function Packlist({TotalContext}){
    return( 
       <div className={styles.cards}>
        {Items.map((items)=><Item data={items} TotalContext={TotalContext}/>)}
        </div>
      );
  
  }
export default Packlist;
 