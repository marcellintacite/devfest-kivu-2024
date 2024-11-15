import { Button } from "@material-tailwind/react";
import { DownloadCloud } from "lucide-react";
import React from "react";
import { useToSvg } from "@hugocxl/react-to-image";

export default function Frames(props) {
  const [state, convertToSvg, ref] = useToSvg({
    onSuccess: (data) => {
      const link = document.createElement("a");
      link.download = `${props.data.prenom}-devfest-kivu-2024.svg`;
      link.href = data;
      link.click();
    },
  });

  // SVG for profile
  const [stateProfile, convertToSvgProfile, refProfile] = useToSvg({
    onSuccess: (data) => {
      const link = document.createElement("a");
      link.download = `${props.data.prenom}-profile.svg`;
      link.href = data;
      link.click();
    },
  });

  return (
    <div className="w-full p-4 flex gap-5 flex-col lg:flex-row">
      {/* Première image avec cadre au premier plan */}
      <div className="bg-white p-4 rounded-md">
        <h1 className="text-3xl font-bold">Affiche</h1>
        <div className="flex justify-center items-center">
          <div className="container p-2 mt-3 relative" ref={ref}>
            {/* Cadre */}
            <img
              src="./web-theme.svg"
              className="w-full h-full z-10 relative"
              alt="Cadre"
            />
            <h1 className="absolute z-40 lg:bottom-16 bottom-5 lg:text-4xl w-52 left-8">
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
          onClick={convertToSvg}
          loading={state.isLoading}
        >
          Télécharger
          <DownloadCloud className="w-4 h-4" />
        </Button>
      </div>

      {/* Deuxième image avec cadre circulaire */}
      <div className="bg-white p-4 rounded-md">
        <h1 className="text-3xl font-bold">Profile</h1>
        <div
          className="container p-2 mt-3 relative bg-transparent overflow-hidden"
          ref={refProfile}
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
            onClick={convertToSvgProfile}
            loading={stateProfile.isLoading}
          >
            Télécharger
            <DownloadCloud className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
