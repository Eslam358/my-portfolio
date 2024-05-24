import "./portfolio.scss";
import { useContext } from "react";
import { maincontext_por } from "../../context/portfolio";
const Portoliolist = () => {
  const { list, setselected, selected } = useContext(maincontext_por);

  return (
    <div className="list-li">
      <ul>
        {list.map((a, index) => (
        
          <li
            key={a}
            className={`${selected === a && "active"}`}
            onClick={() => setselected(a)}
          >
            {a}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portoliolist;
