/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { default as Windmill } from "@windmill/react-ui";
import React, { useState } from "react";
import "./Compass.css";

function Compass() {
  const [isOpen, setIsOpen] = useState(false);
  const [cardShown, setCardShown] = useState(false);

  function toggleBackdrop() {
    setIsOpen(!isOpen);
    setCardShown(false);
  }

  function toggleCard(e) {
    e.stopPropagation();
    setCardShown(!cardShown)
  }

  function printPie(e) {
    e.stopPropagation();
    toggleCard(e);
  }

  return (
    <>
      <div className="absolute">
        <div
          aria-hidden="true"
          onClick={toggleBackdrop}
          className="bg-pink-400 bottom-10 right-10 m-4 p-4 fixed w-32 bg-gray-50 border-gray-300 border-2 rounded-lg shadow-xl"
        >
          Open Compass Navigation
        </div>
      </div>

      {/* TODO: slice 1-5 click handling doesn't work because of mask overlay? */}
      {isOpen && (
        <Windmill.Backdrop onClick={toggleBackdrop} className="z-0">
          <div className="relative">
          {cardShown && (
            <div className="definitionCard">
              <div onClick={e => toggleCard(e)}> X </div>
              <div className="content">
                Definition
                <p>
                  <a href="/avatars">Click to hear stories</a>
                </p>
              </div>
            </div>
          )}
            <div className="compassContainer">
              <div className="outerCircle"/>
              <div className="innerCircle">
                <div className="content">The Compass of Oppression</div>
              </div>
              <div className="pieContainer">
                <div id="pieSlice1" className="hold">
                  <div className="pie" onClick={e => printPie(e, "slice1")} />
                </div>
                <div id="pieSlice2" className="hold">
                  <div className="pie" onClick={e => printPie(e, "slice2")} />
                </div>
                <div id="pieSlice3" className="hold">
                  <div className="pie" onClick={e => printPie(e, "slice3")} />
                </div>
                <div id="pieSlice4" className="hold">
                  <div className="pie" onClick={e => printPie(e, "slice4")} />
                </div>
                <div id="pieSlice5" className="hold">
                  <div className="pie" onClick={e => printPie(e, "slice5")} />
                </div>
                <div id="pieSlice6" className="hold">
                  <div className="pie" onClick={e => printPie(e, "slice6")} />
                </div>
                <div id="pieSlice7" className="hold">
                  <div className="pie" onClick={e => printPie(e, "slice7")} />
                </div>
                <div id="pieSlice8" className="hold">
                  <div className="pie" onClick={e => printPie(e, "slice8")} />
                </div>
                <div id="pieSlice9" className="hold">
                  <div className="pie" onClick={e => printPie(e, "slice9")} />
                </div>
                <div id="pieSlice10" className="hold">
                  <div className="pie" onClick={e => printPie(e, "slice10")} />
                </div>
                <div id="pieSlice11" className="hold">
                  <div className="pie" onClick={e => printPie(e, "slice11")} />
                </div>
                <div id="pieSlice12" className="hold">
                  <div className="pie" onClick={e => printPie(e, "slice12")} />
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
