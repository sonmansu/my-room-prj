import { useEffect, useRef, useState } from "react";

export default function Window() {
  const onClickWindow = (e) => {
    console.log("click window");
    e.preventDefault();
  };
  return (
    <div>
      <img
        className="img"
        src={require("../assets/img/window/day.png")}
        alt="창문"
      />
    </div>
  );
}
