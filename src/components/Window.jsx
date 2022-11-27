import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchWeater } from "../utils/getWeather";

export default function Window() {
  const onClickWindow = (e) => {
    console.log("click window");
    e.preventDefault();
  };
  const nickname = localStorage.getItem("nickname");
  const db = JSON.parse(localStorage.getItem("db"));
  //   console.log('db[nickname]["country"]', db[nickname]["country"]);
  const [img, setImg] = useState(
    // db[nickname]["country"]
    "Seoul"
  );
  const [country, setCountry] = useState(
    // db[nickname]["country"],
    "Seoul"
  );
  const [fileName, setFileName] = useState("day");

  useEffect(() => {
    if (!db) {
      return;
    }
    console.log("window useEffect ", db[nickname]["country"]);
    let country = db[nickname]["country"];
    setCountry(db[nickname]["country"]);
    console.log("country :>> ", country); //state 변수로 쓰면 아직 안변해있음
    fetchWeater(country).then((data) => {
      console.log("data :>> ", data);
      //   setWeatherIcon(data.weather[0].icon);
      const iconCode = data.weather[0].icon;
      const weatherValue = data.weather[0].main;
      console.log("iconCode", iconCode);
      const dayOrNightCode = iconCode.at(-1);
      const time = dayOrNightCode === "d" ? "day" : "night";
      const weather = ["Drizzle", "Rain"].includes(weatherValue) ? "_rain" : "";
      const fileName = time + weather;
      console.log("fileName :>> ", fileName);
      setFileName(fileName);
    });
  }, [db?.[nickname]["country"], country]);

  useEffect(() => {
    window.addEventListener("storage", () => {
      console.log("whwefeweffawe!!!!!!!!");
    });
  }, []);

  return (
    <div>
      <img
        className="img"
        src={require(`../assets/img/window/${fileName}.png`)}
        alt="창문"
      />
    </div>
  );
}
