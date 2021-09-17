import React from "react"
import Button from "./Button.js"
import Input from "./Input.js"

export default function Uikit(){
  return (<div>
  <Button outline>Outline</Button>
  <Button className="extra-class">Customizable</Button>
  <Button >Normal</Button>
  
  <div style={{display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap"}}>
        <Input placeholder="First Name:" required/>
        <Input placeholder="Last Name:"  required/>
        <Input placeholder="Email" type="email" required />
    </div>
  
  
  </div>)
}