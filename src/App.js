import React,{useState} from "react"
import {Route,Switch} from "react-router-dom"
import Button from "./Button.js"
import Input from "./Input.js"
import Uikit from "./Uikit"
import Navbar from "./Navbar.js";
import Home from "./Home.js"
import About from "./About.js"
import Products from "./Products.js"
import Cart from "./Cart.js"
import ProductDetails from "./ProductDetails.js"

export default function App(){


  const [cart,setCart]=useState([]);

  const handleProductAdd=(newProduct)=>{

   const existingproduct = cart.find(product=>product.id===newProduct.id)

    if(existingproduct){
      const updatedcart = cart.map(product=>{
        if(product.id===newProduct.id){
          return {
            ...product,
            quantity:product.quantity+1
          }
        }
        return product;
      });
      setCart(updatedcart);

    }else{
setCart([...cart,{...newProduct,quantity:1}])
    }
  }
  const handleProductDelete=(id)=>{
   const updatedcart= cart.filter(product=>product.id!==id)
   setCart(updatedcart)
  }
  return (<>
  <Navbar cart={cart}/>

  <Switch>
  
  <Route exact path="/">
  <Home />
  </Route>
  <Route exact path="/about">
  <About />
  </Route>
  <Route exact path="/products">
  <Products 
  cart={cart} 
  onProductAdd={handleProductAdd}
  onProductDelete={handleProductDelete}
  />
  </Route>
  <Route exact path="/cart">
  <Cart cart={cart}/>
  </Route>
  <Route path="/products/:id">
            <ProductDetails />
          </Route>

  </Switch>
  </>)
}