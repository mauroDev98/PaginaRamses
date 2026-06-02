"use client";

import { useState } from "react";
import Datatable from "./Database";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // 1. Frontend Validation (Saves server resources)
    if (!email.includes("@")) {
      setError("Email must contain an '@'. Request cancelled.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters. Request cancelled.");
      return;
    }

    // 2. HTTP Communication with the Backend
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // 3. Authorization: Save the token (simulated in local state/storage)
        localStorage.setItem("authToken", data.token);
        setIsAuthenticated(true);
      } else {
        setError(data.message || "Authentication failed");
      }
    } catch (err) {
      setError("Failed to communicate with the server.");
    }
  };

  // If authenticated, show the Datatable. If not, show the Login Form.
  if (isAuthenticated) {
    return (
      <div>
        <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
          Authentication successful! Token saved in client.
        </div>
        <Datatable />
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-xl font-bold mb-4">
        Secure Access (Client-Server Auth)
      </h2>

      {error && (
        <div className="bg-yellow-100 text-yellow-800 p-2 mb-4 rounded border border-yellow-300">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="text"
            className="mt-1 w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="mt-1 w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Sign In
        </button>
      </form>
      <p className="text-xs text-gray-500 mt-4 text-center">
        Hint: Use <b>student@university.edu</b> / <b>secret123</b>
      </p>
    </div>
  );
}
