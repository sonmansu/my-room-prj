import React from "react";
import { useEffect, useRef, useState } from "react";
import SelectModal from "../components/SelectModal";
import CountryDropdown from "../components/CountryDropdown";
import "../styles/RoomPage.scss";
import { useNavigate } from "react-router-dom";
import Furniture from "../components/Furniture";
import Window from "../components/Window";
import ImageMap from "image-map";

export default function RoomPage() {
  const [nickname, setNickname] = useState(localStorage.getItem("nickname"));
  const navigate = useNavigate();
  const [isSelectModalOn, setSelectModalOn] = useState(false);
  const [bedImg, setBedImg] = useState(
    JSON.parse(localStorage.getItem("db"))[nickname]["bed"]
  );
  const [deskImg, setDeskImg] = useState(
    JSON.parse(localStorage.getItem("db"))[nickname]["desk"]
  );
  const imgHandlers = {
    bed: setBedImg,
    desk: setDeskImg,
  };

  useEffect(() => {
    if (!localStorage.getItem("nickname")) {
      navigate("/login");
    } else {
      setNickname(localStorage.getItem("nickname"));
    }
  }, []);
  useEffect(() => {
    ImageMap("img[usemap]");
  }, []);

  const onClickItem = (e, kind) => {
    e.preventDefault();
    console.log("onClickItem");

    if (isSelectModalOn) setSelectModalOn(false);
    else {
      setSelectModalOn(kind);
    }
  };

  const onClickWindow = (e, kind) => {
    console.log("click window");
    e.preventDefault();
  };
  return (
    <div className="RoomPageWrap">
      <div style={{ marginLeft: "1rem" }}>
        <CountryDropdown />
        <p className="title">{nickname} 님의 방</p>
      </div>
      <div className="imgWrap">
        {/* <img
          className="img"
          src={require("../assets/img/window/day.png")}
          alt="창문"
        /> */}
        <Window />
        <img
          className="img"
          src={require("../assets/img/room_bg.png")}
          alt="방"
          usemap="#image-map"
        />
        {/* <div className="roomBgImg" /> */}
        {/* <div style={{ width: "30px" }}>
          <Furniture
            kind="desk"
            isSelectModalOn={isSelectModalOn}
            setSelectModalOn={setSelectModalOn}
            img={deskImg}
            setImg={setDeskImg}
          />
        </div> */}
        <Furniture
          kind="bed"
          isSelectModalOn={isSelectModalOn}
          setSelectModalOn={setSelectModalOn}
          img={bedImg}
          setImg={setBedImg}
        />
        <map name="image-map">
          <area
            onClick={(e) => onClickItem(e, "bed")}
            target=""
            alt=""
            title=""
            coords="60,533,62,444,75,436,93,444,165,438,165,426,176,422,191,430,189,473,341,545,345,524,359,516,373,526,376,570,363,583,265,634"
            shape="poly"
          />
          <area
            onClick={(e) => onClickWindow(e, "window")}
            target=""
            alt=""
            title=""
            coords="123,217,126,413,317,320,318,126"
            shape="poly"
          />
        </map>
      </div>
      {isSelectModalOn && (
        <SelectModal
          isSelectModalOn={isSelectModalOn}
          setSelectModalOn={setSelectModalOn}
          imgHandlers={imgHandlers}
        />
      )}
    </div>
  );
}
