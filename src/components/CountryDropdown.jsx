import { fetchWeater } from "../utils/getWeather";
import "../styles/CountryDropdown.scss";
import { useState } from "react";

export default function CountryDropdown() {
  const [weatherIcon, setWeatherIcon] = useState("01d");

  const onSelect = (e) => {
    // console.dir(e.target.value);
    const selectedCountry = e.target.value;
    fetchWeater(selectedCountry).then((data) => {
      console.log("data :>> ", data.weather);
      setWeatherIcon(data.weather[0].icon);
    });
  };

  return (
    <div className="dropdownWrap">
      <div className="selectWrap">
        <select name="country" onChange={(e) => onSelect(e)} className="select">
          <option value="Seoul" selected>
            서울
          </option>
          <option value="Tokyo">도쿄</option>
          <option value="London">런던</option>
          <option value="Paris">파리</option>
          <option value="Hong Kong">홍콩</option>
          <option value="Washington">워싱턴</option>
          <option value="Singapore">싱가포르</option>
        </select>
        <span className="select__downIcon material-icons-round">
          expand_more
        </span>
      </div>
      <div className="icon">
        <img
          src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          //   src={`http://openweathermap.org/img/wn/10d@2x.png`}
          alt="날씨 아이콘"
        />
      </div>
    </div>
  );
}
