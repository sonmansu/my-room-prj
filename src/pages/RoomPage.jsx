import React from "react";
import ImageMap from "image-map";
import { useEffect, useRef, useState } from "react";
import bed_default from "../assets/img/bed_default.png";
import SelectModal from "../components/SelectModal";
import CountryDropdown from "../components/CountryDropdown";
import "../styles/RoomPage.scss";
import { useNavigate } from "react-router-dom";

export default function RoomPage() {
  const navigate = useNavigate();
  console.log("navigator.userAgent :>> ", navigator.userAgent);
  const [isSelectModalOn, setSelectModalOn] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [bedImg, setBedImg] = useState("bed_default");
  const [nickname, setNickname] = useState("");
  let curBedImg = useRef(bedImg);

  useEffect(() => {
    ImageMap("img[usemap]");
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("nickname")) {
      navigate("/login");
    } else {
      setNickname(localStorage.getItem("nickname"));
    }
  }, []);

  const onClickItem = (e, item) => {
    e.preventDefault();

    console.log("onClickItem");

    if (isSelectModalOn) setSelectModalOn(false);
    else {
      curBedImg.current = bedImg;
      setSelectModalOn(true);
      setSelectedItem(item);
    }
  };

  return (
    <div className="RoomPageWrap">
      <div style={{ marginLeft: "1rem" }}>
        <CountryDropdown />
        <p className="title">{nickname} 님의 방</p>
      </div>
      <div className="imgWrap">
        <div className="roomBgImg" />

        {/* <div className="bedDefaultImg" useMap="#image-map" /> */}
        <img
          src={require(`../assets/img/${bedImg}.png`)}
          usemap="#image-map"
          alt="가구"
        />
        <map name="image-map">
          <area
            onClick={(e) => onClickItem(e, "bed")}
            target=""
            alt=""
            title=""
            href=""
            coords="60,533,62,444,75,436,93,444,165,438,165,426,176,422,191,430,189,473,341,545,345,524,359,516,373,526,376,570,363,583,265,634"
            shape="poly"
          />
        </map>
      </div>
      {isSelectModalOn && (
        <SelectModal
          item={selectedItem} //'bed'
          setSelectModalOn={setSelectModalOn}
          curBedImg={curBedImg.current}
          setBedImg={setBedImg}
        />
      )}
      {/* <SelectModal /> */}
    </div>
  );
}