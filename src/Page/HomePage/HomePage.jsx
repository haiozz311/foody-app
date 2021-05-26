import React, { useState } from "react";
import CardList from "../../Components/Cart/CartList";
import CartModal from "../../Components/Cart/CartModal";
import Header from "../../Components/Header/Header";
import data from "../../Data/Data.js";
import "./style.css";

export default function HomePage() {
  const [Cart, setCart] = useState([]);
  const [Flag, setFlag] = useState(false);
  const [Touch, setTouch] = useState(false);
  console.log("Cart", Cart);
  const handleRemoveProduct = (id) => {
    //Tìm sp đó có trong giỏ hàng hay không
    let index = Cart.findIndex((cart) => cart.id === id);
    if (index !== -1) {
      if (Cart[index].quantity > 1) {
        Cart[index].quantity -= 1;
      } else {
        Cart.splice(index, 1);
      }
    }
    //Cập nhật lại giỏ hàng sau khi xóa
    setFlag(!Flag);
  };
  const handleAddToCart = (item) => {
    setTouch(true);
    let ProductOnCart = {
      id: item.id,
      name: item.name,
      desc: item.desc,
      quantity: 1,
      price: item.price,
    };

    let index = Cart.findIndex((cart) => cart.id === ProductOnCart.id);
    if (index !== -1) {
      // yes => +1
      Cart[index].quantity += 1;
    } else {
      // no => push card
      Cart.push(ProductOnCart);
    }
    setFlag(!Flag);
  };
  const totalProduct = Cart.reduce((totalProduct, item, index) => {
    return (totalProduct += item.quantity);
  }, 0);

  return (
    <div>
      <Header totalProduct={totalProduct} Touch={Touch} />
      <div className="main">
        <section className="MealsSummary_summary">
          <h2>Delicious Food, Delivered To You</h2>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </section>
        <section className="AvailableMeals_meals">
          <div className="card">
            <CardList data={data} handleAddToCart={handleAddToCart} />
            <CartModal
              Cart={Cart}
              handleRemoveProduct={handleRemoveProduct}
              handleAddToCart={handleAddToCart}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
