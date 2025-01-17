import { getDate } from "../utils/getDate";
import { useEffect, useState } from "react";
import axios from "axios";
const Header = () => {
  const API_KEY = import.meta.env.VITE_WERATHER_API_KEY;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}`;
  const today = new Date();
  const [weather, setWeather] = useState("");

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log(response);
        const weatherIcon = response.data.weather[0].icon;
        const weatherIconAdrs = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        setWeather(weatherIconAdrs);
        console.log(weatherIcon);
      })
      .catch((err) => {
        console.log("발생한 오류: ", err);
      });
  }, [URL, weather]);

  return (
    <div className="flex justify-between mt-14">
      <div className="flex flex-col text-2xl font-semibold">
        <h1>{getDate(today)}</h1>
        <div className="flex items-center">
          <h1>오늘의 날씨</h1>
          <img alt="Weather Icon" src={weather} className="w-14 h-14" />
        </div>
      </div>
      <div className="w-16">
        <img alt="rocket" src="/Emoji.png" />
      </div>
    </div>
  );
};
export default Header;
