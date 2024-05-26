import "./portfolio.scss";
import { useEffect, useState, useContext } from "react";

import PortfolioList from "../portfolio/portoliolist";
import { maincontext_por } from "../../context/portfolio";

const Portfolio = () => {
  const { portfolio, selected } = useContext(maincontext_por);
  const [myData, setmyData] = useState([]);

  const [myDataGet, setmyDataGet] = useState([]);
  const [myDataArr, setmyDataArr] = useState([]);
  async function AAA(fun1) {
    let data1 = fun1.map((data) => data.build_settings.repo_path.split("/")[1]);
    // let data2 =  fun2.map(data=> data.name )
    setmyDataArr(data1);
  }

  useEffect(() => {
    fetch("https://api.github.com/users/Eslam358/repos")
      .then((a) => a.json())
      .then((data) => {
        setmyDataGet(data);
      })
      .catch((er) => {});
    // .......................................................
    fetch(
      "https://api.netlify.com/api/v1/sites?access_token=wPE2DAxjc_gtwB-pDK2HsIOm63NtxWL9O8WPawEsjH8"
    )
      .then((a) => a.json())
      .then((data) => {
        setmyData(data);
        AAA(data);

        return data;
      })
      .catch((er) => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const CardPortfolio = (
    <>
      {myData.map((data, index) => (
        <div key={data.id} className="card">
          <div className="img">
            <img src={data.screenshot_url} alt="img" />
          </div>
          <div className="title">
            {" "}
            {data.build_settings.repo_path.split("/")[1]}
          </div>
          <div className="button">
            <div className="show">
              <a target="_blank" href={data.build_settings.repo_url}  rel="noreferrer">
                <button>Repo</button>
              </a>
            </div>
            <div className="gethup">
              <a target="_blank" href={`https://${data.default_domain}`}  rel="noreferrer">
                <button target="_blank">show</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
  const CardPortfolioGet = (
    <div className="container">
      {CardPortfolio}
      {myDataGet
        .filter((a, index) => !myDataArr.includes(a.name))
        .map((data, index) => (
          <div key={data.id} className="card">
            <div className="img">
              <img
                src={
                  index % 2 === 0
                    ? "https://d33wubrfki0l68.cloudfront.net/65655332d77d4c00082e960f/screenshot_2023-11-28-02-41-29-0000.png"
                    : "https://d33wubrfki0l68.cloudfront.net/649d9927d77a80195522867b/screenshot_2023-06-29-14-46-17-0000.png"
                }
                alt="img"
              />
            </div>
            <div className="title">{data.name}</div>
            <div className="button">
              <div className="show">
                <a href={data.html_url} target="_blank"  rel="noreferrer">
                  <button>Repo</button>
                </a>
              </div>
              <div className="gethup">
                <a href={`https://${data.default_domain}`} target="_blank"  rel="noreferrer">
                  <button>show</button>
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
  const CardPortfolioArr = (
    <div className="container">
      {portfolio.map((data, index) => (
        <div key={data.id} className="card">
          <div className="img">
            <img src={data.img} alt="img" />
          </div>
          <div className="title">{data.title}</div>
          <div className="button">
            <div className="show">
              <button href="#" target="_blank">
                Repo
              </button>
            </div>
            <div className="gethup">
              <button href="#" target="_blank">
                show
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="portfolio" id="portfolio">
      <div className="head">
        <h2>projects</h2>
      </div>
      <div className="por">
        <PortfolioList />
      </div>

      {selected === "Netlify" ? CardPortfolioGet : CardPortfolioArr}
    </div>
  );
};

export default Portfolio;
