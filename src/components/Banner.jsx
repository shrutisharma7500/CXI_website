import React from 'react'
import {Link} from 'react-router-dom'
import {FaArrowRight} from "react-icons/fa6"

const Banner = () => {
  return (
    <div className='px-4 py-32 bg-black mx-auto'>

        <div className=" text-white text-center">
            <h1 className='text-5xl lg-text-7xl leading-snug font-bold mb-5'>Welcome to our community<span className='text-5xl lg-text-7xl leading-snug font-bold text-orange-600'> CXI</span></h1>
            <p className='text-gray-100 lg:w-3/5 mx-auto'> Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas.We offer everything you need to get started ,from helpful tops and tutorials</p>
            <div>
                <Link to="/" className='font-medium hover:text-orange-500 py-5 inline-flex' items-center>Learn More<FaArrowRight className='mt-1 ml-2'/></Link>
            </div>

        </div>
    </div>
  )
}

export default Banner