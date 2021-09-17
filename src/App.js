import React from "react"
import Button from "./Button.js"
import Input from "./Input.js"

export default function App(){
  return (<div>
  <Button outline>Outline</Button>
  <Button className="extra-class">Customizable</Button>
  <Button >Normal</Button>
  
  <Input placeholder="first name"/>
  
  
  
  </div>)
}