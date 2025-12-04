import React from "react";
import Hero from "./components/Hero";
import ImageGallery from "./components/ImageGallery";
import FinalMessage from "./components/FinalMessage";

export default function App() {
  return (
    <div className="min-h-screen bg-pink-50 font-sans text-rose-900">
      <Hero />
      <ImageGallery />
      <FinalMessage />
    </div>
  );
}
