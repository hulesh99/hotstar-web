import React from "react";
import heroImage from "../assets/image/heroImage.webp";

const Hero = () => {
  return (
    <section
      className="w-screen bg-gray-900 bg-cover relative"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "auto 95%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top", // Change to right
      }}
    >
      {/* Title Goes Here */}

      {/* Content Goes Here */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black to-transparent"
        style={{ width: "30%" }}
      ></div>

      <div
        className="absolute inset-0 bg-gradient-to-r from-black to-transparent"
        style={{ width: "30%" }}
      ></div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-black to-transparent"
        style={{ width: "30%" }}
      ></div>

      <div
        className="absolute inset-0 bg-gradient-to-r from-black to-transparent"
        style={{ width: "40%" }}
      ></div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-black to-transparent"
        style={{ width: "50%" }}
      ></div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-black to-transparent"
        style={{ width: "50%" }}
      ></div>

      <div className="absolute inset-0 ml-40 mt-40">
        <div className="text-slate-300 text-5xl font-bold my-6">
          Sita Ramam{" "}
        </div>
        <div className="text-slate-300 text-lg font-semibold my-6">
          2022 | 2h 22m | Hindi
        </div>
        <div className="text-slate-300 w-96 text-lg font-normal">
          On a letter-delivering task, Afreen learns of a 20-years-old romance
          set amidst a war. Her quest to trace the lover makes her embrace
          humanity beyond borders.
        </div>
        <div className="text-slate-300 text-lg font-semibold my-6">
          Drama | Thriller| Love Story
        </div>

        <div className="text-slate-300 bg-gray-600 w-96 h-14 rounded-lg flex justify-center items-center text-xl font-bold my-6">
          Subscribe to Watch
        </div>
      </div>
    </section>
  );
};

export default Hero;
