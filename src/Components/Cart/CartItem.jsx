import React from "react";

export default function CartItem({ data, handleAddToCart }) {
  return (
    <>
      {data?.map((item) => (
        <li key={item.id} className="MealItem_meal">
          <div>
            <h3>{item?.name}</h3>
            <div className="MealItem_description">{item?.desc}</div>
            <div className="MealItem_price">${item.price}</div>
          </div>
          <div>
            <div className="MealItemForm_form">
              <div className="form_input">
                <label htmlFor="amount">Amount</label>
                <input id="amount" type="number" defaultValue="1" readOnly />
              </div>
              <button
                onClick={() => {
                  handleAddToCart(item);
                }}
              >
                + Add
              </button>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}
