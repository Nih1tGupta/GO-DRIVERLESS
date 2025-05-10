import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="whitespace-nowrap">
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Copyright Notification
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Register for New Membership
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Press Release
                </a>
              </li>
              <li>
                
              </li>
            </ul>
          </div>
          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200 whitespace-nowrap">Our Info</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  About Cars Club

                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Our Mission & Strategy

                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                 How it Works

                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Cars Club Advantages

                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 whitespace-nowrap"
                  href="#0"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
        {/* 3rd Block – WhatsApp Link */}
<div className="space-y-2">
  <h3 className="text-sm font-medium text-gray-200">Chat With Us</h3>
  <a
    href="https://api.whatsapp.com/send?phone=919866481059&text=Hi" // Replace with your WhatsApp number
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-green-400 hover:text-green-500 transition text-sm"
  >
    <img
  src="/images/whatsapp-icon.svg"  // Adjust the path as needed
  alt="WhatsApp"
  width={80}
  height={80}
  className="inline-block"
/>
    
  </a>
</div>

{/* 4th Block – Newsletter Subscription */}


  {/* 5th block - Footer branding and social icons */}
<div >
  <div className="w-40 h-30 ml-53">
    <Logo /> {/* Adjust width and height here */}
  </div>
</div>

    <div className="text-sm">
     
      
      <ul className="inline-flex gap-2">
        {/* social icons... */}
      </ul>
    </div>
  </div>

        <button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="fixed bottom-6 right-6 z-50 p-2 rounded-full bg-indigo-400 hover:bg-indigo-800 text-white shadow-md transition"
  aria-label="Scroll to top"
>
  ↑
</button>

      </div>
    </footer>
  );
}
