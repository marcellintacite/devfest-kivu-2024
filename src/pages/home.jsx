import React from "react";
import HeroSection from "../components/Hero";
import PresentationSection from "../components/Presentation";
import Footer from "../components/Footer";
import EventDetailsSection from "../components/EventDetail";

export default function Home() {
  return (
    <div class="bg-primary-400">
      <HeroSection />
      <EventDetailsSection />
      <PresentationSection />
      <Footer />
    </div>
  );
}
