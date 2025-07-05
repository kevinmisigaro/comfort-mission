import React from "react";

function HeroSection({ title, image = "/background/pexels-shelaghmurphy-2883380.jpg" }: { title: string, image?: string }) {
  return (
    <div
      className="hero min-h-[60vh] md:min-h-[50vh]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay bg-opacity-60 bg-black/60"></div>
      <div className="hero-content text-neutral-content">
        <div className="max-w-md">
          <div className="font-bold text-6xl">{title}</div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;