import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#0A0B1E] text-white px-6 py-12 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact us</h1>
        <p className="text-gray-400 text-lg mb-10">
        
Contact universal Cars Club
        </p>
      </div>

      <form className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="bg-[#111223] border border-[#2A2B3A] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-[#111223] border border-[#2A2B3A] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select className="bg-[#111223] border border-[#2A2B3A] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Select a topic</option>
            <option>A</option>
            <option>B</option>
            <option>C </option>
          </select>
          <textarea
            placeholder="Include as much details as you can"
            rows={5}
            className="bg-[#111223] border border-[#2A2B3A] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          ></textarea>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your surname"
            className="bg-[#111223] border border-[#2A2B3A] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select className="bg-[#111223] border border-[#2A2B3A] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Select a country</option>
            <option>India</option>
            <option>USA</option>
            <option>Germany</option>
          </select>
          <input
            type="text"
            placeholder="Let us know how we can help"
            className="bg-[#111223] border border-[#2A2B3A] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </form>

      <div className="max-w-4xl w-full mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p className="text-center md:text-left">
          By continuing, you agree to our <span className="underline cursor-pointer">Terms of Use</span> and{" "}
          <span className="underline cursor-pointer">Privacy policy</span>
        </p>
        <button className="mt-4 md:mt-0 bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-2 rounded-md text-white hover:opacity-90 transition">
          Send →
        </button>
      </div>
    </section>
  );
};

export default Contact;
