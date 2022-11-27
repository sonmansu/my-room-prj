import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import { useRef, useState } from "react";
import "../styles/CountryModal.scss";

export default function CountryModal({ setCountryModalOn }) {
  const modalRef = useRef(null);
  const [country, setCountry] = useState("Seoul");
  const onClickItem = (e) => {
    console.dir(e.target);
    console.log(e.target.value);
    // country;
  };
  const onClickModal = (e) => {
    if (!modalRef.current.contains(e.target)) {
      setCountryModalOn(false);
    } else {
      setCountry(e.target.value);
      //   console.log("country :>> ", country);
      const nickname = localStorage.getItem("nickname");
      const db = JSON.parse(localStorage.getItem("db"));
      db[nickname]["country"] = e.target.value;
      localStorage.setItem("db", JSON.stringify(db));
    }
  };
  const countries = [
    { value: "Tokyo", text: "도쿄" },
    { value: "Seoul", text: "서울" },
    { value: "London", text: "런던" },
    { value: "Hong Kong", text: "홍콩" },
    { value: "Bangkok", text: "방콕" },
    { value: "Beijing", text: "베이징" },
    { value: "Singapore", text: "싱가포르" },
    { value: "Paris", text: "파리" },
    { value: "Madrid", text: "마드리드" },
    { value: "Washington", text: "워싱턴" },
  ];
  return (
    <div className="countryModalWrap" onClick={(e) => onClickModal(e)}>
      <div className="overlay">
        <div className="countryModal" ref={modalRef}>
          {countries.map((countryObj, idx) => (
            <div className="modalItem">
              <label key={idx}>
                {countryObj.text}
                <input
                  name="country"
                  type="radio"
                  value={countryObj.value}
                  onClick={(e) => onClickItem(e)}
                />
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
