import React from "react";
import "./categorycard.css";

function Categorycard() {
  return (
    <div className="categorycardcontainer">
      <div className="cardtitle">
        <h5 className="categorytitle">Shop by Category </h5>
      </div>

      <div className="categorycard">
        <div>
          <img
            className="cardimg"
            src="https://n.nordstrommedia.com/id/a0b9d4ef-7a24-4293-9894-83b731908d57.jpeg?h=365&w=268"
            alt=""
          />
          <div
            style={{
              width: 190,
              display: "flex",
              justifyContent: "center",
              marginTop: 15,
            }}
          >
            <h5>Women</h5>
          </div>
        </div>
        <div>
          <img
            className="cardimg"
            src="https://n.nordstrommedia.com/id/ce2ce5de-3d57-46f9-8354-bf91bedff775.jpeg?h=365&w=268"
            alt=""
          />
          <div
            style={{
              width: 190,
              display: "flex",
              justifyContent: "center",
              marginTop: 15,
            }}
          >
            <h5>Men</h5>
          </div>
        </div>
        <div>
          <img
            className="cardimg"
            src="https://n.nordstrommedia.com/id/1bab830c-2924-4506-a8f8-fc821597ea11.jpeg?h=365&w=268"
            alt=""
          />
          <div
            style={{
              width: 190,
              display: "flex",
              justifyContent: "center",
              marginTop: 15,
            }}
          >
            <h5>kid</h5>
          </div>
        </div>
        <div>
          <img
            className="cardimg"
            src="https://n.nordstrommedia.com/id/e04030d4-f474-49ac-844d-c09eb27004ef.jpeg?h=365&w=268"
            alt=""
          />
          <div
            style={{
              width: 190,
              display: "flex",
              justifyContent: "center",
              marginTop: 15,
            }}
          >
            <h5>Swimsuit</h5>
          </div>
        </div>
        <div>
          <img
            className="cardimg"
            src="https://n.nordstrommedia.com/id/e11cb48b-064a-4686-8c63-d82676f3f0a7.jpeg?h=365&w=268"
            alt=""
          />
          <div
            style={{
              width: 190,
              display: "flex",
              justifyContent: "center",
              marginTop: 15,
            }}
          >
            <h5>Home</h5>
          </div>
        </div>
        <div>
          <img
            className="cardimg"
            src="https://n.nordstrommedia.com/id/d0afa335-2ade-451d-a9dc-1e8078da22fc.jpeg?h=365&w=268"
            alt=""
          />
          <div
            style={{
              width: 190,
              display: "flex",
              justifyContent: "center",
              marginTop: 15,
            }}
          >
            <h5>Cosmetic</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categorycard;
