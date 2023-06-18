import React from 'react';
import { routeConst } from './utils';

function HomeLandingPage({ setRouteState }) {
  const handleLogout = () => {
    localStorage.removeItem('user');
    setRouteState(routeConst.root);
  };
  return (
    <div className="bg-blue-500 text-white min-h-screen">
      <nav className="flex items-center justify-between bg-blue-600 px-4 py-3">
        <h1 className="text-2xl font-bold">My Website</h1>
        <button
          className="bg-white text-blue-500 px-4 py-2 rounded-full"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>
      <div className="flex flex-col justify-center items-center px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website!</h1>
        <p className="text-lg text-center mb-6">
          We offer a wide range of products and services to meet your needs.
        </p>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default HomeLandingPage;
