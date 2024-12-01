import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

// Données des sessions
const agendaData = [
  {
    time: "10h30",
    owner: "Someone",
    title: "Welcome & GDG Keynote",
  },
  {
    time: "10h40",
    owner: "David. Swedi Olivia",
    title: "Responsible AI Keynote, SAIF Framework",
  },
  {
    time: "11h20",
    owner: "Pacifique Linjanja",
    title:
      "AI and LLMs in Open Source: A Guide to Seamless Contribution and Growth",
  },
  {
    time: "11h50",
    owner: "Abraham Imani BAHATI",
    title:
      "Démystifier l'IA : Interprétabilité et Transparence des Modèles pour des Décisions Responsables",
  },
  {
    time: "12h30",
    owner: "Emeric Mugiraneza",
    title:
      "Progressive Web Apps (PWAs): Building Offline-First Experiences with Google Tools and AI",
  },
  {
    time: "13h00",
    owner: "Pause & Networking",
    title: "",
  },
  {
    time: "14h00",
    owner: "Ernest Katembo",
    title:
      "Créer son chatbot personnalisé pour votre entreprise, votre business",
  },
  {
    time: "14h30",
    owner: "Benjamin Kinyamba",
    title:
      "Initiation à l'Intégration et Livraison Continues (CI/CD) avec GitHub Actions et Docker",
  },
  {
    time: "15h00",
    owner: "Georges Byona",
    title:
      "Domptez l'IA : Les secrets d'un Prompt Engineer pour des réponses sur mesure",
  },
  {
    time: "15h30",
    owner: "Benjamin Maroyi",
    title:
      "Éducation et IA Responsable : Opportunités, Défis et Pièges à Éviter",
  },
  {
    time: "16h00",
    owner: "Louis Musole, Amani Bisimwa, Aksanti Bahiga Tacite",
    title:
      "Panel Session: L'avenir du développement d'applications modernes (Web, Mobile, Cloud & IA)",
  },
  {
    time: "17h00",
    owner: "Amani Bisimwa",
    title: "Wrap up and closing remarks",
  },
];

const AgendaSection = () => {
  return (
    <section
      id="agenda"
      className="bg-gray-50 py-16 text-gray-800 font-default"
    >
      <div className="container mx-auto px-6">
        {/* Titre principal */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Typography variant="h2" className="text-primary-300">
            Agenda DevFest Kivu 2024
          </Typography>
          <Typography variant="paragraph" className="text-gray-600">
            Découvrez les sessions enrichissantes et les intervenants inspirants
            !
          </Typography>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale */}
          <motion.div
            className="absolute left-8 top-0 w-1 h-full bg-primary-300"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1 }}
          ></motion.div>

          {/* Liste des sessions */}
          <div className="space-y-12">
            {agendaData.map((session, index) => (
              <motion.div
                key={index}
                className="relative flex items-center space-x-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Icône */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="h-16 w-16 flex items-center justify-center bg-primary-300 rounded-full shadow-lg">
                    <Calendar className="text-white h-8 w-8" />
                  </div>
                </div>

                {/* Contenu texte */}
                <div
                  className="flex-grow bg-gradient-to-br from-white to-gray-100 bg-opacity-80 
                  rounded-xl shadow-lg shadow-primary-50 p-6 border border-gray-200"
                >
                  <Typography variant="h6" className="text-primary-300">
                    {session.time}
                  </Typography>
                  <Typography variant="h5" className="font-bold text-gray-800">
                    {session.title || session.owner}
                  </Typography>
                  {session.title && (
                    <Typography
                      variant="paragraph"
                      className="text-gray-600 mt-2"
                    >
                      {session.owner}
                    </Typography>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
