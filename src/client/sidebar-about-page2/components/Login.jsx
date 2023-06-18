import React from 'react';

const Login = ({ setfirst }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              id="password" 
              type="password"
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <button
            // type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
            onClick={() => setfirst(!true)}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
