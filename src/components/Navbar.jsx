import React from "react";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/store" className="nav-link">
          Store
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
      </div>
      {cartQuantity > 0 && (
        <button onClick={openCart} className="cart-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            fill="currentColor"
          >
            <path d="..." />
          </svg>
          <div className="cart-quantity">{cartQuantity}</div>
        </button>
      )}
    </nav>
  );
}
