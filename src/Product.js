//
import React from "react"
import Button from "./Button.js";
import {Link} from "react-router-dom";

export default function Product(props){
    console.log(props.details)
const {name,description,image,id,price,price_id} = props.details
return <div class="product">
  <div class="product-image-container">
    <Link to={`/products/${id}`}>
      <img src={image} width="100" height="100" className="product-image" alt={name} />
      </Link>
    <div class="product-quantity-container">
      <div class="product-quantity">0</div>
    </div>
  </div>
  <div class="product-info">
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
  <div class="product-checkout">
    <div>
        <Button outline className="product-delete">delete</Button>
    </div>
    <Button outline className ="btn btn-outline">{price}</Button>
  </div>
</div>
}