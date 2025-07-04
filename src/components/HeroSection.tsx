import React from "react";

function HeroSection({ title }: { title: string }) {
  return (
    <div
      className="hero min-h-[40vh]"
      style={{
        backgroundImage: "url(/background/pexels-shelaghmurphy-2883380.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 bg-black/70"></div>
      <div className="hero-content text-neutral-content">
        <div className="max-w-md">
          <div className="font-bold text-6xl">{title}</div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;