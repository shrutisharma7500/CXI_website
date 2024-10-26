import React, { useState, useEffect } from 'react';
import Blogpage from '../components/Blogpage';
import Navbar from '../components/Navbar';
import blog4 from '../assets/blog4.avif'; // Default image for larger screens
// import blogMobile from '../assets/blog-mobile.avif'; // Mobile-specific image
import flower from '../assets/flower.jpg';

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Adjust breakpoint as needed

  const totalBlogs = 38;
  const blogsPerPage = 5;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Check for mobile width
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="relative bg-black text-center text-white px-4 flex-grow">
        {/* Conditional rendering for images based on screen size */}
        <img
          src={isMobile ? flower : blog4} // Use mobile image if on small screens
          alt="Blog"
          className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-screen object-cover opacity-50"
        />
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-snug font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          Welcome to Our Blog
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 flex-grow">
        <Blogpage currentPage={currentPage} blogsPerPage={blogsPerPage} />
        {/* Pagination component can be added here */}
      </div>
    </div>
  );
};

export default Blogs;
