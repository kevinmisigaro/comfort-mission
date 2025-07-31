import LatestNews from "@/components/LatestNews";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        className="hero min-h-[50vh] md:min-h-[80vh]"
        style={{
          backgroundImage: "url(/new/PHOTO-2025-07-12-03-48-39.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black/60"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-md">
            <div className="bg-white text-black px-5 py-4 text-3xl font-bold mb-5">
              We want to create a world where love knows no boundaries
            </div>
            <div className="bg-[#531f59] text-white p-3 text-medium font-bold">
              Compassion and support of a United community grounded in Christ.
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-20 md:p-28 text-center">
        <div className="text-3xl mb-10">
          We want to demonstrate the love of God to the world by sharing the
          Gospel,
          <br /> and through helping people with their basic needs.
        </div>

        <Link
          href={"/contact"}
          className="underline [text-decoration-color:#531f59] text-2xl"
        >
          Find out more about us
        </Link>
      </div>

      <div className="px-20 py-20 bg-[#531f59] text-white">
        <div className="text-3xl font-bold mb-18">Community Impact</div>

        <div className="stats shadow w-full">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-xl font-bold text-gray-300">
              Total reach
            </div>
            <div className="stat-value text-7xl">31K</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-xl font-bold text-gray-300">
              Women helped
            </div>
            <div className="stat-value text-7xl">4,200</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-xl font-bold text-gray-300">
              New Registers
            </div>
            <div className="stat-value text-7xl">1,200</div>
          </div>
        </div>
      </div>

      {/* <div className="p-10 md:p-20">
        <div className="underline [text-decoration-color:#531f59] text-3xl text-[#531f59] font-bold mb-4">
          Latest News
        </div>
        <LatestNews />
      </div> */}

      <div className="px-5 md:p-20 text-center mb-10 flex flex-col md:flex-row">
        <div
          className="basis-1/2 h-[50vh] bg-top"
          style={{
            backgroundImage: `url(/new/PHOTO-2025-07-12-03-48-39.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="text-3xl basis-1/2 p-5">
          <div className="mt-12">
            <p>
              Our organization is based on helping{" "}
              <span className="underline [text-decoration-color:#531f59] text-[#531f59]">
                unhoused people, drug addicts, orphans, windows, elders
              </span>{" "}
              and{" "}
              <span className="underline [text-decoration-color:#531f59] text-[#531f59]">
                disabled people
              </span>
              . We do this by providing basic needs through donations.
            </p>
          </div>
        </div>
      </div>

      <div className="p-10 text-center bg-[#531f59] text-white">
        <Link href={"/contact"} className="text-3xl font-black hover:underline">
          LETS KEEP IN TOUCH
        </Link>
      </div>
    </>
  );
}
