import HeroSection from "@/components/HeroSection";
import React from "react";

function Page() {
  return (
    <div>
      <HeroSection title="Contact" />
      <div className="p-10 md:p-32 text-2xl">
        To get in touch, choose the office you want to contact, then click on
        contact in the footer.
        <br />
        <br />
        Details for our global and regional offices are below.
        <br />
        <br />
        <span className="text-4xl">Arizona</span>
        <br />
        <br />
        P.O.Box 32143
        <br />
        Burbank <br />
        United States of America
        <br />
        <br /> <br />
        <span className="text-4xl">Dodoma</span>
        <br />
        <br />
        P.O.Box 32143
        <br />
        Dodoma
        <br />
        Tanzania
      </div>
    </div>
  );
}

export default Page;