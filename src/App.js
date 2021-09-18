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
  const [cart,setCart]=useState([1,2]);
  const handleProductAdd=()=>{
    console.log("Adding product ")
  }
  const handleProductDelete=()=>{
    console.log("Deleting product ")
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