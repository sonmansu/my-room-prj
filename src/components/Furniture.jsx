import { useEffect, useRef, useState } from "react";
import ImageMap from "image-map";

export default function Furniture({
  kind,
  isSelectModalOn,
  setSelectModalOn,
  setImg,
  img,
}) {
  useEffect(() => {
    ImageMap("img[usemap]");
  }, []);

  useEffect(() => {
    const nickname = localStorage.getItem("nickname");
    const db = JSON.parse(localStorage.getItem("db"));
    // console.log("db :>> ", db);
    // console.log("db[nickname][kind]", db[nickname][kind]);
    setImg(db[nickname][kind]);
  }, [localStorage.getItem("db")]);

  const onClickItem = (e) => {
    e.preventDefault();

    console.log("onClickItem");

    if (isSelectModalOn) setSelectModalOn(false);
    else {
      setSelectModalOn(kind);
    }
  };
  return (
    <div>
      {/* <div className="bedDefaultImg" useMap="#image-map" /> */}
      <img
        src={require(`../assets/img/furnitures/${kind}/${img}.png`)}
        usemap="#image-map"
        alt="가구"
      />
      <map name="image-map">
        <area
          onClick={(e) => onClickItem(e)}
          target=""
          alt=""
          title=""
          href=""
          coords="60,533,62,444,75,436,93,444,165,438,165,426,176,422,191,430,189,473,341,545,345,524,359,516,373,526,376,570,363,583,265,634"
          shape="poly"
        />
      </map>
    </div>
  );
}
