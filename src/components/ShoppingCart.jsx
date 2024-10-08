import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

export function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <div className={`shopping-cart ${isOpen ? "open" : ""}`}>
      <h2 className="cart">Cart</h2>
      <button className="close-btn" onClick={closeCart}>
        Close
      </button>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="cart-total">
          Total:{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
      </div>
    </div>
  );
}
