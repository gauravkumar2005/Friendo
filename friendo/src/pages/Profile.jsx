import React from "react";
import {
  Grid3X3,
  Video,
  Bookmark,
  Settings,
  MessageCircle,
  UserPlus,
} from "lucide-react";

function Profile() {
  const posts = [
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  ];

  const highlights = ["Travel", "Projects", "Friends", "Life"];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">

      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">

        {/* PROFILE HEADER */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">

          {/* PROFILE IMAGE */}
          <div className="relative">
            <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 p-1 rounded-full">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43c"
                alt="profile"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-[#0f172a]"
              />
            </div>

            {/* ONLINE DOT */}
            <div className="absolute bottom-4 right-4 w-5 h-5 bg-green-500 border-4 border-[#0f172a] rounded-full"></div>
          </div>

          {/* PROFILE INFO */}
          <div className="flex-1 text-center md:text-left">

            {/* USERNAME + ACTIONS */}
            <div className="flex flex-col md:flex-row items-center gap-4 mb-6">

              <h2 className="text-3xl font-semibold tracking-wide">
                rahulsharma
              </h2>

              <div className="flex gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-xl text-sm font-medium shadow-lg">
                  Edit Profile
                </button>

                <button className="bg-white/10 hover:bg-white/20 transition p-2 rounded-xl">
                  <Settings size={20} />
                </button>
              </div>
            </div>

            {/* STATS */}
            <div className="flex justify-center md:justify-start gap-8 md:gap-12 mb-6">

              <div>
                <h3 className="text-2xl font-bold">25</h3>
                <p className="text-gray-400 text-sm">Posts</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">1.2K</h3>
                <p className="text-gray-400 text-sm">Followers</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">350</h3>
                <p className="text-gray-400 text-sm">Following</p>
              </div>
            </div>

            {/* BIO */}
            <div className="space-y-2 max-w-md mx-auto md:mx-0">
              <p className="font-semibold text-lg">
                Rahul Sharma 👨‍💻
              </p>

              <p className="text-gray-300">
                Full Stack Web Developer | React Developer
              </p>

              <p className="text-gray-400">
                Building modern & responsive web experiences 🚀
              </p>

              <a
                href="/"
                className="text-blue-400 hover:text-blue-300"
              >
                www.friendo.com
              </a>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">

              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-5 py-2 rounded-xl">
                <UserPlus size={18} />
                Follow
              </button>

              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-5 py-2 rounded-xl">
                <MessageCircle size={18} />
                Message
              </button>
            </div>
          </div>
        </div>

        {/* HIGHLIGHTS */}
        <div className="flex gap-6 overflow-x-auto mt-14 pb-4">

          {highlights.map((item, index) => (
            <div key={index} className="text-center min-w-[90px]">

              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-[2px] rounded-full">
                <div className="w-20 h-20 rounded-full bg-[#1e293b] flex items-center justify-center text-sm font-semibold">
                  {item[0]}
                </div>
              </div>

              <p className="text-sm mt-3 text-gray-300">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* TABS */}
        <div className="border-t border-white/10 mt-10">

          <div className="flex justify-center gap-10 md:gap-16 text-sm font-medium">

            <button className="flex items-center gap-2 py-5 border-t-2 border-white">
              <Grid3X3 size={18} />
              POSTS
            </button>

            <button className="flex items-center gap-2 py-5 text-gray-500 hover:text-white transition">
              <Video size={18} />
              REELS
            </button>

            <button className="flex items-center gap-2 py-5 text-gray-500 hover:text-white transition">
              <Bookmark size={18} />
              SAVED
            </button>
          </div>
        </div>

        {/* POSTS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">

          {posts.map((post, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >

              <img
                src={post}
                alt="post"
                className="w-full h-[220px] md:h-[320px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                <div className="flex gap-6 text-white font-semibold">
                  <span>❤️ 420</span>
                  <span>💬 32</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Profile;