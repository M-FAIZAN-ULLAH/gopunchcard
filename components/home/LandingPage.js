// import { useRef } from "react";
// import Navbar from "./Navbar";
// import HeroSection from "./HeroSection";
// import ServiceProviders from "./ServiceProviders";
// import ContactUs from "./ContactUs";
// import AboutUs from "./AboutUs";
// import Careers from "./Careers";

// const Layout = ({ children }) => {
//   const sectionRefs = {
//     one: useRef(null),
//     two: useRef(null),
//     three: useRef(null),
//     four: useRef(null),
//   };

//   const scrollToSection = (section) => {
//     sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="min-h-screen">
//       {/* Navbar */}
//       <Navbar scrollToSection={scrollToSection} /> {/* Use Navbar here */}
//       {/* Sections */}
//       <main className="pt-16">
//         <div>
//           <HeroSection />
//         </div>
//         <div ref={sectionRefs.one}>
//           <ServiceProviders />
//         </div>
//         <div ref={sectionRefs.two}>
//           <ContactUs />
//         </div>
//         <div ref={sectionRefs.three}>
//           <Careers />
//         </div>
//         <div ref={sectionRefs.four}>
//           <AboutUs />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Layout;

import { useState, useEffect } from "react";
import { useRef } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ServiceProviders from "./ServiceProviders";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Careers from "./Careers";

const Layout = ({ children }) => {
  const [showConsent, setShowConsent] = useState(false);
  const sectionRefs = {
    one: useRef(null),
    two: useRef(null),
    three: useRef(null),
    four: useRef(null),
  };

  useEffect(() => {
    // Check if the user has already given consent
    const consentGiven = localStorage.getItem("userConsent");
    if (!consentGiven) {
      setShowConsent(true);
    }
  }, []);

  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
  };

  const handleConsent = (consent) => {
    if (consent) {
      localStorage.setItem("userConsent", "true");
    }
    setShowConsent(false);
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar scrollToSection={scrollToSection} />

      {/* Consent Banner */}
      {showConsent && (
        <div className="fixed bottom-0 left-0 w-full bg-[#4CAF50] text-white py-4 px-6 shadow-lg z-50">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <p className="text-lg">
              We use cookies to enhance your experience. By continuing to visit
              this site, you agree to our{" "}
              <a
                href="/privacy-policy"
                className="underline text-[#f0f0f0]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              .
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleConsent(true)}
                className="bg-[#0056b3] text-white px-6 py-2 rounded-md hover:bg-[#004080]"
              >
                Accept
              </button>
              <button
                onClick={() => handleConsent(false)}
                className="bg-[#d9534f] text-white px-6 py-2 rounded-md hover:bg-[#c9302c]"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sections */}
      <main className="pt-16">
        <div>
          <HeroSection />
        </div>
        <div ref={sectionRefs.one}>
          <ServiceProviders />
        </div>
        <div ref={sectionRefs.two}>
          <ContactUs />
        </div>
        <div ref={sectionRefs.three}>
          <Careers />
        </div>
        <div ref={sectionRefs.four}>
          <AboutUs />
        </div>
      </main>
    </div>
  );
};

export default Layout;
