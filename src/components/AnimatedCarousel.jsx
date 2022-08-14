import React, { useRef, useState } from "react";
import {
  Rectangle,
  Pyramid,
  Sphere,
  ThreeDimRectangle,
  RevRec,
} from "../assets/svgs.js";

export default function AnimatedCarousel() {
  const [rotation, rotate] = useState(0);
  const styles = [
    {
      container: { transform: `rotate(${rotation}deg)` },
      orbitOne: { transform: `rotate(${rotation}deg)` },
      background: { backgroundPosition: "0% 0%" },
    },
    {
      container: { transform: `rotate(${rotation}deg)` },
      orbitOne: { transform: `rotate(${rotation}deg)` },
      background: { backgroundPosition: "34% 16%" },
    },
  ];
  const [position, changePosition] = useState(0);
  const divRef = useRef(null);
  const Click = () => {
    rotate(rotation + 180);
    changePosition((prevState) =>
      prevState < styles.length - 1 ? prevState + 1 : 0
    );
  };
  return (
    <div>
      <button
        onClick={() => {
          Click();
        }}
      >
        {position}
      </button>
      <div id="carousel-wrapper">
        <div id="wrapper">
          <div
            id="rec-container"
            style={styles[position].container}
            ref={divRef}
          >
            {RevRec("tes")}
            <div id="rec_bg" style={styles[position].background}></div>
          </div>
        </div>
        <div id="orbit-container" style={styles[position].orbitContainer}>
          <div
            style={{
              ...styles[position].orbitOne,
              height: "100%",
              margin: "0 50%",
            }}
          >
            {Pyramid()}
            <div
              style={{
                height: "100%",
                rotate: "90deg",
              }}
            >
              {Sphere()}
            </div>
            <div
              style={{
                height: "100%",
                padding: "60px",
                rotate: "250deg",
              }}
            >
              {Sphere()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
