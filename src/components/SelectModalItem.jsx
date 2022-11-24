import React from "react";
import "../styles/SelectModalItem.scss";

export default function SelectModalItem({ item }) {
    // console.log(item);
    return (
        <div className="selectItem">
            <img
                className="selectItem__img"
                src={require(`../assets/img/${item}.png`)}
                alt=""
            />
        </div>
    );
}
