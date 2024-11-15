import { Button } from "@material-tailwind/react";
import { Brush } from "lucide-react";
import React from "react";

const DpHeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative h-[50vh] lg:h-[70vh] bg-cover bg-center text-white flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/theme-bg.jpeg')", // Remplace par l'URL de ton image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Contenu */}
      <div className="relative z-10 text-center flex flex-col gap-6 justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Génère ton profil <span className="text-primary-300">DevFest</span>
        </h1>
        <p className="text-lg md:text-xl ">
          Crée une image unique qui reflète ton style pour célébrer le{" "}
          <span className="font-bold">DevFest Kivu 2024</span>.
        </p>
        <Button
          color="amber"
          onClick={scrollToForm}
          className="flex items-center justify-center w-fit gap-3"
        >
          Commencer la magie <Brush className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
};

export default DpHeroSection;
