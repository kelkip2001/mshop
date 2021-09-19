//
import React from "react"
import Button from "./Button.js";
import {Link} from "react-router-dom";

export default function Product(props){

// we have two arrays of objects here (details and cart). Received as props.
// 1. Details={product} from the API fetch request
// 2.cart= is an array of objects
// 3.product id
  const {details,cart}=props;
  
const {name,description,image,id,price,cart} = props.details
console.log(cart)

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