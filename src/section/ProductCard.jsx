import React, { useState } from "react";
import "./productCard.css";
import { dress } from "../Assets/dress";

import { Link } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails";

function ProductCard() {
  const [selectedProduct, setSelectedProduct] = useState(true);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <>
    
      <div className="card">
        {dress.map((data) => (
          <div className="imgtext" key={data.id}>
            <img src={data.img} alt={data.name} />
            <h5>{data.name}</h5>
            <Link to={`/productdetails/${data.id}`}>
              <button className="cardbtn">View</button>
            </Link>
          </div>
        ))}
      </div>
      {/* {selectedProduct && (
        <ProductDetails product={selectedProduct} />
      )} */}
    </>
  );
}

export default ProductCard;
