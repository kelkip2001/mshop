import React from "react";
import Button from"./Button.js"

export default function ProductDetailInfo(props) {
  console.log(props.product)
  const {description,price}= props.product
  return <>
  <p>{description} sold at <strong>${price}</strong> per piece.</p>
  <Button>${price}</Button>
  </>;
}