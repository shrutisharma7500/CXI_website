import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blogcards = ({ blogs }) => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2'>
      {blogs.map((blog) => (
        <Link
          key={blog.id}
          to={`/blog/${blog.id}`} // Navigate to individual blog page
          className='bg-gray-200 p-5 shadow-lg rounded cursor-pointer ml-10 my-5 mr-5 hover:transform hover:scale-110 transition-transform duration-300'
          data-aos='fade-up' // AOS attribute for the animation effect
        >
          <div>
            <img src={blog.image} alt="" className='w-full' />
          </div>
          <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>
            {blog.title}
          </h3>
          <p className='mb-2 text-gray-600 flex items-center'>
            <FaUser className="inline-flex items-center mr-2" />
            {blog.author}
          </p>
          <p className='text-sm text-gray-500'>Published: {blog.published_date}</p>
        </Link>
      ))}
    </div>
  );
}

export default Blogcards;
