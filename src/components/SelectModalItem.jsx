import React from "react";
import "../styles/SelectModalItem.scss";

export default function SelectModalItem({ item, setSelectedItem }) {
    const onClickItem = () => {
        // setSelectedItem(item);
    };
    // console.log(item);
    return (
        <div className={"selectItem"} onClick={onClickItem}>
            <img
                className="selectItem__img"
                src={require(`../assets/img/${item}.png`)}
                alt=""
            />
        </div>
    );
}
