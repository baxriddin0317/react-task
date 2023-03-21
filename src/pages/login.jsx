import React from "react";

const login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="container mx-auto px-5">
      <div className="flex items-center justify-center py-24">
        <form onSubmit={handleSubmit} className="max-w-xs w-full bg-white shadow-md rounded-lg p-4">
          <h2 className="text-center font-bold text-2xl mb-4">Login</h2>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="name">
              Login
            </label>
            <input
              className="w-full bg-gray-200 py-2 px-3 rounded-lg text-gray-900 outline-none"
              type="text"
              placeholder="Login"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 capitalize" htmlFor="email">
              password
            </label>
            <input
              className="w-full bg-gray-200 py-2 px-3 rounded-lg text-gray-900 outline-none"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-center my-5">
            <button className="bg-cyan-700 text-white rounded-lg py-3 w-1/2" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default login;
