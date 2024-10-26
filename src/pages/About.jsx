import React from 'react';
import { Link } from 'react-router-dom'; // Correctly import Link
import blogg from '../assets/blogg.webp';
import women from '../assets/women.avif';
import man1 from '../assets/man1.avif';
import Contact from "../pages/Contact";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-10">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg text-gray-600 mt-2">Sharing Insights, One Post at a Time</p>
      </header>

      {/* Hero Image Section */}
      <Link to={"/blogs"}>
        <img 
          src={blogg}
          alt="About Us" 
          className="w-full h-60 object-cover rounded-lg shadow-md mb-8" 
        />
      </Link> 

      {/* Mission Statement Section */}
      <section className="text-center mb-10">
        <h2 className="text-3xl font-semibold">Our Mission</h2>
        <p className="mt-4 text-gray-700">
          We strive to provide our readers with engaging and informative content on a variety of topics. 
          Our goal is to inspire, educate, and entertain through high-quality blog posts that resonate with our audience.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-center mb-4">Meet the Team</h2>
        <div className="flex flex-wrap justify-center">
          {/* Team Member 1 */}
          <div className="max-w-xs m-4 p-4 bg-white rounded-lg shadow-md">
            <img 
              src={women}
              alt="Team Member 1" 
              className="w-full h-40 object-cover rounded-t-lg" 
            />
            <h3 className="text-xl font-bold mt-2">Bella Doe</h3>
            <p className="text-gray-600">Founder & Blogger</p>
            <p className="mt-2 text-gray-700">
              Bella is a passionate writer and the driving force behind our blog. She loves sharing her insights on technology and lifestyle.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="max-w-xs m-4 p-4 bg-white rounded-lg shadow-md">
            <img 
              src={man1}
              alt="Team Member 2" 
              className="w-full h-40 object-cover rounded-t-lg" 
            />
            <h3 className="text-xl font-bold mt-2">John Smith</h3>
            <p className="text-gray-600">Content Creator</p>
            <p className="mt-2 text-gray-700">
              John specializes in creating engaging content and is always on the lookout for the latest trends in blogging.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-700 mb-4">
          We would love to hear from you! Feel free to reach out with any questions or suggestions.
        </p>
        <Link 
          to="/contact" 
          className="bg-yellow-500 text-white px-4 py-2 rounded-full font-bold"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default About;
