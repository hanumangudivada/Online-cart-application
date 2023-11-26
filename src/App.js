import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import { Contextitems,TotalContext,Items} from './Contextitems';
import HomePage from './components/HomePage';
import Products from './Products/Products';
import ItemDesc from './components/ItemDesc';
import Cart from './Cart/Cart';
function App() {  
  return(
    <Contextitems>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/products" element={<Products TotalContext={TotalContext}/>}/>
        <Route path="/itemdescription/:itemid" element={<ItemDesc TotalContext={TotalContext} Items={Items} />}></Route>
        <Route path="/cart" element={<Cart TotalContext={TotalContext}/>}></Route>
      </Routes>
      </BrowserRouter>
     </div>
     </Contextitems>
  );
}

function Search({children}){
  return(<div class="wrapper">
            <div className="search-container">
                <input type="search" className="search-input" placeholder="Search product name here.."></input>
                <button className="search">Search</button>
                </div>
                {children}
            </div>
);
}


export default App;

