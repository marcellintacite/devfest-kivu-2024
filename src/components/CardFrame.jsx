import React, { useRef } from "react";
import { Button } from "@material-tailwind/react";
import { DownloadCloud } from "lucide-react";

const CardFrame = ({ data, background, onDownload, second, loading }) => {
  const frameRef = useRef(null);

  // Fonction pour déclencher le téléchargement
  const handleDownload = async () => {
    if (onDownload && frameRef.current) {
      await onDownload(frameRef.current);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <div className="container p-2 mt-3 relative" ref={frameRef}>
        {/* Cadre */}
        <img
          src={background}
          className="w-full h-full z-10 relative inset-0"
          alt="Cadre"
        />
        <h1
          className={
            second
              ? "absolute z-40 lg:bottom-16 bottom-9 lg:text-4xl w-52 -right-14 lg:w-[60%] lg:left-10"
              : "absolute z-40 lg:bottom-16 bottom-6 lg:text-4xl w-52 left-8 lg:w-[60%] lg:left-10"
          }
        >
          {!second ? (
            <>
              <p className="text-sm w-10/12">
                <strong className="uppercase">{data.prenom}</strong> sera au
                Devfest Kivu 2024
              </p>
            </>
          ) : (
            <>
              <p className="text-sm">{data.prenom} | 2024</p>
            </>
          )}
        </h1>
        {/* Image */}
        <img
          src={data.imgUrl}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Image utilisateur"
        />
      </div>
      <Button
        className="flex gap-3 items-center mt-3"
        onClick={handleDownload}
        loading={loading}
      >
        Télécharger
        <DownloadCloud className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default CardFrame;
