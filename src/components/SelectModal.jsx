import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import "../styles/SelectModal.scss";
import SelectModalItem from "./SelectModalItem";

const itemObj = {
    bed: ["bed_01_select", "bed_02_select"],
};

export default function SelectModal({ item, setSelectModalOn }) {
    const fileNames = itemObj[item];

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
                    <div className="confirmBtn"></div>
                </Modal.Header>
                <Modal.Body>
                    {/* <form> */}
                    <fieldset>
                        <legend>성별</legend>
                        <label>
                            남성
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked
                            />
                        </label>
                        <label>
                            여성
                            <input type="radio" name="gender" value="female" />
                        </label>
                    </fieldset>
                    {/* </form> */}
                    {/* <form> */}
                    <fieldset>
                        {fileNames.map((fileName) => (
                            <label>
                                <input
                                    type="radio"
                                    name={item}
                                    value={fileName}
                                    id={fileName}
                                />
                                <SelectModalItem
                                    for={fileName}
                                    item={fileName}
                                />
                            </label>
                        ))}
                    </fieldset>
                    {/* </form> */}
                    <div className="itemWrap">
                        {fileNames.map((item) => (
                            <SelectModalItem item={item} />
                        ))}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
