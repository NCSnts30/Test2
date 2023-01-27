import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('email:', email);
    console.log('password:', password);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-lg font-medium mb-4">Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full border border-gray-400 p-2 rounded-lg"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full border border-gray-400 p-2 rounded-lg"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Login
          </button>
          <a href="/login" className="text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
