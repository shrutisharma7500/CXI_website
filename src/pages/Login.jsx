// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(true); // State to toggle between login and sign-up
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here (e.g., API call to authenticate user)
    if (isLoginMode) {
      // Login logic
      if (email === 'user@example.com' && password === 'password') {
        navigate('/'); // Redirect on successful login
      } else {
        alert('Invalid email or password');
      }
    } else {
      // Sign-up logic (dummy example)
      alert(`Signed up with: ${email}`);
      setEmail('');
      setPassword('');
      setIsLoginMode(true); // Switch back to login mode after sign-up
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl mb-4">{isLoginMode ? 'Login' : 'Sign Up'}</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className=" text-white px-4 py-2 rounded  focus:outline-none focus:shadow-outline"
        >
          {isLoginMode ? 'Login' : 'Sign Up'}
        </button>
        <p className="mt-4 text-sm">
          {isLoginMode ? "Don't have an account? " : 'Already have an account? '}
          <button
            type="button"
            onClick={() => setIsLoginMode((prev) => !prev)}
            className="text-blue-500 underline"
          >
            {isLoginMode ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
