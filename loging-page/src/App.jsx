import React from "react";

export default function App() {
  return (
    <div className=" bg-slate-300 flex justify-center min-h-screen items-center">
      <div className="flex flex-col gap-5 bg-white rounded-lg p-8 items-center">
        <h1>Login</h1>
        <label className=" text-gray-600" for="text">
          enter you user name{" "}
        </label>
        <input
          className="border border-gray "
          placeholder="username"
          type="text"
        />
        <input
          className="border border-gray-500"
          placeholder="password"
          type="password"
        />
        <button className=" bg-blue-500  hover:bg-blue-800 rounded w-full selection:px-4">
          login
        </button>
      </div>
    </div>
  );
}
