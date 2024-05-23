import "./testimonials.scss";
import RedoIcon from '@mui/icons-material/Redo';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Testimonials() {



  return (
    <div className="testimonials" id="testimonials">
      <div className="head">
      <h2>Testimonials</h2>
      </div>
      <div className="container">
      {  [1,2,3].map(a => (
        <div className="card" key={a}>
          <div className="title">
        <RedoIcon  className="icon"/>
        <div className="icon-img">
          <img src="assets/man.png" alt="" />
        </div>
          <TwitterIcon/>
        </div>
        <div className="info">
          <div className="desc">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem</p>
          </div>
          <div className="name-po">
            <h2>Tom Durden</h2>
            <h3>Senior Developer</h3>
          </div>
        </div>
        </div>

        ))}
      </div>
    </div>
  );
}
