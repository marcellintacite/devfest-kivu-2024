import React from "react";
import HeroSection from "../components/Hero";
import PresentationSection from "../components/Presentation";
import Footer from "../components/Footer";
import EventDetailsSection from "../components/EventDetail";
import AgendaSection from "../components/Agenda";

export default function Home() {
  return (
    <div className="bg-primary-400">
      <HeroSection />
      <EventDetailsSection />
      <AgendaSection />
      <PresentationSection />

      <Footer />
    </div>
  );
}
