import "./infoCont.css";
import React from "react";
import { useState } from "react";

const InfoCont = ({ map, dayOrNight }) => {
  const infoContBackGround = {
    background: !dayOrNight
      ? "rgba(0, 0, 0, 0.75)"
      : "rgba(255, 255, 255, 0.75)",
    backdropFilter: dayOrNight ? "blur(20.387113571166992px)" : "none",
    WebkitBackdropFilter: dayOrNight ? "blur(20.387113571166992px)" : "none",
  };
  const fontForDark = {
    color: !dayOrNight ? "white" : "black",
  };

  return (
    <div className="infoCont_Main_Cont" style={infoContBackGround}>
      <div className="info_Box_Bottom">
        <div className="column_Box">
          <span className="info_Small_Text" style={fontForDark}>
            CURRENT TIMEZONE
          </span>
          <span className="info_Bold_Text" style={fontForDark}>
            {map?.timezone}
          </span>
        </div>
        <div className="column_Box">
          <span className="info_Small_Text" style={fontForDark}>
            Day of the year
          </span>
          <span className="info_Bold_Text" style={fontForDark}>
            {map?.day_of_year}
          </span>
        </div>
        <div className="column_Box">
          <span className="info_Small_Text" style={fontForDark}>
            Day of the week
          </span>
          <span className="info_Bold_Text" style={fontForDark}>
            {map?.day_of_week}
          </span>
        </div>
        <div className="column_Box">
          <span className="info_Small_Text" style={fontForDark}>
            Week number
          </span>
          <span className="info_Bold_Text" style={fontForDark}>
            {map?.week_number}
          </span>
        </div>
      </div>
    </div>
  );
};
export default InfoCont;
