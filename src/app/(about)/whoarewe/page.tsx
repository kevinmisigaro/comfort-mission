import HeroSection from "@/components/HeroSection";
import React from "react";

function Page() {
  return (
    <div>
      <HeroSection title="Who we are" />
      <div className="py-10 px-48 w-full">
        <p className="text-2xl text-justify">
          Comfort Mission International Ministry is a non-profit organization,
          formed in Arizona, USA. It is exempt from federal income tax under
          Internal Revenue Code, section 501(c)(3), donors can deduct
          contributions they make. Our organization is not based in the US only,
          but goes far to the Eastern African Countries.
          <br />
          <br />
          Our mission reaching the Gospel to all peoples, to organize and
          conduct the non denomination conferences and seminars for church
          leaders in America and Africa. That is the base of our Ministry.
        </p>
        <br />
        <p className="text-2xl">
          What we do at Comfort Mission International Ministry:
        </p>
        <br />
        <p className="font-bold underline text-2xl text-[#531f59]">
          Spiritually
        </p>
        <p className="text-2xl text-justify">
          We preach the gospel through organizing concerts and conferences.
          Working with local churches through organizing bible studies and
          providing resources like Bibles. We offer leadership seminars to
          pastors and those new to faith, helping them grow in their salvation
          journey.
        </p>
        <br />
        <p className="font-bold underline text-2xl text-[#531f59]">Socially</p>
        <p className="text-2xl text-justify">
          Our organization is based on helping unhoused people, drug addicts,
          orphans, windows, elders and disabled people. We do this by providing
          basic needs as far as we can, like food, clothes, shoes, feminine
          products, briefs, toiletries etc. According to the high demand we have
          in our communities, we need your support through donations, and
          everything is appreciated and accepted.
        </p>

        <div className="flex flex-col md:flex-row mt-12">
          <div
            className="basis-1/2 h-[55vh]"
            style={{
              backgroundImage: `url(/new/PHOTO-2025-07-12-03-51-06.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          />
          <div className="basis-1/2 p-8 flex flex-col justify-center">
            <p className="text-lg">
              One of our representatives was making a Bible contribution for
              free in one of the local churches in Kibaha Tanzania.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
