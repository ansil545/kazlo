import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dress } from "../Assets/dress";
import "./Productdetails.css";
import Navbar from "./navbar/Navbar";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const data = dress.filter((item) => {
      return item.id.toString() === productId;
    });
    
    setProduct(data[0]);
  }, [productId]);

  if (!product) {
    return null;
  }
  const { id, img, category, name } = product;

  const renderSizeOptions = () => {
    if (category === "shirt") {
      return (
        <div className="size-options">
          <button className="size-button">Small</button>
          <button className="size-button">Medium</button>
          <button className="size-button">XL</button>
        </div>
      );
    } else if (category === "sneaker") {
      return (
        <div className="size-options">
          <button className="size-button">4</button>
          <button className="size-button">5</button>
          <button className="size-button">6</button>
        </div>
      );
    } else {
      return null;
    }
  };
  const adding = () => {
    const previousProducts = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...previousProducts, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <>
  
      <div className="product-details">
        <img className="product-image" src={img} alt={id} />
        <div className="product-info">
          <h5 className="product-title">{name}</h5>
          <p className="product-price">$99.99</p>
          {renderSizeOptions()}
          <div className="button-container">
            <button className="buy-now-button">Buy Now</button>
            <button className="add-to-cart-button" onClick={adding}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
