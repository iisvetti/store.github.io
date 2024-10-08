import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import flow1 from "../images/flow1.webp";
import flow2 from "../images/flow2.webp";
import flow3 from "../images/flow3.webp";

const imageMap = {
  1: flow1,
  2: flow2,
  3: flow3,
};

export function StoreItem({ id, name, price }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div className="store-item">
      <img src={imageMap[id]} alt={name} className="store-item-image" />
      <h3 className="store-item-title">
        <span>{name}</span>
        <span>{formatCurrency(price)}</span>
      </h3>
      <div className="store-item-actions">
        {quantity === 0 ? (
          <button
            onClick={() => increaseCartQuantity(id)}
            className="add-to-cart-btn"
          >
            + Add To Cart
          </button>
        ) : (
          <div className="store-item-quantity">
            <button onClick={() => decreaseCartQuantity(id)}>-</button>
            <span>{quantity} in cart</span>
            <button onClick={() => increaseCartQuantity(id)}>+</button>
            <button onClick={() => removeFromCart(id)} className="remove-btn">
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
