import React from "react";
import "./Introbanner.css";
import introimg from "../../Assets/icons/introimg.jpeg"
import secndimg from "../../Assets/icons/2ndimg.jpeg"
import { Link } from "react-router-dom";
 
function Introbanner() {
  return (
    <div className="introbanner">
     <Link to={"/productcard"}>
      <img className="introimg" src={introimg} />
      <img className="secndimg" src={secndimg}  />
      </Link>
      
    </div>
  );
}

export default Introbanner;
