import { useEffect, useRef, useState } from "react";
import "../styles/Furniture.scss";

export default function Furniture({
  kind,
  isSelectModalOn,
  setSelectModalOn,
  img,
  setImg,
}) {
  const nickname = localStorage.getItem("nickname");

  console.log("furniture : ");

  useEffect(() => {
    console.log("useEffect!");
    // console.log("db :>> ", db);(
    // console.log("db[nickname][kind]", db[nickname][kind]);
    if (!localStorage.getItem("db"))
      setImg(JSON.parse(localStorage.getItem("db"))[nickname][kind]);
  }, [localStorage.getItem("db")]);

  //   const onClickItem = (e) => {
  //     e.preventDefault();
  //     console.log("onClickItem");

  //     if (isSelectModalOn) setSelectModalOn(false);
  //     else {
  //       setSelectModalOn(kind);
  //     }
  //   };
  return (
    <div className="furnitureWrap">
      {/* <div className="bedDefaultImg" useMap="#image-map" /> */}
      <img
        src={require(`../assets/img/furnitures/${kind}/${img}.png`)}
        // src={require(`../assets/img/furnitures/${kind}/${
        //   JSON.parse(localStorage.getItem("db"))[nickname][kind]
        // }.png`)}
        usemap="#image-map"
        alt="가구"
      />
    </div>
  );
}
