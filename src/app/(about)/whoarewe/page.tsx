import HeroSection from "@/components/HeroSection";
import React from "react";

function Page() {
  return (
    <div>
    <HeroSection title="Who we are" />
      <div className="py-10 px-48 w-full">
        <p className="text-2xl">
          Comfort Mission International Ministry is a non-profit organization,
          formed in Arizona, USA. It is exempt from federaal income tax under
          Internal Revenue Code, section 501, donors can deduct contributions
          they make. Our organization is not based in the US only, but goes far
          to the Eastern African Countries.
        </p>
      </div>
    </div>
  );
}

export default Page;
