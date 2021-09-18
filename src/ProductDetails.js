import React,{useEffect,useState} from "react";
import {useParams,useRouteMatch,NavLink,Switch,Route} from "react-router-dom"
import ProductDetailInfo from "./ProductDetailInfo.js";
import ProductDetailNutrition from "./ProductDetailNutrition.js";
import ProductDetailStorage from "./ProductDetailStorage.js";
import useFetch from "./useFetch.js"

export default function ProductDetails(props) {
  const [product,setProducts] = useState([])
  const {get}=useFetch("https://react-tutorial-demo.firebaseio.com/")
  const params = useParams();
  const match = useRouteMatch();
  
useEffect(()=>{
get(`productinfo/id${params.id}.json`).then(data=>{
  
  setProducts(data)
  
}).catch((error) => console.log("Could not load product details", error));
},[])
if(!product){
  return null
}
 console.log(product)
  return <div class="product-details-layout">
  <div>
    <h2>{product.name}</h2>
    <img src={product.image} width="125" height="125" class="product-details-image" alt={product.name}
    />
  </div>
  <div>
    <div class="tabs">
      <ul>
        <li>
          <NavLink exact activeClassName="tab-active" to={match.url}>Details</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="tab-active" to={`${match.url}/nutrition`} >Nutrition</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="tab-active" to={`${match.url}/storage`} >Storage</NavLink>
        </li>
      </ul>
    </div>
    <Switch>
          <Route exact path={match.path}>
            <ProductDetailInfo
              onProductAdd={props.onProductAdd}
              product={product}
            />
          </Route>

          <Route path={match.path + "/nutrition"}>
            <ProductDetailNutrition nutrition={product.nutrition} />
          </Route>

          <Route path={match.path + "/storage"}>
            <ProductDetailStorage storage={product.storage} />
          </Route>
        </Switch>
  </div>
  </div>
}