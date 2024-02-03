import "./infoCont.css";
import React from "react";
import { useState } from "react";

const InfoCont = () => {
  return (
    <div className="infoCont_Main_Cont">
      <div className="info_Box_Bottom">
        <div className="column_Box">
          <span className="info_Small_Text">CURRENT TIMEZONE</span>
          <span className="info_Bold_Text">Europe/London</span>
        </div>
        <div className="column_Box">
          <span className="info_Small_Text">Day of the year</span>
          <span className="info_Bold_Text">295</span>
        </div>
        <div className="column_Box">
          <span className="info_Small_Text">Day of the week</span>
          <span className="info_Bold_Text">5</span>
        </div>
        <div className="column_Box">
          <span className="info_Small_Text">Week number</span>
          <span className="info_Bold_Text">42</span>
        </div>
      </div>
    </div>
  );
};
export default InfoCont;
