
import React,{useEffect,useState} from "react";
import useFetch from "./useFetch.js";
  import Loader from "./Loader.js";
  import Product from "./Product.js"

export default function Products(props){

  const {cart,onProductAdd,onProductDelete}=props

  const [products,setProducts]=useState([])
    const {get,loading} = useFetch("https://react-tutorial-demo.firebaseio.com/")
    // we fetch data from the API using useFetch custom hook and set the data to a state variable [products]
    

    useEffect(()=>{
get("supermarket.json").then(data=>{

    setProducts(data)
    //data is received from the API and set to Products variable.
    //the products varible is an array of objects and each object represent product.
console.log(products)
  }).catch(e=>{
    console.log(e)
  })
  },[])
  
  return (
    <div className="products-layout">
      <h1>Products ({products.length})</h1>
      <p>Take a look at our products </p>
      <div className="products-grid">
        {loading && <Loader />}
     {products.map(product=>{
       return (<>
       <Product 
            cart={cart}
            key={product.id}
            details={product}
            onProductAdd={onProductAdd}
            onProductDelete={onProductDelete}
            />
            {/* The Product component receives three props from Products.
            1. product (an array)
            2. cart (an array of objects)
            3. key - product id 
            And two function definitions 
            1. onProductAdd
            2. onProductDelete
            */}
       </>)
     })}
     
          
          
          
        

      </div>
    </div>
  );
}
