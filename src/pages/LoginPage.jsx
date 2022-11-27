import React, { useState } from "react";
import "../styles/LoginPage.scss";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const [pw, setPw] = useState("");

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
  };
  const onClickNext = () => {
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("pw", pw);
    navigate("/");
    let db = JSON.parse(localStorage.getItem("db"));
    if (!db) db = {};
    console.log("db", db);
    db[nickname] = {
      nickname: nickname,
      country: "Seoul",
      bed: "default",
      desk: "default",
      wall: "default",
    };
    localStorage.setItem("db", JSON.stringify(db));
  };

  return (
    <div className="loginPageWrap">
      <p className="label">닉네임을 입력하세요.</p>
      <input
        className="input"
        type="text"
        placeholder="최대 8글자"
        value={nickname}
        onChange={onChangeNickname}
      />
      <p className="label">비밀번호를 입력하세요.</p>
      <input
        className="input"
        type="text"
        placeholder="최대 8글자"
        value={pw}
        onChange={onChangePw}
      />
      <button className="nextBtn" onClick={onClickNext}>
        다음
      </button>
    </div>
  );
}
