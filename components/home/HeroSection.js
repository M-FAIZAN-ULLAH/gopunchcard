// import React from "react";
// import { motion } from "framer-motion";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdOutlineExplore } from "react-icons/md";
// import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <section className="relative bg-gradient-to-r from-[#0056b3] via-[#3ebc42] to-[#0056b3] text-white min-h-screen flex items-center justify-center px-6 w-full">
//       {/* Background Circles Animation */}
//       <motion.div
//         className="absolute top-0 left-0 w-72 h-72 bg-[#4CAF50] rounded-full filter blur-3xl opacity-30"
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1.2, opacity: 1 }}
//         transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
//       />
//       <motion.div
//         className="absolute bottom-0 right-0 w-96 h-96 bg-[#0056b3] rounded-full filter blur-2xl opacity-20"
//         initial={{ scale: 0.6, opacity: 0 }}
//         animate={{ scale: 1.5, opacity: 0.6 }}
//         transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
//       />

//       {/* Content */}
//       <div className="relative z-10 text-center max-w-3xl">
//         {/* Heading Animation */}
//         <motion.h1
//           className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//         >
//           Empowering Connections with{" "}
//           <span className="text-[#f0f0f0]">Internet & Telecom Services</span>
//         </motion.h1>

//         {/* Subheading Animation */}
//         <motion.p
//           className="text-lg lg:text-xl text-gray-200 mb-8"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.6 }}
//         >
//           Discover reliable providers, tailored packages, and unparalleled
//           connectivity for your residential or business needs.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           className="flex justify-center gap-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.8 }}
//         >
//           <a
//             href="tel:+18001234567"
//             className="flex items-center gap-2 px-6 py-3 bg-[#4CAF50] text-white text-lg font-semibold rounded-full shadow-lg hover:bg-[#0056b3] hover:shadow-2xl transition-all duration-300"
//           >
//             <FaPhoneAlt />
//             Call Us: +1-800-123-4567
//           </a>
//           <button className="flex items-center gap-2 px-6 py-3 bg-[#0056b3] text-white text-lg font-semibold rounded-full shadow-lg hover:bg-[#4CAF50] hover:shadow-2xl transition-all duration-300">
//             <MdOutlineExplore />
//             Explore Packages
//           </button>
//         </motion.div>
//       </div>

//       {/* Hero Image */}
//       <motion.div
//         className="absolute right-10 bottom-10 w-80 h-80 lg:w-[500px] lg:h-[500px] bg-gray-300 rounded-full overflow-hidden shadow-lg"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, delay: 1 }}
//       >
//         <Image
//           src="/null-image.png" // Replace with your actual image path
//           alt="Hero"
//           layout="fill"
//           objectFit="cover"
//         />
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import Image from "next/image";
import MapImage from "../../Assests/map.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#0056b3] via-[#4CAF50] to-[#0056b3] text-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background Circles Animation */}
      <motion.div
        className="absolute top-0 left-0 w-56 h-56 sm:w-72 sm:h-72 bg-[#4CAF50] rounded-full filter blur-3xl opacity-30"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#0056b3] rounded-full filter blur-2xl opacity-20"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 0.6 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* Heading Animation */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Empowering Connections with{" "}
          <span className="text-[#f0f0f0]">Internet & Telecom Services</span>
        </motion.h1>

        {/* Subheading Animation */}
        <motion.p
          className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Discover reliable providers, tailored packages, and unparalleled
          connectivity for your residential or business needs.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            href="tel:+18001234567"
            className="flex items-center gap-2 px-5 py-3 bg-[#4CAF50] text-white text-sm sm:text-lg font-semibold rounded-full shadow-lg hover:bg-[#0056b3] hover:shadow-2xl transition-all duration-300"
          >
            <FaPhoneAlt />
            Call Us: +1-800-123-4567
          </a>
          <button className="flex items-center gap-2 px-5 py-3 bg-[#0056b3] text-white text-sm sm:text-lg font-semibold rounded-full shadow-lg hover:bg-[#4CAF50] hover:shadow-2xl transition-all duration-300">
            <MdOutlineExplore />
            Explore Services
          </button>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div
        // className="absolute bottom-6 right-6 w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] bg-gray-300 rounded-full overflow-hidden shadow-lg"
        className="absolute bottom-6 right-6 w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] bg-gradient-to-tl rounded-full overflow-hidden ring-2 ring-[#4CAF50] opacity-100"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Image
          src={MapImage} // Replace with your actual image path
          alt="gopunchcard"
          layout="fill"
          objectFit="cover"
        />
        {/* <Image
          src={MapImage} // Replace with your actual image path
          alt="gopunchcard"
          layout="fill"
          objectFit="contain" // Ensures the image fits within the circle without being cropped
          className="rounded-full" // Keeps the image shape circular
        /> */}
      </motion.div>
    </section>
  );
};

export default HeroSection;
