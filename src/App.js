import React from "react"
import {Route,Switch} from "react-router-dom"
import Button from "./Button.js"
import Input from "./Input.js"
import Uikit from "./Uikit"
import Navbar from "./Navbar.js";
import Home from "./Home.js"

export default function App(){
  return (<>
  <Navbar/>
  <Switch>
  <Route>
  <Home />
  </Route>
  </Switch>
  </>)
}