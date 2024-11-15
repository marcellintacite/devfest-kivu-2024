import { useState } from "react";
import DpHeroSection from "../components/DpheroSection";
import ProfileForm from "../components/Form";
import Frames from "../components/Frames";

export default function DpGenerator() {
  const [data, setData] = useState(null);
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
    </div>
  );
}
