// import React from "react";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedin,
//   FaGithub,
//   FaEnvelope,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#333] text-white py-16 px-6">
//       <div className="container mx-auto text-center sm:text-left">
//         {/* Footer Main Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
//           {/* Company Info Section */}
//           <div>
//             <h3 className="text-3xl font-extrabold mb-4 text-[#00c7b7]">
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
//               href="mailto:support@gopunchcard.com"
//               className="flex items-center justify-start text-lg text-[#00c7b7] hover:text-[#00bfa3] transition-all duration-300"
//             >
//               <FaEnvelope className="mr-2" /> Email Us
//             </a>
//           </div>

//           {/* Quick Links Section */}
//           <div>
//             <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-3">
//               <li>
//                 <a
//                   href="/about"
//                   className="text-lg hover:text-[#00c7b7] transition-all duration-300"
//                 >
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/services"
//                   className="text-lg hover:text-[#00c7b7] transition-all duration-300"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/careers"
//                   className="text-lg hover:text-[#00c7b7] transition-all duration-300"
//                 >
//                   Careers
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/contact"
//                   className="text-lg hover:text-[#00c7b7] transition-all duration-300"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info Section */}
//           <div>
//             <h4 className="text-2xl font-semibold mb-4">Contact Info</h4>
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
//               href="https://facebook.com/gopunchcard"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-3xl hover:text-[#00c7b7] transition-all duration-300"
//             >
//               <FaFacebook />
//             </a>
//             <a
//               href="https://twitter.com/gopunchcard"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-3xl hover:text-[#00c7b7] transition-all duration-300"
//             >
//               <FaTwitter />
//             </a>
//             <a
//               href="https://instagram.com/gopunchcard"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-3xl hover:text-[#00c7b7] transition-all duration-300"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="https://linkedin.com/company/gopunchcard"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-3xl hover:text-[#00c7b7] transition-all duration-300"
//             >
//               <FaLinkedin />
//             </a>
//             <a
//               href="https://github.com/gopunchcard"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-3xl hover:text-[#00c7b7] transition-all duration-300"
//             >
//               <FaGithub />
//             </a>
//           </div>
//         </div>

//         {/* Footer Bottom Section */}
//         <div className="border-t border-[#444] pt-8 mt-8 text-center">
//           <p className="text-lg">
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
    <footer className="bg-[#4CAF50] text-white py-16 px-6">
      <div className="container mx-auto text-center sm:text-left">
        {/* Footer Main Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info Section */}
          <div>
            <h3 className="text-3xl font-extrabold mb-4 text-[#f0f0f0]">
              GoPunchCard
            </h3>
            <p className="text-lg mb-4">
              We are a company committed to bringing high-quality internet and
              telecommunication services to both residential and business
              customers.
              <br />
              Explore our plans and join us today.
            </p>
            <a
              href="#"
              className="flex items-center justify-start text-lg text-[#f0f0f0] hover:text-[#0056b3] transition-all duration-300"
            >
              <FaEnvelope className="mr-2" /> Email Us
            </a>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-2xl font-semibold mb-4 text-[#f0f0f0]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-lg hover:text-[#0056b3] transition-all duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-lg hover:text-[#0056b3] transition-all duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-lg hover:text-[#0056b3] transition-all duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-lg hover:text-[#0056b3] transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="text-2xl font-semibold mb-4 text-[#f0f0f0]">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="text-lg">
                <strong>Phone:</strong> 1-800-555-1234
              </li>
              <li className="text-lg">
                <strong>Email:</strong> support@gopunchcard.com
              </li>
              <li className="text-lg">
                <strong>Address:</strong> 123 Punchcard St, Suite 456, City,
                State, ZIP
              </li>
            </ul>
          </div>

          {/* Social Media Links Section */}
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-[#f0f0f0] transition-all duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-[#f0f0f0] transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-[#f0f0f0] transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-[#f0f0f0] transition-all duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-[#f0f0f0] transition-all duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-[#f0f0f0] pt-8 mt-8 text-center">
          <p className="text-lg text-[#f0f0f0]">
            &copy; {new Date().getFullYear()} GoPunchCard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
