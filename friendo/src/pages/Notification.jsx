import React from "react";

import {
  Heart,
  MessageCircle,
  UserPlus,
} from "lucide-react";

function Notifications() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex justify-center p-6 text-white">

      <div className="w-full max-w-2xl">

        {/* HEADER */}
        <div className="mb-6">

          <h1 className="text-3xl font-bold">
            Notifications
          </h1>

          <p className="text-gray-400 mt-2">
            See your 
          </p>

        </div>

        {/* NOTIFICATION BOX */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">

          {/* NOTIFICATION 1 */}
          <div className="flex items-center justify-between p-5 border-b border-white/10 hover:bg-white/5 transition">

            <div className="flex items-center gap-4">

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43c"
                alt="profile"
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>

                <p className="text-sm">
                  <span className="font-semibold">
                    rahulsharma
                  </span>{" "}
                  liked your post
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  2 hours ago
                </p>

              </div>
            </div>

            <Heart
              size={20}
              className="text-pink-500"
            />

          </div>

          {/* NOTIFICATION 2 */}
          <div className="flex items-center justify-between p-5 border-b border-white/10 hover:bg-white/5 transition">

            <div className="flex items-center gap-4">

              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="profile"
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>

                <p className="text-sm">
                  <span className="font-semibold">
                    ananyapatel
                  </span>{" "}
                  commented on your photo
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  5 hours ago
                </p>

              </div>
            </div>

            <MessageCircle
              size={20}
              className="text-blue-400"
            />

          </div>

          {/* NOTIFICATION 3 */}
          <div className="flex items-center justify-between p-5 hover:bg-white/5 transition">

            <div className="flex items-center gap-4">

              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
                alt="profile"
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>

                <p className="text-sm">
                  <span className="font-semibold">
                    karanmehta
                  </span>{" "}
                  started following you
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  1 day ago
                </p>

              </div>
            </div>

            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-sm hover:opacity-90 transition">

              Follow Back

            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Notifications;