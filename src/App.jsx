import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { Cropper } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";

function App() {
  const [imgUlr, setUrl] = useState("");
  const handleFile = async () => {
    const [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    const fileUrl = URL.createObjectURL(file);
    setUrl(fileUrl);
    console.log(fileUrl);
  };

  const onChange = (cropper) => {
    console.log(cropper.getCoordinates(), cropper.getCanvas());
    setUrl(cropper.getCanvas());
  };

  return (
    <>
      <div className=" w-full h-screen flex justify-center items-center flex-col">
        <h1>Background</h1>
        <Button onClick={handleFile}>Sélectionner une image</Button>
        <Cropper src={imgUlr} onChange={onChange} className={"cropper"} />;
        {/* <div className="container border p-2 mt-3 relative">
          <img src="./web-theme.svg" className="w-full h-full z-40" />

          <img
            src={imgUlr}
            className="absolute top-0 bottom-0 -z-10 object-cover"
          />
        </div>
        <div className="container border p-2 mt-3 relative">
          <img src="./profile2.svg" className="w-full h-full z-40" />

          <img
            src={imgUlr}
            className="absolute top-0 bottom-0 -z-10 object-cover rounded-full"
          />
        </div> */}
      </div>
    </>
  );
}

export default App;
