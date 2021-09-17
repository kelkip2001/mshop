import React from "react"
import {Route,Switch} from "react-router-dom"
import Button from "./Button.js"
import Input from "./Input.js"
import Uikit from "./Uikit"
import Navbar from "./Navbar.js";
import Home from "./Home.js"
import About from "./About.js"

export default function App(){
  return (<>
  <Navbar/>

  <Switch>
  
  <Route exact path="/">
  <Home />
  </Route>
  <Route exact path="/about">
  <About />
  </Route>

  </Switch>
  </>)
}