"use client";

import { useState } from "react";
import { Eye } from "lucide-react";
import Link from "next/link";
import logo from "../Img/logo.png";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://mamun-reza-freeshops-backend.vercel.app/api/v1/admin/login",
        {
          email: username,
          password,
        }
      );
      const { accessToken } = response.data;
      localStorage.setItem("accessToken", accessToken);
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-custom-background flex items-center justify-center p-4">
      <div className="w-full max-w-6xl h-[600px] bg-gray-100 bg-opacity-80 rounded-lg shadow-xl flex overflow-hidden">
        <div className="w-1/2 flex items-center justify-center p-8 relative">
          <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-red-500"></div>
          <div className="text-center">
            <div className="w-50 h-50 mx-auto mb-8">
              <img
                src={logo.src}
                alt="Free Shops Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="w-1/2  p-8 flex items-center">
          <div className="w-full max-w-md mx-auto bg-white p-2 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Log in</h2>
            <p className="text-gray-500 mb-8">
              Welcome back! Please login to continue.
            </p>

            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-medium mb-2">
                  User Name
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your username"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    <Eye size={20} />
                  </button>
                </div>
              </div>

              <div className="text-right">
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-teal-500"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition-colors"
              >
                Log In
              </button>

              <div className="text-center">
                <Link
                  href="/register"
                  className="text-sm text-teal-500 hover:text-teal-600"
                >
                  Create New Account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
