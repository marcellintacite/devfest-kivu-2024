import React, { useEffect, useRef, useState } from "react";
import { Button } from "@material-tailwind/react";
import { DownloadCloud, Smartphone } from "lucide-react";
import { domToPng } from "modern-screenshot";
import CardFrame from "./CardFrame";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

export default function Frames(props) {
  const afficheRef = useRef(null);
  const profileRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [afficheBg, setAfficheBg] = useState("/web-theme.svg");
  const [affiche2Bg, setAffiche2Bg] = useState("/web-theme-2.svg");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Update the background based on specialisation
    if (props.data.specialisation === "ai") {
      setAfficheBg("/ai-theme.svg");
      setAffiche2Bg("/ai-theme2.svg");
    } else if (props.data.specialisation === "mobile") {
      setAfficheBg("/mobile-theme.svg");
      setAffiche2Bg("/mobile-theme2.svg");
    } else if (props.data.specialisation === "cloud") {
      setAfficheBg("/cloud-theme.svg");
      setAffiche2Bg("/cloud-theme2.svg");
    } else {
      setAfficheBg("/web-theme.svg");
      setAffiche2Bg("/web-theme-2.svg");
    }

    // Check if the user is on a desktop
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [props.data.specialisation]);

  const convertToPng = async (element) => {
    try {
      setLoading(true);
      const { offsetWidth, offsetHeight } = element;
      const scaledWidth = offsetWidth * 2;
      const scaledHeight = offsetHeight * 2;

      const originalTransform = element.style.transform;
      const originalTransformOrigin = element.style.transformOrigin;

      element.style.transform = "scale(2)";
      element.style.transformOrigin = "top left";

      const dataUrl = await domToPng(element, {
        width: scaledWidth,
        height: scaledHeight,
        quality: 1,
      });

      element.style.transform = originalTransform;
      element.style.transformOrigin = originalTransformOrigin;

      const link = document.createElement("a");
      link.download = `devfest-${props.data.prenom}-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Error exporting image:", error);
    } finally {
      setLoading(false);
    }
  };

  if (isDesktop) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800">
        <Smartphone className="w-20 h-20 text-gray-500" />
        <h1 className="text-2xl font-bold mt-4">Partez sur votre smartphone</h1>
        <p className="text-center mt-2">
          Pour une meilleure expérience, veuillez ouvrir cette page sur un
          smartphone
        </p>
      </div>
    );
  }

  return (
    <div className="w-full p-4 flex gap-5 flex-col">
      {/* Profile Section */}
      <div className="bg-white p-4 rounded-md">
        <h1 className="text-3xl font-bold">Profile</h1>
        <div
          className="container p-2 mt-3 relative bg-transparent overflow-hidden"
          ref={profileRef}
        >
          <img
            src="./profile2.svg"
            className="w-full h-full z-20 relative"
            alt="Profile Frame"
          />
          <img
            src={props.data.imgUrl}
            className="absolute inset-0 w-full h-full object-contain z-10 rounded-full"
            alt="User"
          />
        </div>
        <div className="flex justify-center items-center">
          <Button
            className="flex gap-3 items-center mt-3"
            onClick={() => convertToPng(profileRef.current)}
            loading={loading}
          >
            Télécharger
            <DownloadCloud className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Affiche Section */}
      <div className="bg-white p-4 rounded-md">
        <h1 className="text-3xl font-bold">Affiche</h1>
        <div className="grid grid-cols-1 gap-4 mt-3">
          <CardFrame
            data={props.data}
            background={afficheBg}
            ref={afficheRef}
            onDownload={convertToPng}
          />
          <CardFrame
            data={props.data}
            background={affiche2Bg}
            ref={afficheRef}
            onDownload={convertToPng}
            second={true}
          />
        </div>
      </div>
    </div>
  );
}
