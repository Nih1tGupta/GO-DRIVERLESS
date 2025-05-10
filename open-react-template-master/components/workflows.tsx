"use client";

import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Tailored Workflows
              </span>
            </div>
            <h2 className="animate-glow bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
  About Roller Coaster Public Transport
</h2>
<p className="text-lg text-indigo-200/65">
  “Roller Coaster Technology” is in existence in this world since a long time, providing ‘Adventurous Rides’, but nowhere it is used in Public Transportation.

  Customized Roller Coaster Technology can be used in Private / Public Transportation, by erecting Tracks on Road Dividers in the congested streets / colonies / Cities and shift men / material in trolleys from one place to another.
</p>

<style jsx>{`
  @keyframes glow {
    0% {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4);
    }
    50% {
      text-shadow: 0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6);
    }
    100% {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4);
    }
  }

  .animate-glow {
    animation: glow 1s infinite;
  }
`}</style>

          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-2">
            {/* Card 1 */}
            
           <a
  href="#0"
  className="group rounded-xl bg-gray-900 p-6 shadow-lg transition duration-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500"
>

  <h1 className="text-xl font-bold text-white mb-4 transition group-hover:text-white text-center">
    Problem We Face
  </h1>


  <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
    {/* Image on the left */}
    <img
      src="/images/problem.webp" 
      alt="Icon"
      className="h-64 w-80 rounded-md object-cover"
    />

    {/* Paragraph on the right */}
    <p className="text-sm text-gray-300 group-hover:text-white max-w-md text-justify">
      Every urbanite is the victim of travel and traffic jams in day-to-day life — globally. Traffic-related air pollution from vehicle emissions and road dust adds serious health hazards.
    </p>
  </div>
</a>



            {/* Card 2 */}
            <a
  href="#0"
  className="group rounded-xl bg-gray-900 p-6 shadow-lg transition duration-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500"
>
  
  <h1 className="text-xl font-semibold text-white mb-4 transition group-hover:text-white text-center">
    Solution we offer
  </h1>

  
  <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
   
    <img
      src="/images/solution.png" // Replace with your image path
      alt="Icon"
      className="h-64 w-80 rounded-md object-cover"
    />

    {/* Paragraph on the right */}
    <p className="text-sm text-gray-300 group-hover:text-white max-w-md text-justify">
      Customized Roller Coaster Technology can be used in Private / Public Transportation, by erecting Tracks on Road Dividers in the congested streets / colonies / Cities and shift men / material in trolleys from one place to other.
    </p>
  </div>
</a>

            {/* Card 3 */}

          </Spotlight>
        </div>
      </div>
    </section>
  );
}
