// import React from "react";
// import { motion } from "framer-motion"; // For advanced animation effects

// const CareersPage = () => {
//   return (
//     <section className="bg-[#0056b3] text-white py-20">
//       <div className="container mx-auto px-6">
//         {/* Hero Section */}
//         <div className="text-center mb-16">
//           <motion.h1
//             className="text-5xl font-extrabold mb-4"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           >
//             Join Our Team at GoPunchCard
//           </motion.h1>
//           <motion.p
//             className="text-xl mb-8"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 1 }}
//           >
//             We are looking for passionate individuals to help us redefine the
//             future of internet and telecommunication services.
//           </motion.p>
//           <motion.a
//             href="#job-listings"
//             className="bg-[#4CAF50] py-3 px-6 text-xl font-bold rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg"
//             whileHover={{
//               scale: 1.1,
//               boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
//             }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.5, duration: 1 }}
//           >
//             Explore Careers
//           </motion.a>
//         </div>

//         {/* Our Culture Section */}
//         <div className="text-center mb-16">
//           <motion.h2
//             className="text-4xl font-extrabold text-[#f0f0f0] mb-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 2 }}
//           >
//             Our Culture
//           </motion.h2>
//           <motion.p
//             className="text-xl text-[#f0f0f0] mb-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 2.5 }}
//           >
//             At GoPunchCard, we believe in fostering a collaborative, inclusive,
//             and innovative environment where everyone can thrive.
//           </motion.p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Innovation */}
//             <motion.div
//               className="p-6 bg-white text-[#333] rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500"
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1, delay: 3 }}
//             >
//               <h3 className="text-2xl font-bold mb-3">Innovation</h3>
//               <p>
//                 We prioritize creativity and new ideas to keep improving our
//                 services and make an impact in the industry.
//               </p>
//             </motion.div>
//             {/* Collaboration */}
//             <motion.div
//               className="p-6 bg-white text-[#333] rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500"
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0, y: -50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 3.5 }}
//             >
//               <h3 className="text-2xl font-bold mb-3">Collaboration</h3>
//               <p>
//                 Teamwork is at the core of everything we do. We believe that the
//                 best ideas come from diverse perspectives.
//               </p>
//             </motion.div>
//             {/* Growth */}
//             <motion.div
//               className="p-6 bg-white text-[#333] rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500"
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1, delay: 4 }}
//             >
//               <h3 className="text-2xl font-bold mb-3">Growth</h3>
//               <p>
//                 We are committed to the growth of our employees and provide
//                 opportunities to expand skills and knowledge.
//               </p>
//             </motion.div>
//           </div>
//         </div>

//         {/* Job Listings Section */}
//         <div id="job-listings" className="mb-16">
//           <motion.h2
//             className="text-4xl text-center font-extrabold text-[#f0f0f0] mb-12"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 2.5 }}
//           >
//             Current Openings
//           </motion.h2>
//           <div className="space-y-8">
//             {/* Job 1 */}
//             <motion.div
//               className="flex items-center justify-between bg-white text-[#333] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500"
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 4 }}
//             >
//               <div>
//                 <h3 className="text-2xl font-bold">Sales Manager</h3>
//                 <p className="text-lg">
//                   Lead our sales team to new heights by developing strategies
//                   and fostering key partnerships.
//                 </p>
//               </div>
//               <a
//                 href="#"
//                 className="bg-[#0056b3] text-white py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
//               >
//                 Apply Now
//               </a>
//             </motion.div>
//             {/* Job 2 */}
//             <motion.div
//               className="flex items-center justify-between bg-white text-[#333] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500"
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 4.5 }}
//             >
//               <div>
//                 <h3 className="text-2xl font-bold">
//                   Telecommunications Engineer
//                 </h3>
//                 <p className="text-lg">
//                   Work on cutting-edge telecommunication technology and help us
//                   deliver outstanding services.
//                 </p>
//               </div>
//               <a
//                 href="#"
//                 className="bg-[#0056b3] text-white py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
//               >
//                 Apply Now
//               </a>
//             </motion.div>
//             {/* Job 3 */}
//             <motion.div
//               className="flex items-center justify-between bg-white text-[#333] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500"
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 5 }}
//             >
//               <div>
//                 <h3 className="text-2xl font-bold">
//                   Customer Support Specialist
//                 </h3>
//                 <p className="text-lg">
//                   Provide exceptional customer service and support to our
//                   clients in need.
//                 </p>
//               </div>
//               <a
//                 href="#"
//                 className="bg-[#0056b3] text-white py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
//               >
//                 Apply Now
//               </a>
//             </motion.div>
//           </div>
//         </div>

