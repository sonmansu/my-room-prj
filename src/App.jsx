import "./App.scss";
import ImageMap from "image-map";
import { useEffect } from "react";
import bed_default from "./assets/img/bed_default.png";

function App() {
  useEffect(() => {
    ImageMap("img[usemap]");
  }, []);

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
              onClick={() => alert("bed")}
              target=""
              alt=""
              title=""
              href=""
              coords="60,533,62,444,75,436,93,444,165,438,165,426,176,422,191,430,189,473,341,545,345,524,359,516,373,526,376,570,363,583,265,634"
              shape="poly"
            />
          </map>
        </div>
        <div className="selectBox"></div>
      </div>
    </div>
  );
}

export default App;
