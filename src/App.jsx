import "./App.scss";
import ImageMap from "image-map";
import { useEffect, useState } from "react";
import bed_default from "./assets/img/bed_default.png";
import SelectModal from "./components/SelectModal";

function App() {
    const [isSelectModalOn, setSelectModalOn] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");
    useEffect(() => {
        ImageMap("img[usemap]");
    }, []);

    const onClickItem = (e, item) => {
        e.preventDefault();

        console.log("onClickItem");

        if (isSelectModalOn) setSelectModalOn(false);
        else {
            setSelectModalOn(true);
            setSelectedItem(item);
        }
    };

    return (
        <div className="App">
            <div className="AppWrap">
                MYAPP
                <div className="imgWrap">
                    <div className="roomBgImg" />

                    {/* <div className="bedDefaultImg" useMap="#image-map" /> */}
                    <img src={bed_default} usemap="#image-map" />
                    <map name="image-map">
                        <area
                            // onClick={(e) => {
                            //     e.preventDefault();
                            //     alert("bed");
                            // }}
                            onClick={(e) => onClickItem(e, "bed")}
                            target=""
                            alt=""
                            title=""
                            href=""
                            coords="60,533,62,444,75,436,93,444,165,438,165,426,176,422,191,430,189,473,341,545,345,524,359,516,373,526,376,570,363,583,265,634"
                            shape="poly"
                        />
                    </map>
                </div>
                {isSelectModalOn && (
                    <SelectModal
                        item={selectedItem}
                        setSelectModalOn={setSelectModalOn}
                    />
                )}
                {/* <SelectModal /> */}
            </div>
        </div>
    );
}

export default App;
