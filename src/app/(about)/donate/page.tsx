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
          Account number: 457052424643
          <br /><br/>
          <b>Routing numbers: </b><br/>
          Paper and Electronic: 122101706<br/>
          Wires: 026009593
          <br />
        </div>
      </div>
    </div>
  );
}

export default Page;
