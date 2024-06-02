import React, { useState } from 'react';
import Blogpage from '../components/Blogpage';
import blog from '../assets/blog.jpg'; // Adjusted the import path
import Navbar from '../components/Navbar';

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  // Total blogs and blogs per page (simulated data)
  const totalBlogs = 38;
  const blogsPerPage = 5;
  
  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="relative bg-black text-center text-white px-4 flex-grow">
        {/* Image visible only on small screens */}
        <img
          src={blog}
          alt="Blog"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-screen object-cover opacity-50"
        />
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-snug font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          Welcome to Our Blog
        </h2>
      </div>
      {/* All blogs container */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex-grow">
        <Blogpage currentPage={currentPage} blogsPerPage={blogsPerPage} />
        {/* Pagination component can be added here */}
      </div>
    </div>
  );
};

export default Blogs;
