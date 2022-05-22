import {BrowserRouter as Router,Switch,Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import { Navigation } from './components/Navigation';
import {  ProductsPage } from './pages/ProductsPage';
import { Cart } from './pages/Cart';
import  SingleProduct  from './pages/SingleProduct';
import { CartContext } from './pages/CartContext';
import {  useState,useEffect } from 'react';
import { getCart,storeCart } from './pages/helper';

const App=()=>{
    
    const [cart,setCart] = useState({});
    
    useEffect(()=>{
      const cart=getCart().then(cart=>{
        setCart(JSON.parse(cart));
      });
      
    },[]);
    
    useEffect(()=> {
         storeCart(JSON.stringify(cart));
    },[cart]);

    
    
    return (
      <>
        <Router>
          
          <CartContext.Provider value={{cart, setCart}}>

            <Navigation/>
            
          <Switch>

              <Route exact path="/" component={Home} ></Route>
              <Route path="/products" exact component={ProductsPage}></Route>
              <Route path="/products/:_id" component={SingleProduct}></Route>
              <Route path="/cart" component={Cart}></Route>
              
          </Switch>
     
          </CartContext.Provider>
        </Router>
      </>
     )
    }

export default App;