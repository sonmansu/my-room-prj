import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import "../styles/SelectModal.scss";
import SelectModalItem from "./SelectModalItem";

const imgObj = {
  bed: ["default", "01", "02"],
  desk: ["default"],
};

export default function SelectModal({
  isSelectModalOn,
  setSelectModalOn,
  imgHandlers,
}) {
  const imgHandler = imgHandlers[isSelectModalOn];
  //   const fileNames = itemObj[item];
  const fileNames = imgObj[isSelectModalOn];
  console.log("fileNames", fileNames);
  let saveRef = useRef(false);
  const [selectedImg, setSelectedImg] = useState("");

  const onClickItem = (e) => {
    imgHandler(e.target.value);
    setSelectedImg(e.target.value);

    // db값 변경
    // const nickname = localStorage.getItem("nickname");
    // const db = JSON.parse(localStorage.getItem("db"));
    // db[nickname][isSelectModalOn] = e.target.value;
    // console.log("db[nickname][item] :>> ", db[nickname][isSelectModalOn]);
    // console.log("selectedImg", selectedImg);
    // localStorage.setItem("db", JSON.stringify(db));
  };

  const onConfirm = () => {
    saveRef.current = true;
    // console.log("onConfirm: saveRef:", saveRef);
    setSelectModalOn(false);

    const nickname = localStorage.getItem("nickname");
    const db = JSON.parse(localStorage.getItem("db"));
    db[nickname][isSelectModalOn] = selectedImg;
    // console.log("db[nickname][item] :>> ", db[nickname][isSelectModalOn]);
    // console.log("selectedImg", selectedImg);
    localStorage.setItem("db", JSON.stringify(db));
  };

  useEffect(() => {
    return () => {
      // 저장안했으면 원래 이미지로 복구
      if (!saveRef.current) {
        const nickname = localStorage.getItem("nickname");
        const db = JSON.parse(localStorage.getItem("db"));
        console.log("db[nickname][item] :>> ", db[nickname][isSelectModalOn]);
        // setImg(db[nickname][isSelectModalOn]);
        imgHandler(db[nickname][isSelectModalOn]);
      }
    };
  }, [saveRef]);

  return (
    <div id="modalWrap" className="modalWrap">
      <Modal
        show={true}
        onHide={() => setSelectModalOn(false)}
        dialogClassName="modal-90w myModalDialog"
        contentClassName="myModalContent"
        backdropClassName="MyModalBackdrop"
        aria-labelledby="example-custom-modal-styling-title"
        id="myModalId"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
          <div className="confirmBtn" onClick={onConfirm}>
            확인
          </div>
        </Modal.Header>
        <Modal.Body>
          {/* <form> */}
          <fieldset className="modalItemsWrap">
            {fileNames.map((fileName, idx) => (
              <label key={idx}>
                <input
                  name={isSelectModalOn}
                  type="radio"
                  value={fileName}
                  onClick={(e) => onClickItem(e)}
                />
                <div className="modalItem">
                  <SelectModalItem kind={isSelectModalOn} item={fileName} />
                </div>
              </label>
            ))}
          </fieldset>
          {/* </form> */}
        </Modal.Body>
      </Modal>
    </div>
  );
}
