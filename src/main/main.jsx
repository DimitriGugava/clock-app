import React from "react";
import { useState, useEffect } from "react";
import "./main.css";
import spin from "../icons/spin.svg";
import sun from "../icons/sun.svg";
import morebutton from "../icons/morebutton.svg";
import daytime from "../assets/mobile/bg-image-daytime.jpg";
import InfoCont from "../infoCont/infoCont";
import { useQuery } from "@tanstack/react-query";

const Main = () => {
  const [more, setMore] = useState(true);
  const [quoteText, setQuoteText] = useState("");
  const [map, setMap] = useState("");
  const [location, setLocation] = useState("");

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
  };

  useEffect(() => {
    if (quoteData) {
      setQuoteText(quoteData.slip.advice);
    }
  }, [quoteData]);

  useEffect(() => {
    if (mapData) {
      setMap(mapData);
    }
  }, [mapData]);

  useEffect(() => {
    const cityName = locationData?.data?.location?.city?.name;
    if (cityName) {
      setLocation(cityName);
    } else {
      console.log("City name not available in locationData");
    }
  }, [locationData]);

  return (
    <>
      <div className="main_Container">
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
              <img className="sunOrMoon" src={sun} alt="sun" />
              <span className="welcomeText">Good Morning</span>
            </div>
            <div className="clock_Location_Info_Box">
              <div className="clock_Box">
                <div className="clock">11:37</div>
                <div className="clock_Time_Zone_Text">BST</div>
              </div>
              <span className="location_Text">in{location}</span>
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
      </div>
      {!more && <InfoCont />}
    </>
  );
};
export default Main;
