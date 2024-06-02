import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  // Generate an array of page numbers based on total pages
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='flex gap-2 justify-center list-none'>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none ${number === currentPage ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'}`}
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
