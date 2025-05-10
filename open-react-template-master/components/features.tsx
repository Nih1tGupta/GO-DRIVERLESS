"use client"
import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.webp";

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Ride Experience
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Proto type Model
            </h2>
            <p className="text-lg text-indigo-200/65">
              Share your Experiences and earn Rewards from time to time
            </p>
          </div>
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Features"
            />
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

            {/* Card 1 */}
            <a href="https://www.youtube.com/watch?v=MIUR66lWYMA&t=10s" target="_blank" rel="noopener noreferrer">
  <article className="p-4 rounded-lg border border-transparent transition duration-300 hover:border-indigo-500 hover:shadow-[0_0_15px_#6366f1]">
    <svg className="mb-3 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
      <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
      <path fillOpacity=".48" d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z" />
    </svg>
    <h3 className="mb-1 text-[1rem] font-semibold text-gray-200">Physical</h3>
    <p className="text-indigo-200/65">
      Roller Coaster Technology is available in Exhibition Grounds, on the outskirts of Metro Cities - Globally
      <br />
      We can have Adventurous R I D E.
    </p>
  </article>
</a>
<a href="https://youtube.com/watch?v=aaKhcyZQxiw&si=EnSIkalECMiOmarE" target="_blank" rel="noopener noreferrer">
  <article className="p-4 rounded-lg border border-transparent transition duration-300 hover:border-indigo-500 hover:shadow-[0_0_15px_#6366f1]">
    <svg className="mb-3 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
      <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
      <path fillOpacity=".48" d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z" />
    </svg>
    <h3 className="mb-1 text-[1rem] font-semibold text-gray-200">Virtual</h3>
    <p className="text-indigo-200/65">
      Simulation using V.R. – in your Mobile App. Through our Website.
      <br></br>
          <span className="text-xl">Charges ₹ 10 /-</span>
    </p>
  </article>
</a>
<a
  href="#"
  onClick={(e) => {
    e.preventDefault(); // Prevents navigation
    alert("This link is not yet available. Please check back later.");
  }}
  className="text-blue-400  hover:text-blue-600"
>
  <article className="p-4 rounded-lg border border-transparent transition duration-300 hover:border-indigo-500 hover:shadow-[0_0_15px_#6366f1]">
    <svg className="mb-3 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
      <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
      <path fillOpacity=".48" d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z" />
    </svg>
    <h3 className="mb-1 text-[1rem] font-semibold text-gray-200"> Virtual Real time</h3>
    <p className="text-indigo-200/65">
      Real Time using your location & destinations, through our Website.
    </p>
    <span className="text-xl">Charges ₹ 100 /-</span>
  </article>
</a>


            
          </div>
        </div>
      </div>
    </section>
  );
}