//         {/* Call to Action Section */}
//         <div className="text-center mb-16">
//           <motion.h2
//             className="text-4xl font-extrabold text-[#f0f0f0] mb-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 5 }}
//           >
//             Ready to Join Us?
//           </motion.h2>
//           <motion.p
//             className="text-lg text-[#f0f0f0] mb-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 5.5 }}
//           >
//             If you’re passionate, driven, and ready to make an impact, we want
//             to hear from you.
//           </motion.p>
//           <motion.a
//             href="#"
//             className="bg-[#4CAF50] py-3 px-6 text-xl font-bold rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg"
//             whileHover={{
//               scale: 1.1,
//               boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
//             }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 6, duration: 1 }}
//           >
//             Apply Today
//           </motion.a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CareersPage;

import React from "react";
import { motion } from "framer-motion";

const CareersPage = () => {
  return (
    <section className="bg-gradient-to-br from-[#001f3f] via-[#004080] to-[#0056b3] text-white min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Join Our Team at GoPunchCard
          </motion.h1>
          <motion.p
            className="text-xl mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Be a part of our innovative journey in redefining internet and
            telecommunication services.
          </motion.p>
          <motion.a
            href="#job-listings"
            className="bg-[#4CAF50] py-3 px-8 text-xl font-bold rounded-full transition-transform duration-300 shadow-xl hover:scale-110"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.3)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Explore Careers
          </motion.a>
        </div>

        {/* Our Culture Section */}
        <div className="text-center mb-20">
          <motion.h2
            className="text-4xl font-extrabold text-[#e0e0e0] mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Our Culture
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Innovation", "Collaboration", "Growth"].map((title, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white text-[#333] rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-700 hover:scale-110"
                whileHover={{ rotate: 5 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p>
                  {title === "Innovation" &&
                    "We embrace creativity and strive to improve constantly."}
                  {title === "Collaboration" &&
                    "Teamwork drives our success, powered by diverse perspectives."}
                  {title === "Growth" &&
                    "We nurture personal and professional development for our team."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Job Listings Section */}
        <div id="job-listings" className="mb-20">
          <motion.h2
            className="text-4xl text-center font-extrabold text-[#f0f0f0] mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            Current Openings
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative">
            {[
              "Sales Manager",
              "Telecommunications Engineer",
              "Customer Support Specialist",
            ].map((job, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-[#ffffffcc] to-[#ffffff] text-[#333] p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-500 rotate-animation"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: index * 0.5 }}
              >
                <div>
                  <h3 className="text-xl font-extrabold mb-4">{job}</h3>
                  <p className="text-sm mb-4">
                    {job === "Sales Manager" &&
                      "Lead our sales team to new heights with strategy and partnerships."}
                    {job === "Telecommunications Engineer" &&
                      "Work on cutting-edge technology and innovation."}
                    {job === "Customer Support Specialist" &&
                      "Provide exceptional support to our clients."}
                  </p>
                  <motion.a
                    href="#"
                    className="bg-[#0056b3] text-white py-2 px-6 rounded-lg font-bold inline-block transition-all hover:scale-105"
                    whileHover={{
                      scale: 1.1,
                      rotate: 2,
                      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    Apply Now
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <motion.h2
            className="text-4xl font-extrabold text-[#f0f0f0] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4 }}
          >
            Ready to Join Us?
          </motion.h2>
          <motion.p
            className="text-lg text-[#e0e0e0] mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4.5 }}
          >
            Bring your passion and skills to our team. Together, we’ll shape the
            future.
          </motion.p>
          <motion.a
            href="#"
            className="bg-[#4CAF50] py-3 px-8 text-xl font-bold rounded-full shadow-lg transition-transform hover:scale-110"
            whileHover={{
              scale: 1.2,
              rotate: 5,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 5 }}
          >
            Apply Today
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CareersPage;
