// import React, { useState, useEffect } from "react";
// import Logo from "../../Assests/logo.png";
// import Image from "next/image";
// import { FiMenu } from "react-icons/fi";
// import { IoClose } from "react-icons/io5";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Social media icons

// const Navbar = ({ scrollToSection }) => {
//   const [isVisible, setIsVisible] = useState(true); // Navbar visibility state
//   const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
//   const [isModalOpen, setIsModalOpen] = useState(false); // Hamburger menu modal state

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > lastScrollY) {
//         setIsVisible(false); // Hide navbar on scroll down
//       } else {
//         setIsVisible(true); // Show navbar on scroll up
//       }
//       setLastScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollY]);

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 w-full p-4 z-10 transition-all duration-500 ease-in-out ${
//           isVisible ? "opacity-100" : "opacity-0 -translate-y-16"
//         } bg-white shadow-md border-b border-[#4CAF50]`}
//       >
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Logo */}
//           <div className="relative">
//             <Image
//               src={Logo}
//               alt="gopunchcard"
//               width={180}
//               height={30}
//               className="rounded-md hover:shadow-lg hover:scale-105 duration-300"
//             />
//           </div>

//           {/* Hamburger Menu */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setIsModalOpen(true)}
//               className="text-primary text-3xl"
//             >
//               <FiMenu style={{ color: "black" }} />
//             </button>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex space-x-4">
//             {[
//               { label: "Service Providers", section: "one" },
//               { label: "Contact Us", section: "two" },
//               { label: "Careers", section: "three" },
//               { label: "About Us", section: "four" },
//             ].map((item, index) => (
//               <button
//                 key={index}
//                 onClick={() => scrollToSection(item.section)}
//                 className="text-sm font-medium text-white bg-[#0056b3] hover:bg-secondary px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
//               >
//                 {item.label}
//               </button>
//             ))}
//           </nav>
//         </div>
//       </header>

//       {/* Phone Number Animation */}
//       <div className="fixed bottom-4 left-4 z-20 animate-pulse">
//         <p className="text-xl font-bold text-primary">
//           Call Us:{" "}
//           <span className="text-2xl text-[#FF5722]">+1-800-123-4567</span>
//         </p>
//       </div>

//       {/* Social Media Icons */}
//       <div className="fixed bottom-4 right-4 z-20 flex space-x-4">
//         <a
//           href="https://facebook.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-lg text-blue-600 hover:text-blue-800 transition-all duration-300"
//         >
//           <FaFacebook />
//         </a>
//         <a
//           href="https://twitter.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-lg text-blue-400 hover:text-blue-600 transition-all duration-300"
//         >
//           <FaTwitter />
//         </a>
//         <a
//           href="https://instagram.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-lg text-pink-600 hover:text-pink-800 transition-all duration-300"
//         >
//           <FaInstagram />
//         </a>
//         <a
//           href="https://linkedin.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-lg text-blue-700 hover:text-blue-900 transition-all duration-300"
//         >
//           <FaLinkedin />
//         </a>
//       </div>

//       {/* Hamburger Menu Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-20 bg-black bg-opacity-50 flex justify-end">
//           <div className="bg-white w-64 h-full p-6 shadow-lg transform transition-transform duration-500 ease-in-out translate-x-0">
//             <div className="flex justify-between items-center mb-6">
//               <h2
//                 style={{ color: "black" }}
//                 className="text-xl font-bold text-primary"
//               >
//                 <Image
//                   src={Logo}
//                   alt="gopunchcard"
//                   width={150}
//                   height={20}
//                   className="rounded-md hover:shadow-lg hover:scale-105 duration-300"
//                 />
//               </h2>
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="text-secondary text-2xl"
//               >
//                 <IoClose style={{ color: "black" }} />
//               </button>
//             </div>
//             <nav className="flex flex-col space-y-4">
//               {[
//                 { label: "Service Providers", section: "one" },
//                 { label: "Contact Us", section: "two" },
//                 { label: "Careers", section: "three" },
//                 { label: "About Us", section: "four" },
//               ].map((item, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     scrollToSection(item.section);
//                     setIsModalOpen(false);
//                   }}
//                   className="text-sm font-medium text-white bg-[#0056b3] hover:bg-secondary px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </nav>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import Logo from "../../Assests/logo.png";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Social media icons

const Navbar = ({ scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(true); // Navbar visibility state
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [isModalOpen, setIsModalOpen] = useState(false); // Hamburger menu modal state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full p-4 z-10 transition-all duration-500 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0 -translate-y-16"
        } bg-white shadow-md border-b border-[#4CAF50]`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="relative">
            <Image
              src={Logo}
              alt="gopunchcard"
              width={180}
              height={30}
              className="rounded-md hover:shadow-lg hover:scale-105 duration-300"
            />
          </div>

          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-primary text-3xl"
            >
              <FiMenu style={{ color: "black" }} />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4">
            {[
              { label: "Service Providers", section: "one" },
              { label: "Contact Us", section: "two" },
              { label: "Careers", section: "three" },
              { label: "About Us", section: "four" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.section)}
                className="text-sm font-medium text-white bg-[#0056b3] hover:bg-secondary px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Phone Number Animation */}
      <div className="fixed bottom-4 left-4 z-20 animate-pulse">
        <p className="text-xl font-bold text-primary">
          Call Us:{" "}
          <a
            href="tel:+18001234567"
            className="text-2xl text-[#FF5722] font-bold"
          >
            +1-800-123-4567
          </a>
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="fixed bottom-4 right-4 z-20 flex space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-blue-600 hover:text-blue-800 transition-all duration-300"
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-blue-400 hover:text-blue-600 transition-all duration-300"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-pink-600 hover:text-pink-800 transition-all duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-blue-700 hover:text-blue-900 transition-all duration-300"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Hamburger Menu Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-20 bg-black bg-opacity-50 flex justify-end">
          <div className="bg-white w-64 h-full p-6 shadow-lg transform transition-transform duration-500 ease-in-out translate-x-0">
            <div className="flex justify-between items-center mb-6">
              <h2
                style={{ color: "black" }}
                className="text-xl font-bold text-primary"
              >
                <Image
                  src={Logo}
                  alt="gopunchcard"
                  width={150}
                  height={20}
                  className="rounded-md hover:shadow-lg hover:scale-105 duration-300"
                />
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-secondary text-2xl"
              >
                <IoClose style={{ color: "black" }} />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {[
                { label: "Service Providers", section: "one" },
                { label: "Contact Us", section: "two" },
                { label: "Careers", section: "three" },
                { label: "About Us", section: "four" },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    scrollToSection(item.section);
                    setIsModalOpen(false);
                  }}
                  className="text-sm font-medium text-white bg-[#0056b3] hover:bg-secondary px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
