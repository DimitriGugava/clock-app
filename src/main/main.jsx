import React from "react";
import { useState } from "react";
import "./main.css";
import spin from "../icons/spin.svg";
import sun from "../icons/sun.svg";
import morebutton from "../icons/morebutton.svg";
import daytime from "../assets/mobile/bg-image-daytime.jpg";
import InfoCont from "../infoCont/infoCont";

const Main = () => {
  const [more, setMore] = useState(false);

  const showMore = () => {
    setMore(!more);
  };

  return (
    <div className="main_Container">
      <div className="background_Opacity">
        {more && (
          <div className="header_Quote_Box">
            <div className="quote_Text_Box">
              <span className="quote_Text">
                “The science of operations, as derived from mathematics more
                especially, is a science of itself, and has its own abstract
                truth and value.”
              </span>
              <span className="quote_Author"> Ada Lovelace</span>
            </div>
            <img className="spin" alt="spin" src={spin} />
          </div>
        )}

        <div className="info_Box">
          <div className="day_Or_Night_Box">
            <img className="sunOrMoon" src={sun} alt="sun" />
            <span className="welcomeText">Good Morning</span>
          </div>
          <div className="clock_Location_Info_Box">
            <div className="clock_Box">
              <div className="clock">11:37</div>
              <div className="clock_Time_Zone_Text">BST</div>
            </div>
            <span className="location_Text">in London, UK</span>
          </div>
        </div>
        <button className="more_Button_Container" onClick={showMore}>
          More
          <img
            className="more_Round_Button"
            src={morebutton}
            alt="moreButton"
          />
        </button>
      </div>
      {more && <InfoCont />}
    </div>
  );
};
export default Main;
