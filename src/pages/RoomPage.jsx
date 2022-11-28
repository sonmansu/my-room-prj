import React from "react";
import { useEffect, useRef, useState } from "react";
import SelectModal from "../components/SelectModal";
import "../styles/RoomPage.scss";
import { useNavigate } from "react-router-dom";
import Furniture from "../components/Furniture";
import Window from "../components/Window";
import ImageMap from "image-map";
import CountryModal from "../components/CountryModal";

export default function RoomPage() {
    const [nickname, setNickname] = useState(
        // localStorage.getItem("nickname")
        ""
    );
    const navigate = useNavigate();
    const [isSelectModalOn, setSelectModalOn] = useState(false);
    const [isCountryModalOn, setCountryModalOn] = useState(false);
    const [bedImg, setBedImg] = useState(
        // JSON.parse(localStorage.getItem("db"))[nickname]["bed"]
        "default"
    );
    const [deskImg, setDeskImg] = useState(
        // JSON.parse(localStorage.getItem("db"))[nickname]["desk"]
        "default"
    );
    const [wallImg, setWallImg] = useState(
        // JSON.parse(localStorage.getItem("db"))[nickname]["wall"]
        "default"
    );
    const imgHandlers = {
        bed: setBedImg,
        desk: setDeskImg,
        wall: setWallImg,
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

        if (isCountryModalOn) setCountryModalOn(false);
        else {
            setCountryModalOn(kind);
        }
    };
    return (
        <div className="RoomPageWrap">
            <div className="menuWrap">
                <img src={require("../assets/icons/menu.png")} alt="메뉴" />
            </div>
            <div className="titleWrap">
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
                <Furniture
                    kind="wall"
                    isSelectModalOn={isSelectModalOn}
                    setSelectModalOn={setSelectModalOn}
                    img={wallImg}
                    setImg={setWallImg}
                />
                <Furniture
                    kind="desk"
                    isSelectModalOn={isSelectModalOn}
                    setSelectModalOn={setSelectModalOn}
                    img={deskImg}
                    setImg={setDeskImg}
                />
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
                        coords="262,337,265,437,475,536,590,471,592,414,386,314"
                        shape="poly"
                        style={{ cursor: "pointer" }}
                    />
                    <area
                        onClick={(e) => onClickWindow(e, "window")}
                        target=""
                        alt=""
                        title=""
                        coords="129,222,126,403,316,319,313,124"
                        shape="poly"
                        style={{ cursor: "pointer" }}
                    />
                    <area
                        onClick={(e) => onClickItem(e, "desk")}
                        target=""
                        alt=""
                        title=""
                        coords="55,447,60,542,211,610,272,576,275,475,131,413"
                        shape="poly"
                        style={{ cursor: "pointer" }}
                    />
                    <area
                        onClick={(e) => onClickItem(e, "wall")}
                        target=""
                        alt=""
                        title=""
                        coords="415,120,414,356,704,499,704,252,619,211"
                        shape="poly"
                        style={{ cursor: "pointer" }}
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
            {isCountryModalOn && (
                <CountryModal setCountryModalOn={setCountryModalOn} />
            )}
        </div>
    );
}
