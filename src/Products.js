
import useFetch from "./useFetch.js";
import {useState,useEffect} from "react"


export default function Products(){
    const {get} = useFetch("https://react-tutorial-demo.firebaseio.com/")
    const [Products,setProducts]=useState([])

    useEffect(()=>{
get("supermarket.json").then(data=>{
    setProducts(data)
    console.log(data)
})
    },[])
    return <div class="products-layout">
  <h1>Products..</h1>
  <p>Take a look at our products</p>
</div>
}