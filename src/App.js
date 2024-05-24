import Topbar from "./components/topbar/Topbar";
import { useEffect, useState } from "react";
import Menu from "./components/menu/Menu";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Prodeutscontext from "./context/context_open";
import Portfoliocontext from "./context/portfolio";
import "./app.scss";

function App() {
  const [dark, setdark] = useState(false);
  useEffect(() => {
    setdark(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", (event) => {
  
    setdark(event.matches)
  });

  }, []);


  return (
    // <div className="app dark">
    <div className={dark ? "app dark" : "app light"}>
      <Prodeutscontext>
        <Topbar />
        <Menu dark={dark} setdark={setdark} />
      </Prodeutscontext>

      <div className="sections">
        <Portfoliocontext>
          <Intro />
          <Portfolio />
          <Works />
          <Testimonials />
          <Contact />
        </Portfoliocontext>
      </div>
    </div>
  );
}

export default App;
