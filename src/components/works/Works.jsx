import { useState } from "react";
import "./works.scss";
import { data_work } from "../../data";

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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
      </div>
      <div
        className={activeArr === 1 ? "active right" : "right"}
        onClick={() => {
          activeArr !== 1 && setactiveArr(activeArr - 1);
        }}
      >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
      </div>
    </div>
  );
}
