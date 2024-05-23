import "./menu.scss";
import { useContext } from "react";
import { maincontext } from "../../context/context_open";

const Menu = ({ dark, setdark }) => {
  const { mainpro, toggleDrawer } = useContext(maincontext);

  return (
    <div className={mainpro ? "menu active" : "menu "}>
      <div className="dark_light" onClick={()=>setdark(!dark)}>
      
      
          <svg fill={dark?"burlywood":"cadetblue"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
          </svg>
        
</div>
        <div className="list">
          <ul>
            <li>
              <a href="#intro">intro</a>
              <span></span>
            </li>
            <li>
              <a href="#portfolio">portfolio</a>
              <span></span>
            </li>
            <li href="#works">
              <a href="#works">works</a>
              <span></span>
            </li>
            <li>
              <a href="#testimonials">testimonials</a>
              <span></span>
            </li>
            <li>
              <a href="#contact">contact</a>
              <span></span>
            </li>
          </ul>
        </div>
      
    </div>
  );
};

export default Menu;

// ................................

// export default function TemporaryDrawer() {

//   return (

//   );
// }