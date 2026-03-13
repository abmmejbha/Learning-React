// একটা user-এর info দেখাবে
import React, { useState } from "react";

function UserCard({ email, name, city, website, phone }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-gray-700 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <h3 className="text-white text-xl font-bold text-gray-800">{name}</h3>

      <div className="flex justify-right mb-4">
        <img
          src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${name}`}
          alt={name}
          className="w-20 h-20 rounded-full border-2 border-blue-500 shadow-md bg-gray-100"
        />
      </div>

      <button
        className="bg-blue-600 hover:bg-blue-800 cursor-pointer text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide" : "Show Details"}
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          showDetails
            ? "grid-rows-[1fr] opacity-100 mt-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-lg border border-gray-300">
          <div className="p-4 bg-blue-200  rounded-lg border-l-4 border-blue-500 space-y-2">
            <p className="text-sm text-gray-700">Phone:📞 {phone}</p>
            <p className="text-gray-600 mb-4">Email: 📧 {email}</p>
            <p className="text-sm text-gray-700">city:📍 {city}</p>
            <a
              href={`https://${website}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 ml-1 text-sm hover:underline"
            >
              website: 🌐 {website}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserCard;
