import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import "../styles/SelectModal.scss";
import SelectModalItem from "./SelectModalItem";

const itemObj = {
    bed: ["bed_01", "bed_02", "bed_02", "bed_02"],
};

export default function SelectModal({
    item,
    setSelectModalOn,
    curBedImg,
    setBedImg,
}) {
    const fileNames = itemObj[item];
    const [save, setSave] = useState(false);
    let saveRef = useRef(false);

    const onClickItem = (e) => {
        setBedImg(e.target.value);
    };

    const onConfirm = () => {
        setSave(true);
        saveRef.current = true;
        console.log("onConfirm: save:", save);
        console.log("onConfirm: saveRef:", saveRef);
        setSelectModalOn(false);
    };

    useEffect(() => {
        console.log("useEffect()!!========================");
        console.log("save :>> ", save);
        console.log("saveRef :>> ", saveRef);

        return () => {
            console.log("return()!!========================");
            console.log("save :>> ", save);
            console.log("saveRef :>> ", saveRef);
            if (!save) setBedImg(curBedImg);
        };
    }, [save, saveRef]);

    return (
        <>
            <Modal
                show={true}
                onHide={() => setSelectModalOn(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                className="modal"
                id="modal"
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
                                    <SelectModalItem
                                        item={fileName + "_select"}
                                    />
                                </div>
                            </label>
                        ))}
                    </fieldset>
                    {/* </form> */}
                </Modal.Body>
            </Modal>
        </>
    );
}
