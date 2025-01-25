"use client";

import { useState } from "react";
import AuthWrapper from "../../components/AuthWrapper";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Profile() {
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  );
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSaveChanges = async () => {
    const profileData = {
      fullName,
      email,
      phone,
      oldPassword,
      newPassword,
    };
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios.put(
        "https://mamun-reza-freeshops-backend.vercel.app/api/v1/admin/update",
        profileData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to update profile");
      } else {
        alert("Profile Updated Successfully");
        router.push("/history");
        setFullName("");
        setEmail("");
        setPhone("");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthWrapper>
      <div className="min-h-screen bg-gradient-to-r from-orange-400 to-red-500 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <div className="flex items-start gap-4 mb-8">
            <div className="relative">
              <img
                src={image}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <button
                className="absolute bottom-0 left-28 bg-teal-500 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap"
                style={{ top: "50%", transform: "translate(10px, -21px)" }}
              >
                Upload New Picture
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold">Personal Information:</h2>

            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <h2 className="text-xl font-bold pt-4">Password Management:</h2>

            <div>
              <label className="block text-sm font-medium mb-2">
                Old Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your old password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                New Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Confirm your new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button
              className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition-colors"
              onClick={handleSaveChanges}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
}
