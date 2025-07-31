import React from "react";

function HeroSection({ title, image = "/new/PHOTO-2025-07-12-02-58-14.jpg" }: { title: string, image?: string }) {
  return (
    <div
      className="hero min-h-[30vh] md:min-h-[50vh]"
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