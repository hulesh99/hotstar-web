import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Hero from "./components/hero/Hero";
import Carousel from "./components/carousel/Carousel";

function App() {
  return (
    <div className="relative flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Hero />

      <div
        className="absolute inset-0 bg-gradient-to-t from-black to-transparent"
        style={{ height: "30%", top: "70%" }}
      ></div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-black to-transparent"
        style={{ height: "30%", top: "70%" }}
      ></div>
      <Carousel />
    </div>
  );
}

export default App;
