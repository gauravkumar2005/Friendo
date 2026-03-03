import React from "react";

function Profile() {
  return (
    <div className="min-h-screen bg-gray-200">

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-20">

          {/* Profile Image */}
          <div className="flex justify-center md:block mb-6 md:mb-0">
            <div className="w-40 h-40 rounded-full bg-white"></div>
          </div>

          {/* Profile Info */}
          <div className="flex-1">

            {/* Username + Button */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <h2 className="text-2xl font-light">rahulsharma</h2>
              <button className="border px-5 py-1 rounded-md text-sm font-semibold hover:bg-gray-100">
                Edit Profile
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mb-6 text-sm">
              <p><span className="font-semibold">25</span> posts</p>
              <p><span className="font-semibold">1,200</span> followers</p>
              <p><span className="font-semibold">350</span> following</p>
            </div>

            {/* Bio */}
            <div className="text-sm">
              <p className="font-semibold">Rahul Sharma</p>
              <p>Web Developer</p>
              <p>Building Friendo 🚀</p>
              <p className="text-blue-600">www.friendo.com</p>
            </div>

          </div>
        </div>

        {/* Highlights Section */}
        <div className="flex gap-6 mt-10 mb-10">
          {["Travel", "Projects", "Friends", "Life"].map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-20 h-20 rounded-full border flex items-center justify-center text-sm">
                {item[0]}
              </div>
              <p className="text-xs mt-2">{item}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="border-t flex justify-center gap-16 text-sm font-semibold tracking-wide mb-6">
          <span className="py-3 border-t-2 border-black cursor-pointer">
            POSTS
          </span>
          <span className="py-3 text-gray-500 cursor-pointer">
            REELS
          </span>
          <span className="py-3 text-gray-500 cursor-pointer">
            TAGGED
          </span>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-3 gap-1">
          <img
            src="https://source.unsplash.com/400x400/?technology"
            alt="post"
            className="w-full aspect-square object-cover"
          />
          <img
            src="https://source.unsplash.com/400x400/?sunset"
            alt="post"
            className="w-full aspect-square object-cover"
          />
          <img
            src="https://source.unsplash.com/400x400/?coffee"
            alt="post"
            className="w-full aspect-square object-cover"
          />
          <img
            src="https://source.unsplash.com/400x400/?coding"
            alt="post"
            className="w-full aspect-square object-cover"
          />
          <img
            src="https://source.unsplash.com/400x400/?mountain"
            alt="post"
            className="w-full aspect-square object-cover"
          />
          <img
            src="https://source.unsplash.com/400x400/?travel"
            alt="post"
            className="w-full aspect-square object-cover"
          />
        </div>

      </div>

    </div>
  );
}

export default Profile;