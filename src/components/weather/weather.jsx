import { useEffect, useState } from "react";
import axios from "axios";
import "./weather.css";

export const Weather = () => {
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
    locality: "",
    temperature: "",
    skyStatus: ""
  });

  navigator.geolocation.getCurrentPosition(function (position) {
    let lat = position.coords.latitude.toFixed(7);
    let long = position.coords.longitude.toFixed(8);
    setLocation((location) => ({
      ...location,
      latitude: lat,
      longitude: long
    }));
  });

  useEffect(() => {
    (async () => {
      try {
        const {
          data: {
            main: { temp },
            name,
            weather
          }
        } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${
            location.latitude
          }&lon=${Number(
            location.longitude
          )}&appid=${"de134159c8817db45dddd8d164dbaf2c"}&units=metric`
        );
        console.log("Weather -", temp, name, weather[0].description);
        setLocation((location) => ({
          ...location,
          temperature: temp.toFixed(0),
          locality: name,
          skyStatus: weather
        }));
      } catch (error) {
        console.log("Error -", error);
      }
    })();
  }, [location.latitude, location.longitude]);

  const { locality, temperature, skyStatus } = location;

  return (
    <>
      <div className="weather-container heading-6">
      
          <span className="heading-4 temp">
            {temperature}
            <span className="degree">&#176;</span>
          </span>
          <span className="heading-6 sky-status">
            {" "}
            | {skyStatus[0]?.description}
          </span>
        </div>
        <div className="locality">
          <span className="heading-5">{locality}</span>
        </div>
      
    </>
  );
};