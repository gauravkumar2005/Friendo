import React from "react";
import {
  Search,
  UserCheck,
  MoreHorizontal,
  MessageCircle,
} from "lucide-react";

function Following() {
  const followingUsers = [
    {
      username: "rahulsharma",
      name: "Rahul Sharma",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43c",
      bio: "Frontend Developer 🚀",
      active: true,
    },
    {
      username: "ananyapatel",
      name: "Ananya Patel",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      bio: "UI/UX Designer ✨",
    },
    {
      username: "karanmehta",
      name: "Karan Mehta",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      bio: "React Developer 💻",
    },
    {
      username: "sneha.verma",
      name: "Sneha Verma",
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
      bio: "Travel Creator 🌍",
    },
    {
      username: "priyasingh",
      name: "Priya Singh",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      bio: "Photographer 📸",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex justify-center px-4 py-10">

      {/* MAIN CARD */}
      <div className="w-full max-w-3xl bg-[#111827] border border-white/10 rounded-3xl shadow-2xl overflow-hidden">

        {/* HEADER */}
        <div className="p-6 border-b border-white/10">

          <div className="flex items-center justify-between mb-6">

            <div>
              <h2 className="text-3xl font-bold">
                Following
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                People you follow on Friendo
              </p>
            </div>

            <div className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-xl text-sm font-medium">
              {followingUsers.length} Following
            </div>
          </div>

          {/* SEARCH BAR */}
          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-3.5 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search following..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-11 pr-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* USER LIST */}
        <div className="p-4 space-y-4">

          {followingUsers.map((user, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white/5 hover:bg-white/10 transition-all duration-300 p-4 rounded-2xl border border-white/5"
            >

              {/* LEFT SIDE */}
              <div className="flex items-center gap-4">

                {/* PROFILE IMAGE */}
                <div className="relative">

                  <img
                    src={user.image}
                    alt={user.username}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/10"
                  />

                  {user.active && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-[#111827]"></div>
                  )}
                </div>

                {/* USER INFO */}
                <div>
                  <h3 className="font-semibold text-white">
                    {user.username}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {user.name}
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    {user.bio}
                  </p>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex items-center gap-3">

                {/* MESSAGE BUTTON */}
                <button className="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 transition px-4 py-2 rounded-xl text-sm">
                  <MessageCircle size={16} />
                  Message
                </button>

                {/* FOLLOWING BUTTON */}
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-xl text-sm font-medium shadow-lg">

                  <UserCheck size={16} />

                  Following
                </button>

                {/* MORE */}
                <button className="p-2 rounded-xl hover:bg-white/10 transition">
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Following;