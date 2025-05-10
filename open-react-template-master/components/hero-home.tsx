"use client";
import VideoThumb from "@/public/images/hr.avif";
import ModalVideo from "@/components/modal-video";
import { useEffect,useState } from "react";
import React from "react";
const images = [
  '/images/RC-1.jpeg',
  '/images/RC-2.jpg'
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
     <section>
      <div className="mx-auto max-w-8xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              AI-driven: The Optimal Transport System
            </h1>
          </div>

          
          {/* Content layout below heading */}
<div className="mt-12 flex flex-col md:flex-row md:justify-center md:items-start gap-10">
  {/* Left text and buttons */}
  <div className="max-w-xl text-" data-aos="fade-up" data-aos-delay={200}>
    <p className="mb-8 text-xl  bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600
               hover:from-pink-600 hover:to-purple-400
               hover:scale-105
               hover:drop-shadow-lg border-x-fuchsia-300 transition-all duration-300 delay-300">
    
    Our Optimal Transport System empowers you to own your commute — fast, reliable, and tailored to your needs. Say goodbye to delays and hello to smart, efficient travel at your fingertips.
    </p>

    <div className="flex flex-col sm:flex-row sm:justify-start">
      <a
        className="btn group mb-4 w-full bg-indigo-600 text-white sm:mb-0 sm:mr-4 sm:w-auto"
        href="https://youtu.be/yhfXg4tmKLY"
        data-aos="fade-up"
        data-aos-delay={400}
      >
        <span className="inline-flex items-center">
          Watch video
          <span className="ml-1 text-white/50 group-hover:translate-x-0.5 transition-transform">
            -&gt;
          </span>
        </span>
      </a>
      <a
        className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white hover:bg-[length:100%_150%] hover:text-black transition-all transition-duration-500"
        href="https://docs.google.com/presentation/d/1TudvvhGvbu9gBy77Ct3HgoBjK-EWZHeN/edit?slide=id.g34d1216921b_0_7#slide=id.g34d1216921b_0_7"
        data-aos="fade-up"
        data-aos-delay={600}
      >
        View Details
      </a>
    </div>
  </div>

  {/* Right slideshow box */}
  <div
    className="h-64 w-full max-w-md overflow-hidden rounded-xl shadow-xl"
    data-aos="fade-left"
    data-aos-delay={400}
  >
    <img
      src={images[currentImageIndex]}
      alt="slideshow"
      className="h-full w-full object-cover transition duration-700"
    />
  </div>
</div>

          <div className="mt-16">
            <ModalVideo
              thumb={VideoThumb}
              thumbWidth={1920}
              thumbHeight={1080}
              thumbAlt="Demo"
              video="videos//videos.mp4"
              videoWidth={1820}
              videoHeight={980}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;