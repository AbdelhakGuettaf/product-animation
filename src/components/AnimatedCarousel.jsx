import React, { useRef, useState } from "react";
import {
  Rectangle,
  Pyramid,
  Sphere,
  ThreeDimRectangle,
  RevRec,
} from "../assets/svgs.js";
import redChair from "../assets/red-chair.png";

export default function AnimatedCarousel() {
  const [rotation, rotate] = useState(0);
  const styles = [
    {
      container: { transform: `rotate(${rotation * 2}deg)` },
      orbitOne: { transform: `rotate(${rotation * 2}deg)` },
      orbitItem: { transform: `rotate(${rotation - 90}deg)` },
      background: { backgroundPosition: "0% 0%" },
    },
    {
      container: { transform: `rotate(${rotation * 2}deg)` },
      orbitOne: { transform: `rotate(${rotation * 2}deg)` },
      orbitItem: { transform: `rotate(${rotation - 90}deg)` },
      background: { backgroundPosition: "34% 16%" },
    },
  ];
  const [position, changePosition] = useState(0);
  const divRef = useRef(null);
  const Click = () => {
    rotate(rotation + 180);
    changePosition((prevState) => (prevState < 1 ? prevState + 1 : 0));
  };
  const animateIn = (time) => {
    if (time === null) return;
    return {
      item: { animation: `counterRotate ${time}ms ease-in forwards` },
      orbit: {
        animation: `itemOrbitOut ${time * 0.8}ms  ease-in-out forwards`,
      },
    };
  };
  const animateOut = (time) => {
    return {
      item: { animation: `counterRotateOut ${time}ms ease  forwards` },
      orbit: {
        animation: `itemOrbit ${time * 2.5}ms 100ms linear  forwards`,
      },
    };
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
        <div id="orbit-container" style={styles[position].container}>
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
        <div id="furn-container">
          <div
            style={
              position === 1 ? animateIn(1000).orbit : animateOut(600).orbit
            }
            id="item-container"
          >
            <img
              style={
                position === 1 ? animateIn(600).item : animateOut(200).item
              }
              id="red-chair"
              src={redChair}
              alt="Red Chair Illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
