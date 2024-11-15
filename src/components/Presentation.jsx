import React from "react";

const PresentationSection = () => {
  return (
    <section className="py-16  px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Titre de Section */}
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          DevFest Kivu 2024
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
          DevFest Kivu est le plus grand rassemblement de développeurs,
          concepteurs, et passionnés de technologie en RDC. Rejoignez-nous pour
          une journée d'apprentissage, de réseautage, et d'inspiration, avec des
          experts locaux et internationaux.
        </p>

        {/* videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="w-full flex flex-col gap-4">
            <iframe
              className="w-full min-h-80 md:h-96 rounded-lg"
              src="https://www.youtube.com/embed/O4DvVTkfcTs?si=Y82pKL49qivO-b5v"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p>Devfest 2023</p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <iframe
              className="w-full min-h-80 md:h-96 rounded-lg"
              src="https://www.youtube.com/embed/vMTs2G9B72M?si=ADjJF0P-iFLP1iV-"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p>Devfest 2023</p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <iframe
              className="w-full min-h-80 md:h-96 rounded-lg"
              src="https://www.youtube.com/embed/elj5LUe8Yf8?si=PjDUj0S_f9vnmR7q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p>Devfest 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
