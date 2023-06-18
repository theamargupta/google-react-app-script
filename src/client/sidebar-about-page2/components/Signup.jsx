import React from 'react';
import { useForm } from 'react-hook-form';

const Signup = ({ setIsAuthenticated }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    setIsAuthenticated(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register('name')}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              id="username"
              {...register('username', { required: true })}
              type="text"
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
            {errors.username && <p>This field is required</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              id="password"
              {...register('password')}
              type="password"
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
            // onClick={() => setfirst(true)}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
