import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* Your other components or content */}
      </div>
      <Outlet />
    </>
  );
};

export default App;
