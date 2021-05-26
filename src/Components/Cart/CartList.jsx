import React from "react";
import CartItem from "./CartItem";

export default function CartList({ data, handleAddToCart }) {
  return (
    <ul>
      <CartItem data={data} handleAddToCart={handleAddToCart} />
    </ul>
  );
}
