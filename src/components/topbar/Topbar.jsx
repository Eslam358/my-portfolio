import { useContext, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { maincontext } from "../../context/context_open";
import "./topbar.scss";
export default function Topbar() {
  const { toggleDrawer, mainpro } = useContext(maincontext);
  const indigo2 = "#15023a"; // ;
  const [show, setshow]=useState(false);

  return (
    <div className={mainpro ? "topbar active" : "topbar "}>
      <div className="topbar-con ">
        <div className="topbar-right">
          <h2 className="logo" href="#">
            Eslam
            <span className={show ? " active" : ""} onClick={()=>setshow(!show)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512 " >
                <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
              </svg>
            </span>
          </h2>
          <div  className={show ? "info active" : "info"}>
            <div target="_blank" href="https://eslam900aa@gmail.com">
              <EmailIcon
                sx={{
                  position: "relative",
                  top: "6px",
                  fontSize: "20px",
                  mr: "5px",
                }}
              />
              eslam900aa@gmail.com
            </div>
            <div>
              <CallIcon
                sx={{
                  position: "relative",
                  top: "6px",
                  fontSize: "20px",
                  mr: "7px",
                }}
              />
              01002679358
            </div>
            <div target="_blank" href="https://wa.me/qr/BF5TOKTUKX4IA1">
              <WhatsAppIcon
                sx={{
                  position: "relative",
                  top: "6px",
                  fontSize: "20px",
                  mr: "5px",
                }}
              />
              01002679358
            </div>
          </div>
        </div>

        <div className="topbar-left" onClick={() => toggleDrawer(!mainpro)}>
          <div className={mainpro ? "icon_main active" : "icon_main"}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
