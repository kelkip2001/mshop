import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button.js"

export default function Navbar(props) {

  const cartCount = props.cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const [isDarkTheme,setIsDarkTheme]=useState(false)

  

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkTheme]);

  // Optional
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      setIsDarkTheme(true);
    }
  }, []);


  function handleThemeClick() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        SuperM
      </NavLink>
      <ul>
      <li className="nav-item">
          <Button className="theme-switcher" onClick={handleThemeClick}>{isDarkTheme ? "Dark" : "Light"}</Button>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active" to="/about">
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
            Cart ({cartCount})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}