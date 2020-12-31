/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// import { default as Windmill } from "@windmill/react-ui";
import React from "react";
import "./Compass.css";

function Flower() {
  // const [isOpen, setIsOpen] = useState(false);
  // const [cardShown, setCardShown] = useState(false);

  // function toggleBackdrop() {
  //   setIsOpen(!isOpen);
  //   setCardShown(false);
  // }

  // function toggleCard(e) {
  //   e.stopPropagation();
  //   setCardShown(!cardShown);
  // }

  return (
    // <>
    //   <div className="absolute">
    //     <div
    //       aria-hidden="true"
    //       onClick={toggleBackdrop}
    //       className="bg-pink-400 bottom-10 right-10 m-4 p-4 fixed w-32 bg-gray-50 border-gray-300 border-2 rounded-lg shadow-xl"
    //     >
    //       Open Compass Navigation
    //     </div>
    //   </div>

    // {/* TODO: slice 1-5 click handling doesn't work because of mask overlay? */}
    // {isOpen && (
    // <Windmill.Backdrop onClick={toggleBackdrop} className="z-0">
    <>This is a flower of hope.</>
    //   </Windmill.Backdrop>
    // )}
    // </>
  );
}

export default Flower;
