import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

import flow1 from "../images/flow1.webp";
import flow2 from "../images/flow2.webp";
import flow3 from "../images/flow3.webp";

const imageMap = {
  1: flow1,
  2: flow2,
  3: flow3,
};

export function CartItem({ id, quantity }) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);

  if (item == null) return null;

  return (
    <div className="cart-item">
      <img src={imageMap[id]} alt={item.name} />
      <div className="cart-item-name">
        <div>
          {item.name} {quantity > 1 && <span>x{quantity}</span>}
        </div>
        <div className="cart-item-price">{formatCurrency(item.price)}</div>
      </div>
      <div className="current-price">
        {formatCurrency(item.price * quantity)}
      </div>
      <button className="remove-button" onClick={() => removeFromCart(item.id)}>
        &times;
      </button>
    </div>
  );
}
