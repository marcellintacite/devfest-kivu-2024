import { Button } from "@material-tailwind/react";
import { DownloadCloud } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import { domToPng } from "modern-screenshot";
export default function Frames(props) {
  const afficheRef = useRef(null);
  const profileRef = useRef(null);
  const [loading, setLoading] = React.useState(false);
  const [afficheBg, setAfficheBg] = useState("/web-theme.svg");

  useEffect(() => {
    // update the bg depending on props.data.specialisation / ai/mobile/web/could/no
    if (props.data.specialisation === "ai") {
      setAfficheBg("/ai-theme.svg");
    } else if (props.data.specialisation === "mobile") {
      setAfficheBg("/mobile-theme.svg");
    } else if (props.data.specialisation === "cloud") {
      setAfficheBg("/cloud-theme.svg");
    } else if (props.data.specialisation === "web") {
      setAfficheBg("/web-theme.svg");
    } else {
      setAfficheBg("/web-theme.svg");
    }
  });

  const convertToPng = async (element) => {
    try {
      setLoading(true);

      // Get the current dimensions of the element
      const { offsetWidth, offsetHeight } = element;

      // Calculate the scaled dimensions (2x the current size)
      const scaledWidth = offsetWidth * 2;
      const scaledHeight = offsetHeight * 2;

      // Temporarily scale the element for high-resolution export
      const originalTransform = element.style.transform;
      const originalTransformOrigin = element.style.transformOrigin;

      element.style.transform = "scale(2)";
      element.style.transformOrigin = "top left";

      // Export the element as a PNG with dynamic dimensions
      const dataUrl = await domToPng(element, {
        width: scaledWidth,
        height: scaledHeight,
        quality: 1,
      });

      // Revert scaling transformations after export
      element.style.transform = originalTransform;
      element.style.transformOrigin = originalTransformOrigin;

      // Trigger download
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

  return (
    <div className="w-full p-4 flex gap-5 flex-col lg:flex-row">
      {/* Première image avec cadre au premier plan */}
      <div className="bg-white p-4 rounded-md flex-1">
        <h1 className="text-3xl font-bold">Affiche</h1>
        <div className="flex justify-center items-center">
          <div className="container p-2 mt-3 relative" ref={afficheRef}>
            {/* Cadre */}
            <img
              src={afficheBg}
              className="w-full h-full z-10 relative"
              alt="Cadre"
            />
            <h1 className="absolute z-40 lg:bottom-16 bottom-6 lg:text-4xl w-52 left-8 lg:w-[60%] lg:left-10">
              <strong>{props.data.prenom}</strong> sera au Devfest Kivu 2024
            </h1>
            {/* Image */}
            <img
              src={props.data.imgUrl}
              className="absolute inset-0 w-full h-full object-cover z-0"
              alt="Image utilisateur"
            />
          </div>
        </div>
        <Button
          className="flex gap-3 items-center mt-3"
          onClick={() => convertToPng(afficheRef.current)}
          loading={loading}
        >
          Télécharger
          <DownloadCloud className="w-4 h-4" />
        </Button>
      </div>

      {/* Deuxième image avec cadre circulaire */}
      <div className="bg-white p-4 rounded-md flex-1">
        <h1 className="text-3xl font-bold">Profile</h1>
        <div
          className="container p-2 mt-3 relative bg-transparent overflow-hidden"
          ref={profileRef}
        >
          {/* Cadre */}
          <img
            src="./profile2.svg"
            className="w-full h-full z-20 relative"
            alt="Cadre"
          />
          {/* Image with `object-contain` to fit inside the circle */}
          <img
            src={props.data.imgUrl}
            className="absolute inset-0 w-full h-full object-contain z-10 rounded-full"
            alt="Image utilisateur"
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
    </div>
  );
}
