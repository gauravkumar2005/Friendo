import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-300 flex">

      {/* LEFT SIDEBAR (Instagram Style) */}
      <div className="w-64 border-r p-8 hidden md:block">
        <h1 className="text-2xl font-bold mb-10">Friendo</h1>

        <ul className="space-y-6 text-gray-800">
          <li className="font-semibold cursor-pointer">Home</li>
          <li className="cursor-pointer hover:text-gray-500">Search</li>
          <li className="cursor-pointer hover:text-gray-500">Explore</li>
          <li className="cursor-pointer hover:text-gray-500">Messages</li>
          <li className="cursor-pointer hover:text-gray-500">Notifications</li>
          <li className="cursor-pointer hover:text-gray-500">Profile</li>
        </ul>
      </div>

      {/* MAIN FEED */}
      <div className="flex-1 max-w-xl mx-auto p-8">

        {/* STORIES */}
        <div className="flex gap-5 border rounded-lg p-4 mb-8 overflow-x-auto">
          {["Rahul", "Ananya", "Karan", "Priya", "Amit"].map((user, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-1">
                <div className="bg-white w-full h-full rounded-full flex items-center justify-center text-sm font-semibold">
                  {user[0]}
                </div>
              </div>
              <p className="text-xs mt-2">{user}</p>
            </div>
          ))}
        </div>

        {/* POST 1 */}
        <div className="border rounded-lg mb-10">

          {/* Post Header */}
          <div className="flex items-center gap-3 p-4">
            <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center font-bold">
              R
            </div>
            <h3 className="font-semibold text-sm">rahulsharma</h3>
          </div>

          {/* Post Image */}
          <img
            src="https://source.unsplash.com/600x600/?nature"
            alt="post"
            className="w-full"
          />

          {/* Post Actions */}
          <div className="p-4">
            <div className="flex gap-6 mb-2 text-sm">
              <span className="cursor-pointer">Like</span>
              <span className="cursor-pointer">Comment</span>
              <span className="cursor-pointer">Share</span>
            </div>

            <p className="text-sm font-semibold">120 likes</p>
            <p className="text-sm mt-1">
              <span className="font-semibold">rahulsharma</span> Enjoying a beautiful day 🌞 #nature
            </p>
            <p className="text-xs text-gray-500 mt-1">2 HOURS AGO</p>
          </div>
        </div>

        {/* POST 2 */}
        <div className="border rounded-lg">

          <div className="flex items-center gap-3 p-4">
            <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center font-bold">
              A
            </div>
            <h3 className="font-semibold text-sm">ananyapatel</h3>
          </div>

          <img
            src="https://source.unsplash.com/600x600/?coffee"
            alt="post"
            className="w-full"
          />

          <div className="p-4">
            <div className="flex gap-6 mb-2 text-sm">
              <span>Like</span>
              <span>Comment</span>
              <span>Share</span>
            </div>

            <p className="text-sm font-semibold">90 likes</p>
            <p className="text-sm mt-1">
              <span className="font-semibold">ananyapatel</span> Morning coffee ☕ and good vibes ✨
            </p>
            <p className="text-xs text-gray-500 mt-1">5 HOURS AGO</p>
          </div>
        </div>

      </div>

      {/* RIGHT SIDEBAR (Instagram Suggestions Style) */}
      <div className="w-80 p-8 hidden lg:block">

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div>
            <h4 className="font-semibold text-sm">rahulsharma</h4>
            <p className="text-xs text-gray-500">Rahul Sharma</p>
          </div>
        </div>

        <h4 className="text-sm font-semibold text-gray-500 mb-4">
          Suggested for you
        </h4>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300"></div>
              <span className="text-sm">vikram</span>
            </div>
            <button className="text-blue-500 text-sm font-semibold">
              Follow
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300"></div>
              <span className="text-sm">sneha</span>
            </div>
            <button className="text-blue-500 text-sm font-semibold">
              Follow
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;