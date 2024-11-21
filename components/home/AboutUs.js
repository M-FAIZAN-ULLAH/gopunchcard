// import React from "react";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedin,
//   FaGithub,
//   FaEnvelope,
// } from "react-icons/fa";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="bg-[#4CAF50] text-white py-16 px-6">
//       <div className="container mx-auto text-center sm:text-left">
//         {/* Footer Main Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
//           {/* Company Info Section */}
//           <div>
//             <h3 className="text-3xl font-extrabold mb-4 text-[#f0f0f0]">
//               GoPunchCard
//             </h3>
//             <p className="text-lg mb-4">
//               We are a company committed to bringing high-quality internet and
//               telecommunication services to both residential and business
//               customers.
//               <br />
//               Explore our plans and join us today.
//             </p>
//             <a
//               href="#"
//               className="flex items-center justify-start text-lg text-[#f0f0f0] hover:text-[#0056b3] transition-all duration-300"
//             >
//               <FaEnvelope className="mr-2" /> Email Us
//             </a>
//           </div>

//           {/* Quick Links Section */}
//           <div>
//             <h4 className="text-2xl font-semibold mb-4 text-[#f0f0f0]">
//               Quick Links
//             </h4>
//             <ul className="space-y-3">
//               <li>
//                 <Link
//                   href="#"
//                   className="text-lg hover:text-[#0056b3] transition-all duration-300"
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#"
//                   className="text-lg hover:text-[#0056b3] transition-all duration-300"
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#"
//                   className="text-lg hover:text-[#0056b3] transition-all duration-300"
//                 >
//                   Careers
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#"
//                   className="text-lg hover:text-[#0056b3] transition-all duration-300"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info Section */}
//           <div>
//             <h4 className="text-2xl font-semibold mb-4 text-[#f0f0f0]">
//               Contact Info
//             </h4>
//             <ul className="space-y-3">
//               <li className="text-lg">
//                 <strong>Phone:</strong> 1-800-555-1234
//               </li>
//               <li className="text-lg">
//                 <strong>Email:</strong> support@gopunchcard.com
//               </li>
//               <li className="text-lg">
//                 <strong>Address:</strong> 123 Punchcard St, Suite 456, City,
//                 State, ZIP
//               </li>
//             </ul>
//           </div>

//           {/* Social Media Links Section */}
//           <div className="flex justify-center space-x-6">
//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-3xl hover:text-[#f0f0f0] transition-all duration-300"
//             >
//               <FaFacebook />
//             </a>
//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-3xl hover:text-[#f0f0f0] transition-all duration-300"
//             >
//               <FaTwitter />
//             </a>
//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-3xl hover:text-[#f0f0f0] transition-all duration-300"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-3xl hover:text-[#f0f0f0] transition-all duration-300"
//             >
//               <FaLinkedin />
//             </a>
//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-3xl hover:text-[#f0f0f0] transition-all duration-300"
//             >
//               <FaGithub />
//             </a>
//           </div>
//         </div>

//         {/* Footer Bottom Section */}
//         <div className="border-t border-[#f0f0f0] pt-8 mt-8 text-center">
//           <p className="text-lg text-[#f0f0f0]">
//             &copy; {new Date().getFullYear()} GoPunchCard. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#4CAF50] to-[#2c7c31] text-white py-16 px-6 relative">
      <div className="container mx-auto">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-700/20 to-green-900 opacity-30 pointer-events-none animate-pulse"></div>

        {/* Footer Main Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 relative z-10">
          {/* Cards */}
          <div className="p-6 border border-dashed border-[#f0f0f0] rounded-md bg-opacity-20 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate__animated animate__zoomIn">
            <h3 className="text-xl font-bold mb-4 text-[#f0f0f0]">
              GoPunchCard
            </h3>
            <p className="text-sm mb-4">
              We bring high-quality internet and telecom services to residential
              and business customers. Join us today to explore our plans!
            </p>
            <a
              href="#"
              className="flex items-center text-sm text-[#f0f0f0] hover:text-[#0056b3] transition-all duration-300"
            >
              <FaEnvelope className="mr-2" /> Email Us
            </a>
          </div>

          <div className="p-6 border border-dashed border-[#f0f0f0] rounded-md bg-opacity-20 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate__animated animate__bounce">
            <h4 className="text-lg font-semibold mb-4 text-[#f0f0f0]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm hover:text-[#0056b3] transition-all duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm hover:text-[#0056b3] transition-all duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm hover:text-[#0056b3] transition-all duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm hover:text-[#0056b3] transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="p-6 border border-dashed border-[#f0f0f0] rounded-md bg-opacity-20 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate__animated animate__fadeInDown">
            <h4 className="text-lg font-semibold mb-4 text-[#f0f0f0]">
              Contact Info
            </h4>
            <ul className="space-y-2">
              <li className="text-sm">
                <strong>Phone:</strong> 1-800-555-1234
              </li>
              <li className="text-sm">
                <strong>Email:</strong> support@gopunchcard.com
              </li>
              <li className="text-sm">
                <strong>Address:</strong> 123 Punchcard St, Suite 456, City,
                State, ZIP
              </li>
            </ul>
          </div>

          <div className="p-6 border border-dashed border-[#f0f0f0] rounded-md bg-opacity-20 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate__animated animate__flipInX">
            <h4 className="text-lg font-semibold mb-4 text-[#f0f0f0]">
              Follow Us
            </h4>
            <div className="flex justify-start space-x-4 text-[#f0f0f0]">
              <a
                href="#"
                className="text-2xl hover:text-[#0056b3] transition-all duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-[#0056b3] transition-all duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-[#0056b3] transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-[#0056b3] transition-all duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-[#0056b3] transition-all duration-300"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-[#f0f0f0] pt-8 mt-8 text-center relative z-10">
          <p className="text-sm text-[#f0f0f0]">
            &copy; {new Date().getFullYear()} GoPunchCard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
