import { useState } from "react";
import "./works.scss";
import { data_work } from "../../data";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Works() {
  const [activeArr, setactiveArr] = useState(1);

  return (
    <div className="works" id="works">
      <div className="head">
        <h1>works</h1>
      </div>
      <div className="spring">
        {data_work.map((a) => (
          <div
            key={a.id}
            className={
              activeArr === +a.id
                ? "contenr active"
                : activeArr > +a.id
                ? "contenr show"
                : activeArr < +a.id
                ? "contenr"
                : "contenr"
            }
          >
            <div className="item">
              <div className=" item-left">
                <div className="icon">
                  <img src={a.icon} alt="jjjjj" />
                </div>
                <div className="data">
                  <h2>{a.title}</h2>
                  <p>
                  {a.desc}
                  </p>
                </div>
              </div>
              <div className=" item-right">
                <img src={a.img} alt="img" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={activeArr === data_work.length ? "active left" : "left"}
        onClick={() => {
          activeArr !== data_work.length && setactiveArr(activeArr + 1);
        }}
      >
        <ChevronLeftIcon fontSize="0px" />
      </div>
      <div
        className={activeArr === 1 ? "active right" : "right"}
        onClick={() => {
          activeArr !== 1 && setactiveArr(activeArr - 1);
        }}
      >
        <ChevronRightIcon fontSize="" />
      </div>
    </div>
  );
}
