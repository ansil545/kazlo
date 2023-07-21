import React, { useState, useEffect } from "react";
import "./AddToCart.css";
import Navbar from "./navbar/Navbar";

// function AddToCart({ cart, setcart }) {
function AddToCart() {
  const [cartProducts, setCartProducts] = useState();
  console.log("cartProducts", cartProducts);

  useEffect(() => {
    const cartString = localStorage.getItem("cart");
    console.log("cartString", cartString);
    setCartProducts(JSON.parse(cartString));
  }, []);

  const [itemDetails, setItemDetails] = useState({});

  const handleIncrementQuantity = (itemId) => {
    setItemDetails((prevDetails) => ({
      ...prevDetails,
      [itemId]: {
        ...prevDetails[itemId],
        quantity: (prevDetails[itemId]?.quantity || 1) + 1,
      },
    }));
  };

  const handleDecrementQuantity = (itemId) => {
    setItemDetails((prevDetails) => ({
      ...prevDetails,
      [itemId]: {
        ...prevDetails[itemId],
        quantity: Math.max((prevDetails[itemId]?.quantity || 1) - 1, 1),
      },
    }));
  };

  const handleColorChange = (itemId, color) => {
    setItemDetails((prevDetails) => ({
      ...prevDetails,
      [itemId]: {
        ...prevDetails[itemId],
        color: color,
      },
    }));
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartProducts.filter((item) => item.id !== itemId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartProducts(updatedCart);
  };

  return (
    <>
  
      {cartProducts && (
        <div className="cart-container">
          <h2 className="cart-header">Cart</h2>
          {cartProducts.map((item) => (
            <div className="item-container" key={item.id}>
              <img className="item-image" src={item.img} alt="" />
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-price">${item.price}</p>
                <div className="quantity-container">
                  <span>Quantity:</span>
                  <button
                    className="quantity-button"
                    onClick={() => handleDecrementQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="quantity-value">
                    {itemDetails[item.id]?.quantity || 1}
                  </span>
                  <button
                    className="quantity-button"
                    onClick={() => handleIncrementQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <div className="color-container">
                  <span>Color:</span>
                  <div
                    className="color-box"
                    style={{
                      backgroundColor: itemDetails[item.id]?.color || "",
                    }}
                  ></div>
                  <div className="color-buttons-container">
                    <button
                      className="color-button"
                      style={{ background: "red" }}
                      onClick={() => handleColorChange(item.id, "red")}
                    ></button>
                    <button
                      className="color-button"
                      style={{ background: "blue" }}
                      onClick={() => handleColorChange(item.id, "blue")}
                    ></button>
                    <button
                      className="color-button"
                      style={{ background: "green" }}
                      onClick={() => handleColorChange(item.id, "green")}
                    ></button>
                  </div>
                </div>
                <button className="buy-now-button">Buy Now</button>
              </div>
              <button
                className="remove-button"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default AddToCart;
