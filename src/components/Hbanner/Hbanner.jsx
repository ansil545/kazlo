import React from "react";
import "./Hbanner.css";
import { Link } from "react-router-dom";

function Hbanner() {
  return (
    <div className="bannerhead">
      <ul style={{display:"flex",width:"100%",justifyContent:"space-between"}}
       
    
      >
        
        <li>Annivrsary sale</li>
       <li>men</li>
       <li>Cap</li>
       <li>Jacket</li>
       <li>Shoes</li>
       <li>Sale</li>
       <li>Explore</li>
       <li>Trends</li>
      </ul>
    </div>
  );
}

export default Hbanner;
