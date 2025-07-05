import HeroSection from "@/components/HeroSection";

function Page() {
  return (
    <div>
      <HeroSection title="Donate" image="/images/pexels-liza-summer-6347738.jpg" />
      <div className="px-10 md:px-20 md:py-10">
        <div className="text-2xl text-center">
          To get in touch, choose the office you want to contact, then click on
          contact in the footer.
          <br />
          <br />
        </div>
        <div className="text-2xl px-10 md:px-20 text-center">
        <span className="text-4xl font-black">Bank of America</span>
          <br />
          <br />
          Account number: 93030893930303
          <br />
          Account Name: COMFORT MISSION <br />
          United States of America
          <br />
        </div>
      </div>
    </div>
  );
}

export default Page;
