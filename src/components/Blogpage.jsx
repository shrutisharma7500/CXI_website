import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Blogcards from './Blogcards';
import Pagination from './Pagination'; // Import Pagination component

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5; // Number of blogs to display per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/blogs.json');
        setBlogs(response.data);
      } catch (error) {  
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Logic to get current blogs based on pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* category section */}
      <div className='text-3xl mt-5 lg:text-7xl text-black  font-serif font-bold text-center bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500'>BLOGS</div>
      {/* blogcards section */}
      <div>
        <Blogcards blogs={currentBlogs}/>
      </div>
      {/* pagination section */}
      <div className="flex justify-center mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(blogs.length / blogsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BlogPage;
