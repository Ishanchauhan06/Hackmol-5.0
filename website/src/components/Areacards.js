import React from "react";
import { Link } from "react-router-dom";
import "../styles/areacard.css";
import image from "../Images/image.png"
import car from "../Images/car.png"
const Areacard = ({ area, onSelectArea }) => {
  return (
    <div className="Mywrapper">
      <div className="Mycard">
        <div className="front">
          <img src= {car} className="Myh1 carImage"></img>
          <h1 className="Myh1 head">{area.name}</h1>
        </div>
        <div className="right">
          <h2 className="Myh2">{area.name}</h2>
          <p>Check Available Slots</p>
          <button onClick={() => onSelectArea(area)} className="Mybutton">
            <Link
              to={`/parking-area/${area.id}`}
            >
              BooK {area.name}
            </Link>
          </button>
        </div>
      </div>
      {/* <div className="Myimg-wrapper">
        <img
          src={image}
          alt=""
          className="Myimg"
        />
      </div> */}
    </div>
  );
};

export default Areacard;

{/* <a href="https://imgbb.com/">
        <img
          src="https://i.ibb.co/zXxFzwd/roadbarrirer-removebg-preview.png"
          alt="img"
          className="Myimg"
        />
      </a> */}
