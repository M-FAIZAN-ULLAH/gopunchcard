import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import CardImage from "../../Assests/card.png";
import Image from "next/image";

const ServiceProviders = () => {
  const providers = [
    {
      name: "Provider 1",
      description:
        "Best-in-class internet and telecommunication services for businesses and homes.",
      phone: "+1-800-123-4567",
      image: "/provider1.jpg", // Replace with actual image
    },
    {
      name: "Provider 2",
      description:
        "Affordable packages with top-notch customer support for your telecommunication needs.",
      phone: "+1-800-987-6543",
      image: "/provider2.jpg", // Replace with actual image
    },
    {
      name: "Provider 3",
      description:
        "Reliable and fast internet services for residential and business use.",
      phone: "+1-800-112-2334",
      image: "/provider3.jpg", // Replace with actual image
    },
    {
      name: "Provider 4",
      description:
        "Business-oriented telecom solutions with high-speed internet and security.",
      phone: "+1-800-334-4556",
      image: "/provider4.jpg", // Replace with actual image
    },
    {
      name: "Provider 5",
      description:
        "Customized internet plans for families, with dedicated support and packages.",
      phone: "+1-800-778-8999",
      image: "/provider5.jpg", // Replace with actual image
    },
    {
      name: "Provider 6",
      description:
        "Enterprise-grade internet services with exceptional customer support.",
      phone: "+1-800-443-5566",
      image: "/provider6.jpg", // Replace with actual image
    },
  ];

  return (
    <section className="bg-[#f0f0f0] py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl text-center font-extrabold text-[#0056b3] mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Our Trusted Service Providers
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {providers.map((provider, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-500 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <Image
                src={CardImage}
                alt={provider.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-[#0056b3] mb-2">
                {provider.name}
              </h3>
              <p className="text-gray-700 mb-4">{provider.description}</p>
              <div className="flex justify-between">
                <a
                  href={`tel:${provider.phone}`}
                  className="flex items-center gap-2 text-white bg-[#4CAF50] px-4 py-2 rounded-lg shadow-md hover:bg-[#0056b3] transition-all duration-300"
                >
                  <FaPhoneAlt />
                  Call Us
                </a>
                <a
                  href={`/providers/${provider.name.toLowerCase()}`}
                  className="flex items-center gap-2 text-[#0056b3] border-2 border-[#0056b3] px-4 py-2 rounded-lg shadow-md hover:bg-[#0056b3] hover:text-white transition-all duration-300"
                >
                  <MdContactPhone />
                  Contact Info
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProviders;
