import React from "react";

export default function CartModalItem({
  data,
  handleRemoveProduct,
  handleAddToCart,
}) {
  const totalPrice = () => {
    console.log("data", data);
    return data.reduce((totalprice, item, index) => {
      return (totalprice += item.quantity * item.price);
    }, 0);
  };
  return (
    <>
      {data.map((item, index) => (
        <li key={index} className="modal-item">
          <div>
            <h2>{item.name}</h2>
            <div className="CartModal_summary">
              <span className="CartModal_price">${item.price}</span>
              <span className="CartModal_amount">X {item.quantity}</span>
            </div>
          </div>
          <div className="CartModal_actions">
            <button
              onClick={() => {
                handleAddToCart(item);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                handleRemoveProduct(item.id);
              }}
            >
              -
            </button>
          </div>
        </li>
      ))}
      <div className="Cart_total">
        <span>Total Amount</span>
        <span>${Number.parseFloat(totalPrice()).toFixed(2)}</span>
      </div>
    </>
  );
}
