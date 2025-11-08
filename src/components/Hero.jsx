import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gray-50"
    >
      <div className="md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
          Building Digital Experiences with Precision
        </h2>
        <p className="text-gray-600 mb-6">
          We craft innovative solutions with modern technologies, ensuring
          responsive design and seamless performance.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="/public/Hero_image.jpg"
          alt="Hero"
          className="w-3/4 md:w-full rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
