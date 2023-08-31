import "../LandingPage/LandingPage.css";
import Nurse from "../LandingPage/nurse1.jpg"

function LandingPage() {
  return (
    <div className="landingPage">
        <div className="left">
            <h4> ATU HyperX</h4>
            <h1><span className="top">Your Health</span> <br />
            is Our Priority</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eos aliquid pariatur architecto earum eaque laborum quibusdam eius vitae debitis, totam vel omnis voluptas deserunt hic consequuntur sint possimus nulla.</p>
        </div>
        <div className="right">
            <img src={Nurse} alt="nurse" />
          
        </div>
    </div>
  )
}

export default LandingPage