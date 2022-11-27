import React from "react";
import { useEffect, useRef, useState } from "react";
import SelectModal from "../components/SelectModal";
import CountryDropdown from "../components/CountryDropdown";
import "../styles/RoomPage.scss";
import { useNavigate } from "react-router-dom";
import Furniture from "../components/Furniture";

export default function RoomPage() {
  const navigate = useNavigate();
  const [isSelectModalOn, setSelectModalOn] = useState(false);
  const [nickname, setNickname] = useState("");
  const [bedImg, setBedImg] = useState("default");
  const [deskImg, setDeskImg] = useState("default");
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

  return (
    <div className="RoomPageWrap">
      <div style={{ marginLeft: "1rem" }}>
        <CountryDropdown />
        <p className="title">{nickname} 님의 방</p>
      </div>
      <div className="imgWrap">
        <div className="roomBgImg" />

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
