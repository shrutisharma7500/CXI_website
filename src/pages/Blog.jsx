import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams(); // Get the ID from the URL parameter
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    console.log('Fetching blog data...');
    fetch('/blogs.json') // Ensure the path to your blogs.json file is correct
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data); // Log the fetched data for debugging
        const selectedBlog = data.find((blog) => blog.id === parseInt(id)); // Ensure ID comparison is correct
        console.log('Selected blog:', selectedBlog); // Log the selected blog for debugging
        setBlog(selectedBlog);
      })
      .catch((error) => console.error('Error fetching blog:', error));
  }, [id]); // Trigger effect when ID changes

  if (!blog) {
    return <div>Loading...</div>; // Render loading state while fetching data
  }

  return (
    <div className="max-w-screen-md mx-auto p-4 mt-20">
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-600 mb-1">Author: {blog.author}</p>
      <p className="text-gray-600 mb-4">Published Date: {blog.published_date}</p>
      <img className="w-full mb-4" src={blog.image} alt={blog.title} />
      <div className="text-lg leading-relaxed">{blog.content}</div> {/* Render the content of the blog */}
    </div>
  );
};

export default Blog;
