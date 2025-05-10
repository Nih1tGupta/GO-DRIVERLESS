"use client"
import { useState } from "react";

export default function Cta() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    alert("Thank you for subscribing!");


    const subject = "Newsletter Subscription";
    const body = `I want to subscribe to the newsletter. My email is: ${email}`;

    
    window.location.href = `mailto:nihit9500@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setEmail("");
  };

  return (
    <section className="relative overflow-hidden py-10">
      {/* 4th Block – Newsletter Subscription */}
      <div className="flex justify-center items-center space-y-4 max-w-xl mx-auto">
        <div className="text-center space-y-4">
          <h3 className="text-lg font-medium text-gray-200">Subscribe to Newsletter</h3>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email} // Bind the input value to state
              onChange={(e) => setEmail(e.target.value)} // Update email state on input change
              className="px-4 py-3 rounded-md bg-gray-800 text-sm text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-auto"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition mt-2 sm:mt-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
