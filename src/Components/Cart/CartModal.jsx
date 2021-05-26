import React from "react";
import CartModalItem from "./CartModalItem";

export default function CartModal({
  Cart,
  handleRemoveProduct,
  handleAddToCart,
}) {
  return (
    <div>
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Shopping Cart</h5>
            </div>
            <div className="modal-body">
              <CartModalItem
                data={Cart}
                handleRemoveProduct={handleRemoveProduct}
                handleAddToCart={handleAddToCart}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="Cart_actions"
                data-dismiss="modal"
                aria-label="Close"
              >
                Close
              </button>
              {Cart.length > 0 && (
                <button
                  type="button"
                  className="Cart_actions Cart_order"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    alert("Thanks For Your Order");
                  }}
                >
                  Order
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
