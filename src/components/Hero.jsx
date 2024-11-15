import { Button } from "@material-tailwind/react";
import { Brush, ExternalLink } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigation = useNavigate();
  return (
    <section
      className="flex flex-col items-center justify-center h-[80vh] text-center px-4 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('./bg.jpg')`,
      }}
    >
      {/* Main Title */}
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white">
        Bienvenue au <span className="text-primary-300">DevFest Kivu 2024</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-8">
        Le plus grand festival de développeurs en RDC : un lieu unique pour
        apprendre, se connecter et innover ensemble.
      </p>

      {/* Call-to-Action Button */}
      <Button
        color="amber"
        className="md:text-lg font-semibold flex gap-3 items-center justify-center"
        onClick={() => navigation("/dp-generator")}
      >
        Genérer votre profile <Brush className="w-4" />
      </Button>

      {/* Video */}
      {/* <div className="flex justify-center w-full max-w-4xl shadow-lg rounded-lg overflow-hidden border border-gray-300 bg-white">
        <iframe
          className="w-full h-64 md:h-96"
          src="https://www.youtube.com/embed/vMTs2G9B72M?si=PL6bNae7zHfCpaKW"
          title="DevFest 2024 Introduction"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div> */}
    </section>
  );
};

export default HeroSection;
