
import React,{useEffect,useState} from "react";
import useFetch from "./useFetch.js";
  import Loader from "./Loader.js";
  import Product from "./Product.js"

export default function Products(){
    const {get,loading} = useFetch("https://react-tutorial-demo.firebaseio.com/")
    const [products,setProducts]=useState([])

    useEffect(()=>{
get("supermarket.json").then(data=>{

    setProducts(data)
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
       <Product details={product}/>
       </>)
     })}
     
          
          
          
        

      </div>
    </div>
  );
}