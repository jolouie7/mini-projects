import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Perform authentication here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        className="rounded-lg bg-slate-300 p-6 lg:w-1/3"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="mb-2 block font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-6 leading-tight text-gray-700 shadow focus:outline-none"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block font-medium text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-indigo-500 py-2 px-4 font-medium text-white hover:bg-indigo-700 focus:outline-none"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline text-sm font-medium text-indigo-500 hover:text-indigo-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
