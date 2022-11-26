import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import "../styles/SelectModal.scss";
import SelectModalItem from "./SelectModalItem";

const itemObj = {
    bed: ["bed_default", "bed_01", "bed_02", "bed_02", "bed_02"],
};

export default function SelectModal({
    item,
    setSelectModalOn,
    curBedImg,
    setBedImg,
}) {
    const fileNames = itemObj[item];
    let saveRef = useRef(false);

    const onClickItem = (e) => {
        setBedImg(e.target.value);
    };

    const onConfirm = () => {
        saveRef.current = true;
        console.log("onConfirm: saveRef:", saveRef);
        setSelectModalOn(false);
    };

    useEffect(() => {
        return () => {
            if (!saveRef.current) setBedImg(curBedImg);
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
                  type="radio"
                  name={item}
                  value={fileName}
                  onClick={(e) => onClickItem(e)}
                />
                <div className="modalItem">
                  <SelectModalItem item={fileName + "_select"} />
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
