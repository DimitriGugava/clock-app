import React from "react";
import { useState, useEffect } from "react";
import "./main.css";
import spin from "../icons/spin.svg";
import sun from "../icons/sun.svg";
import morebutton from "../icons/morebutton.svg";
import daytime from "../assets/mobile/bg-image-daytime.jpg";
import InfoCont from "../infoCont/infoCont";
import { useQuery } from "@tanstack/react-query";
import moon from "../icons/moon.svg";
import backgroundImage from "../assets/mobile/bg-image-nighttime.jpg";

const Main = () => {
  const [more, setMore] = useState(true);
  const [quoteText, setQuoteText] = useState("");
  const [map, setMap] = useState("");
  const [location, setLocation] = useState("");
  const [hour, setHour] = useState("");
  const [utc, setUtc] = useState("");
  const [dayOrNight, setDayOrNight] = useState(true);
  const [rotateIcon, setRotateIcon] = useState(false);

  const {
    data: quoteData,
    isLoading: isQuoteLoading,
    isError: isQuoteError,
    refetch: refetchQuote,
  } = useQuery({
    queryKey: ["advice"],
    queryFn: () =>
      fetch("https://api.adviceslip.com/advice").then((res) => res.json()),
  });
  //adding comment
  const {
    data: mapData,
    isLoading: isMapLoading,
    isError: isMapError,
    refetch: refetchMap,
  } = useQuery({
    queryKey: ["mapData"],
    queryFn: () =>
      fetch("http://worldtimeapi.org/api/timezone/Asia/Tbilisi").then((res) =>
        res.json()
      ),
  });

  const fetchLocationInfo = () => {
    const apiKey = "R6jzPOhADfw0Y05rK623JIj6bHOr0UJBqVr4mCAQ";
    const ip = mapData.client_ip;
    return fetch(
      `https://api.ipbase.com/v2/info?apikey=${apiKey}&ip=${ip}`
    ).then((res) => res.json());
  };

  const {
    data: locationData,
    isLoading: isLocationLoading,
    isError: isLocationError,
  } = useQuery({
    queryKey: ["locationInfo"],
    queryFn: fetchLocationInfo,
  });

  const showMore = () => {
    setMore(!more);
    setRotateIcon(!rotateIcon);
  };

  useEffect(() => {
    if (quoteData) {
      setQuoteText(quoteData.slip.advice);
    }
  }, [quoteData]);

  useEffect(() => {
    const cityName = locationData?.data?.location.city.name;
    if (cityName) {
      setLocation(cityName);
    } else {
      console.log("City name not available in locationData");
    }
  }, [locationData]);

  useEffect(() => {
    if (mapData) {
      setMap(mapData);
    }
  }, [mapData]);
  console.log(map);

  useEffect(() => {
    if (mapData && mapData.datetime) {
      const timePart = mapData.datetime.split("T")[1]; // // Assuming timePart = "09:10:13.938216+04:00" or similar format
      const hourAndMinutes = timePart.split(":").slice(0, 2).join(":");

      const utc_Func = mapData.utc_offset;

      setHour(hourAndMinutes);
      setUtc(utc_Func);
    }
  }, [mapData]);

  const dayOrNightFunc = () => {
    const isDayTime = hour >= "06:00" && hour <= "18:00";
    setDayOrNight(isDayTime);
  };
  useEffect(() => {
    dayOrNightFunc();
  }, [hour]);

  const backgroundStyle = {
    backgroundImage: `url(${dayOrNight ? daytime : backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div className="main_Container" style={backgroundStyle}>
        <div className="background_Opacity">
          {more && (
            <div className="header_Quote_Box">
              <div className="quote_Text_Box">
                <span className="quote_Text">{quoteText}</span>
              </div>

              <img
                className="spin"
                alt="spin"
                src={spin}
                onClick={refetchQuote}
              />
            </div>
          )}

          <div className="info_Box">
            <div className="day_Or_Night_Box">
              {dayOrNight ? (
                <>
                  <img className="sunOrMoon" src={sun} alt="sun" />
                  <span className="welcomeText">Good Morning</span>
                </>
              ) : (
                <>
                  <img className="sunOrMoon" src={moon} alt="moon" />
                  <span className="welcomeText">Good Evening</span>
                </>
              )}
            </div>
            <div className="clock_Location_Info_Box">
              <div className="clock_Box">
                <div className="clock">{hour}</div>
                <div className="clock_Time_Zone_Text">{utc}</div>
              </div>
              <span className="location_Text">in {location}</span>
            </div>
          </div>
          <button className="more_Button_Container" onClick={showMore}>
            More
            <img
              className="more_Round_Button"
              src={morebutton}
              alt="moreButton"
              style={{
                transform: rotateIcon ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>
        </div>
      </div>
      {!more && <InfoCont map={map} setMap={setMap} dayOrNight={dayOrNight} />}
    </>
  );
};
export default Main;
