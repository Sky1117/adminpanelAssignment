"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import AuthWrapper from "../../components/AuthWrapper";
import logo from "../../Img/logo.png";

export default function History() {
  const [currentPage, setCurrentPage] = useState(1);
  const menuItems = [
    { name: "Dashboard", color: "text-teal-600" },
    { name: "User Management", color: "text-teal-600" },
    { name: "Rating and Review", color: "text-teal-600" },
    { name: "Settings", color: "text-teal-600" },
    { name: "History", color: "text-teal-500" },
    { name: "All Bookings", color: "text-teal-600" },
    { name: "Push Notification", color: "text-teal-600" },
    { name: "Transaction List", color: "text-teal-600" },
    { name: "Google Analytics", color: "text-teal-600" },
    { name: "Multi-Currency", color: "text-teal-600" },
    { name: "Category", color: "text-teal-600" },
    { name: "Live Chat History", color: "text-teal-600" },
    { name: "Package Plan", color: "text-teal-600" },
    { name: "Referral History", color: "text-teal-600" },
    { name: "Google Map", color: "text-teal-600" },
  ];

  const activities = [
    {
      id: 1,
      user: "Yenny Rosales",
      action: "Log In",
      date: "July 5, 2023 02:30 pm",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      user: "Alan Robert",
      action: "Blocked Product",
      date: "July 5, 2023 02:27 pm",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      user: "Yenny Rosales",
      action: "Selling Product",
      date: "July 5, 2023 02:25 pm",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 4,
      user: "Alan Robert",
      action: "Unregistered",
      date: "July 5, 2023 02:22 pm",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 5,
      user: "Yenny Rosales",
      action: "Bought Product",
      date: "July 5, 2023 02:20 pm",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <AuthWrapper>
      <div className="min-h-screen bg-gray-50">
        <div className="flex">
          <div className="w-64 bg-white shadow-lg min-h-screen overflow-auto">
            <div className="p-4">
              <div className="mb-6">
                <img src={logo.src} />
              </div>
              <nav>
                <ul className="space-y-2">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href="#"
                        className={`block px-4 py-2 rounded-md ${
                          item.name === "History"
                            ? "bg-teal-500 text-white"
                            : `${item.color} hover:bg-gray-50`
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-gradient-to-r from-orange-300 to-red-400 p-4">
              <div className="flex justify-between items-center">
                <h1 className="text-white text-2xl font-semibold">
                  Activity History
                </h1>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500 w-64"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-500">
                      🔍
                    </button>
                  </div>
                  <Link href="/profile">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60"
                      alt="Profile"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="mb-4 flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Activity History</h2>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Search by user, date, or activity type"
                      className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">
                      Search
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="px-6 py-3 text-left">
                          <input type="checkbox" className="rounded" />
                        </th>
                        <th className="px-6 py-3 text-left">User</th>
                        <th className="px-6 py-3 text-left">Action</th>
                        <th className="px-6 py-3 text-left">Date & Time</th>
                        <th className="px-6 py-3 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activities.map((activity) => (
                        <tr
                          key={activity.id}
                          className="border-b hover:bg-gray-50"
                        >
                          <td className="px-6 py-4">
                            <input type="checkbox" className="rounded" />
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <Image
                                src={activity.image}
                                alt={activity.user}
                                width={32}
                                height={32}
                                className="rounded-full"
                              />
                              <span>{activity.user}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">{activity.action}</td>
                          <td className="px-6 py-4">{activity.date}</td>
                          <td className="px-6 py-4">
                            <button className="text-gray-400 hover:text-gray-600">
                              •••
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <button className="text-red-500 hover:text-red-600">
                    Delete
                  </button>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">Displaying Page</span>
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() =>
                          setCurrentPage(Math.max(1, currentPage - 1))
                        }
                        className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200"
                      >
                        Previous
                      </button>
                      {[1, 2, 3, 4, 5, 6].map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-3 py-1 rounded-md ${
                            currentPage === page
                              ? "bg-teal-500 text-white"
                              : "bg-gray-100 hover:bg-gray-200"
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                      <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-right">
                  <button className="text-teal-500 hover:text-teal-600 text-sm">
                    Export activity log to CSV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
}
