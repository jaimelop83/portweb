// components/Hero.js

import React from "react";

function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url(/Abstract.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-gray-200 h-screen flex items-center justify-center text-center"
    >
      <div>
        <h1 className="text-5xl font-bold mb-4" style={{ color: '#ffffff'}}>Welcome to My Portfolio</h1>
        <p className="text-xl" style={{ color: '#ffffff'}}>
          This is a brief introduction about myself and my works.
        </p>
      </div>
    </div>
  );
}

export default Hero;
