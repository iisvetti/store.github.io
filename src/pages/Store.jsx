// src/pages/Store.jsx
import React from "react";
import { StoreItem } from "../components/StoreItem"; // Імпорт з компонентів
import storeItems from "../data/items.json";

export function Store() {
  return (
    <>
      <h1 className="store-title">Store</h1>
      <div className="store-container">
        {storeItems.map((item) => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </>
  );
}
