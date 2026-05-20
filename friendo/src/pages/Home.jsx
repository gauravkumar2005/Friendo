import React from "react";
import {
  Home,
  Search,
  Compass,
  MessageCircle,
  Heart,
  User,
  MoreHorizontal,
  Send,
  Bookmark,
} from "lucide-react";

function HomePage() {
  const stories = ["Rahul", "Ananya", "Karan", "Priya", "Amit"];
  const posts = [
    {
      username: "rahulsharma",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      likes: "1,240",
      caption: "Enjoying a beautiful sunset 🌅✨",
      time: "2 HOURS AGO",
    },
    {
      username: "ananyapatel",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      likes: "980",
      caption: "Coffee + Chill vibes ☕🤍",
      time: "5 HOURS AGO",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex">

      {/* MAIN FEED */}
      <main className="flex-1 max-w-2xl mx-auto px-4 md:px-8 py-8">

        {/* STORIES */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-5 flex gap-6 overflow-x-auto mb-8 shadow-lg">
          {stories.map((user, i) => (
            <div key={i} className="text-center min-w-[70px]">
              <div className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400 p-[3px] rounded-full">
                <div className="bg-[#0f172a] rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold">
                  {user[0]}
                </div>
              </div>
              <p className="text-xs mt-2 text-gray-300">{user}</p>
            </div>
          ))}
        </div>

        {/* POSTS */}
        <div className="space-y-10">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >

              {/* HEADER */}
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-[2px] rounded-full">
                    <div className="w-11 h-11 rounded-full bg-[#1e293b] flex items-center justify-center font-bold">
                      {post.username[0].toUpperCase()}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-sm">
                      {post.username}
                    </h3>
                    <p className="text-xs text-gray-400">India</p>
                  </div>
                </div>

                <MoreHorizontal className="cursor-pointer" size={20} />
              </div>

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt="post"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* ACTIONS */}
              <div className="p-5">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-5">
                    <Heart className="cursor-pointer hover:text-red-500 transition" />
                    <MessageCircle className="cursor-pointer hover:text-blue-400 transition" />
                    <Send className="cursor-pointer hover:text-green-400 transition" />
                  </div>

                  <Bookmark className="cursor-pointer hover:text-yellow-400 transition" />
                </div>

                <p className="font-semibold text-sm mb-2">
                  {post.likes} likes
                </p>

                <p className="text-sm text-gray-200">
                  <span className="font-semibold mr-2">
                    {post.username}
                  </span>
                  {post.caption}
                </p>

                <p className="text-xs text-gray-500 mt-3">
                  {post.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="w-80 hidden xl:block p-8">

        {/* PROFILE CARD */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-5 shadow-xl mb-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-[2px]">
              <div className="bg-[#1e293b] rounded-full w-full h-full"></div>
            </div>

            <div>
              <h3 className="font-semibold">rahulsharma</h3>
              <p className="text-sm text-gray-400">Rahul</p>
            </div>
          </div>
        </div>

        {/* SUGGESTIONS */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-5 shadow-xl">
          <div className="flex justify-between mb-5">
            <h4 className="font-semibold text-gray-300">
              Suggested for you
            </h4>

            <button className="text-sm text-blue-400 hover:text-blue-300">
              See All
            </button>
          </div>

          <div className="space-y-5">
            {["vikram", "sneha", "rohit"].map((user, i) => (
              <div
                key={i}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-600"></div>

                  <div>
                    <p className="text-sm font-medium">{user}</p>
                    <p className="text-xs text-gray-400">
                      Suggested for you
                    </p>
                  </div>
                </div>

                <button className="text-sm font-semibold text-blue-400 hover:text-blue-300">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default HomePage;