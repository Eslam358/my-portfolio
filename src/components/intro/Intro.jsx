import "./intro.scss";
import React, { useState, useEffect } from "react";


import { init } from "ityped";

const Intro = () => {
  const [myElementRef, setMyElementRef] = useState(null); // استخدام Hooks لحالة عنصر DOM

  useEffect(() => {
    if (myElementRef) {
      init(myElementRef, {
        showCursor: false,

        strings: ["frontEnd Developer", "Eslam!"],
      });
    }
  }, [myElementRef]);
  return (
    <>
      <div  className="intro" id="intro">
        <div
      
          className="back_img"
        
        >
          {/* <img width="100%" height="100%" src="assets/msg5902152861-1294-removebg-preview.png" alt="" /> */}
          <img
          
            src="assets/msg5902152861-1294-removebg.png"
            alt=""
          />
          {/* <img width="100%" height="100%" src="assets/msg5902152861-1294.jpg" alt="" /> */}
        </div>
        <div className="text" >
          <div  >
            Hi There, I'm
          </div>
          <div  >
            Islam Fayez
          </div>
          <div  fontSize="30px">
            <div
              id="myElement"
            
              ref={setMyElementRef}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
