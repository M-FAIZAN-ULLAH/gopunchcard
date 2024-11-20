import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      setSuccess(false);
      return;
    }
    setError(null);
    setSuccess(true);
    console.log("Form Submitted:", formData);
    // Here you would typically send the data to the server
  };

  return (
    <section className="bg-[#0056b3] py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-center font-extrabold text-[#f0f0f0] mb-16">
          Get in Touch with Us
        </h2>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-xl text-[#f0f0f0] mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border border-[#d1d5db] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] transition-all duration-300 text-black"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-xl text-[#f0f0f0] mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-[#d1d5db] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] transition-all duration-300 text-black"
                placeholder="Enter your email address"
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="block text-xl text-[#f0f0f0] mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 border border-[#d1d5db] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] transition-all duration-300 text-black"
                placeholder="Enter your message here"
                rows="6"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 text-white bg-[#4CAF50] rounded-lg shadow-lg hover:bg-[#0056b3] transition-all duration-300"
            >
              Submit
            </button>
          </form>

          {/* Error or Success Message */}
          {error && (
            <div
              className="mt-8 p-4 bg-red-100 text-red-800 rounded-lg shadow-lg text-center animate__animated animate__fadeIn animate__faster"
              style={{ animationDelay: "0.2s" }}
            >
              <p>{error}</p>
            </div>
          )}

          {success && (
            <div
              className="mt-8 p-4 bg-green-100 text-green-800 rounded-lg shadow-lg text-center animate__animated animate__fadeIn animate__faster"
              style={{ animationDelay: "0.2s" }}
            >
              <p>Your message has been sent successfully!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
