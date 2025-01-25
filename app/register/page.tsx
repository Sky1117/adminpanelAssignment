"use client";

import { useState } from "react";
import { Eye } from "lucide-react";
import Link from "next/link";
import Logo from "../../Img/logo.png";
import axios from "axios";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = {
      name,
      email,
      phone,
      password,
    };

    try {
      const response = await axios.post(
        "https://mamun-reza-freeshops-backend.vercel.app/api/v1/admin/registration",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("User registered successfully:", response.data);
      window.location.href = "/";
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-custom-background flex items-center justify-center p-4">
      <div className="w-full max-w-6xl h-[650px] bg-gray-100 bg-opacity-80 rounded-lg shadow-xl flex overflow-hidden">
        <div className="w-1/2 flex items-center justify-center p-8 relative">
          <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-red-500"></div>
          <div className="text-center">
            <div className="w-50 h-50 mx-auto mb-8">
              <img
                src={Logo.src}
                alt="Free Shops Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="w-1/2 p-8 flex items-center">
          <div className="w-full max-w-md mx-auto bg-white p-2 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Create New Account</h2>
            <p className="text-gray-500 mb-8">
              Please fill in the form to continue
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your phone number"
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

              <div className="relative">
                <label className="block text-sm font-medium mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    <Eye size={20} />
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition-colors"
              >
                Create Account
              </button>

              <div className="text-center">
                <Link
                  href="/"
                  className="text-sm text-teal-500 hover:text-teal-600"
                >
                  Already have an account?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
