import React, { useEffect, useState } from "react";
import "./style.css";
import { FaShoppingCart } from "react-icons/fa";
import banner from "./images/photo-banner.jpg";

export default function Header({ totalProduct, Touch }) {
  return (
    <>
      <header className="header">
        <h1>ReactMeals</h1>
        <button
          className={
            Touch
              ? "HeaderCartButton_button quadrado"
              : "HeaderCartButton_button"
          }
          data-toggle="modal"
          data-target="#modelId"
        >
          <FaShoppingCart className="HeaderCartButton_icon" />
          <span>Your Cart</span>
          <span className="HeaderCartButton_badge">{totalProduct}</span>
        </button>
      </header>
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
    </>
  );
}
