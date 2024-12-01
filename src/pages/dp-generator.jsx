import { useState } from "react";
import DpHeroSection from "../components/DpheroSection";
import ProfileForm from "../components/Form";
import Frames from "../components/Frames";
import Footer from "../components/Footer";
import { Button } from "@material-tailwind/react";
import { RefreshCcwDot } from "lucide-react";

export default function DpGenerator() {
  const [data, setData] = useState(null);
  const handleDelete = () => {
    setData(null);
  };
  console.log(data);
  return (
    <div className="bg-primary-400">
      {!data && (
        <>
          <DpHeroSection />
          <ProfileForm setData={setData} />
        </>
      )}
      {data && <Frames data={data} setData={setData} />}

      {data && (
        <div className="flex gap-2 justify-center items-start min-h-28">
          <Button
            className="flex gap-2 items-center justify-center"
            color="red"
            onClick={handleDelete}
          >
            Recommencer
            <RefreshCcwDot className="h-6 w-6" />
          </Button>
        </div>
      )}
      <Footer />
    </div>
  );
}
