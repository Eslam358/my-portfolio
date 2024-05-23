import { createContext, useState, useEffect } from "react";

import {
  designPortfolio,
  featuredPortfolio,
  webPortfolio,
  contentPortfolio,
  mobilePortfolio,
} from "../data.js";

export const maincontext_por = createContext();
const Portfolio_context = (props) => {
  const [list, setlist] = useState([
    "Netlify",
    "Design",
    "Featured",
    "Web",
    "Content",
    "Mobile",
  ]);
  const [selected, setselected] = useState("Netlify");
  const [portfolio, setportfolio] = useState([]);
  useEffect(() => {
    console.log(designPortfolio);
    console.log(featuredPortfolio);
    switch (selected) {
      case "Design":
        console.log("Design");
        setportfolio(designPortfolio);
        break;
      case "Featured":
        setportfolio(featuredPortfolio);
        break;
      case "Web":
        setportfolio(webPortfolio);
        break;
      case "Content":
        setportfolio(contentPortfolio);
        break;
      case "Mobile":
        setportfolio(mobilePortfolio);
        break;
      case "Netlify":
        setportfolio([]);
        break;
      default:
        setportfolio(featuredPortfolio);
    }
  }, [selected]);

  return (
    <maincontext_por.Provider
      value={{ setselected, selected, list, portfolio, setportfolio }}
    >
      {props.children}
    </maincontext_por.Provider>
  );
};

export default Portfolio_context;
