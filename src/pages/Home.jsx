// src/pages/Home.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="font-sans bg-black overflow-hidden">
      <section className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 text-white text-center py-16 w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-5">Welcome to Our Blog</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">Explore, Learn, and Share Insights</p>
        <a href="/blogs" className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
          Read Our Blogs
        </a>
      </section>
      
      <section className="py-16 text-center w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Why Choose Us?</h2>
        <div className="w-full max-w-4xl mx-auto">
          <Slider {...settings}>
            <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-lg p-6 shadow-md w-full">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Engaging Content</h3>
              <p className="text-base md:text-lg">Our blog features well-researched and thought-provoking articles.</p>
            </div>
            <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-lg p-6 shadow-md w-full">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Community Driven</h3>
              <p className="text-base md:text-lg">Join a community of like-minded individuals sharing their thoughts.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md w-full">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Regular Updates</h3>
              <p className="text-base md:text-lg">Stay updated with fresh content published regularly.</p>
            </div>
          </Slider>
        </div>
      </section>
      
      <section className="py-16 text-center w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">What Our Readers Say</h2>
        <div className="w-full max-w-4xl mx-auto">
          <Slider {...settings}>
            <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-lg p-6 shadow-md w-full">
              <p className="mb-2 text-base md:text-lg">"An amazing platform to share and learn!"</p>
              <h4 className="font-semibold">- Alex</h4>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md w-full">
              <p className="mb-2 text-base md:text-lg">"I love the variety of topics covered!"</p>
              <h4 className="font-semibold">- Jamie</h4>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md w-full">
              <p className="mb-2 text-base md:text-lg">"A wonderful community of writers and readers!"</p>
              <h4 className="font-semibold">- Taylor</h4>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Home;  
