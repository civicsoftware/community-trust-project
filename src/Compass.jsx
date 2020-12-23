import { default as Windmill } from "@windmill/react-ui";
import React, { useState } from "react";
import "./Compass.css";

function Compass() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleBackdrop() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="absolute">
        <div onClick={toggleBackdrop} className="bg-pink-400 bottom-10 right-10 m-4 p-4 fixed w-32 bg-gray-50 border-gray-300 border-2 rounded-lg shadow-xl">
          Open Compass Navigation
        </div>
      </div>

      {isOpen && (
        <Windmill.Backdrop onClick={toggleBackdrop}>
          <div className="relative">
            <div className="compassContainer">
              <div className="outerCircle"></div>
              <div className="innerCircle">
                <div className="content">The Compass of Oppression</div>
              </div>
              <div className="pieContainer">
                <div id="pieSlice1" className="hold">
                  <div className="pie" />
                </div>
                <div id="pieSlice2" className="hold">
                  <div className="pie" />
                </div>
                <div id="pieSlice3" className="hold">
                  <div className="pie" />
                </div>
                <div id="pieSlice4" className="hold">
                  <div className="pie" />
                </div>
                <div id="pieSlice5" className="hold">
                  <div className="pie" />
                </div>
                <div id="pieSlice6" className="hold">
                  <div className="pie" />
                </div>
                <div id="pieSlice7" className="hold">
                  <div className="pie" />
                </div>
                <div id="pieSlice8" className="hold">
                  <div className="pie" />
                </div>
                <div id="pieSlice9" className="hold">
                  <div className="pie" />
                </div>
                <div id="pieSlice10" className="hold">
                  <div className="pie" />
                </div>
                <div id="pieSlice11" className="hold">
                  <div className="pie" />
                </div>
                <div id="pieSlice12" className="hold">
                  <div className="pie" />
                </div>
              </div>
            </div>
          </div>
        </Windmill.Backdrop>
      )}
    </>
  );
}

export default Compass;
