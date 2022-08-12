import React, { useRef, useState } from "react";
import {
  Rectangle,
  Pyramid,
  Sphere,
  ThreeDimRectangle,
  RevRec,
} from "../assets/svgs.js";

export default function AnimatedCarousel() {
  const [className, changeClass] = useState("one");
  const divRef = useRef(null);
  const Click = () => {
    changeClass("two");
  };
  return (
    <div>
      <button
        onClick={() => {
          Click();
        }}
      >
        {className}
      </button>
      <div id="carousel-wrapper">
        <div id="recCont" ref={divRef}>
          {RevRec(className)}
          <div id="rec_bg" className={className}></div>
        </div>
      </div>
    </div>
  );
}
