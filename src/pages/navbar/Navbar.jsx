import React from "react";
import "./Navbar.css";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
export default function Navbar({ cart }) {
  return (
    <div className="nav">
      <div className="nav-items">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h2 className="header">kazlo</h2>
        </Link>

        <div className="searchbox-container">
          <div className="search-box">
            <SearchOutlinedIcon className="search-icon" />

            <input
              type="text"
              placeholder="search for products"
              className="search-input"
            />
          </div>
        </div>

        <div className="icon-container"
          style={{
           
          }}
        >
          <Link to={"/productcard"} style={{ textDecoration: "none" }}>
            <div className="products-icon" >
              <p className="products-icontitle">Products</p>
              <ArrowDownwardOutlinedIcon style={{ height: 18 }} />
            </div>
          </Link>
          <Link to={"/cart"} style={{ textDecoration: "none" }}>
            <div className="cart-icon">
              <StoreOutlinedIcon style={{ height: 18 }} />
              <p className="cart-icontitle">Cart</p>
           
            </div>
          </Link>
          <div className="purchase-icon">
            <ArchiveOutlinedIcon style={{ height: 18 }} />
            <p className="purchase-icontitle">purchase</p>
          </div>
        </div>
      </div>
    </div>
  );
}
