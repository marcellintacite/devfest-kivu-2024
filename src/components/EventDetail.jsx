import React from "react";
import { MapPin, Calendar, Clock, Ticket } from "lucide-react";

const EventDetailsSection = () => {
  return (
    <section className="py-12 bg-gray-100  px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Titre de Section */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Informations Importantes
        </h2>

        {/* Détails de l'Événement */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Lieu */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-xs">
            <MapPin size={32} className="text-primary-300 mb-4" />
            <h3 className="text-xl font-semibold">Lieu</h3>
            <p className="text-gray-600">Salle INPP, Bukavu</p>
          </div>

          {/* Date */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-xs">
            <Calendar size={32} className="text-primary-300 mb-4" />
            <h3 className="text-xl font-semibold">Date</h3>
            <p className="text-gray-600">07 décembre 2024</p>
          </div>

          {/* Heure */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-xs">
            <Clock size={32} className="text-primary-300 mb-4" />
            <h3 className="text-xl font-semibold">Heure</h3>
            <p className="text-gray-600">10h</p>
          </div>

          {/* Condition d'entrée */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-xs">
            <Ticket size={32} className="text-primary-300 mb-4" />
            <h3 className="text-xl font-semibold">Condition d'entrée</h3>
            <p className="text-gray-600">Avoir un ticket</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
