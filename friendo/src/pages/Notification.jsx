import React from "react";

function Notifications() {
  return (
    <div className="min-h-screen bg-gray-300 flex justify-center p-6">

      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg">

        {/* Header */}
        <div className="p-6 border-b text-center">
          <h2 className="text-2xl font-bold">Notifications</h2>
        </div>

        {/* Notification List */}
        <div className="divide-y">

          {/* Notification 1 */}
          <div className="flex items-center justify-between p-5">
            <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/50"
                alt="profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm">
                  <span className="font-semibold">rahulsharma</span> liked your post.
                </p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
          </div>

          {/* Notification 2 */}
          <div className="flex items-center justify-between p-5">
            <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/50"
                alt="profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm">
                  <span className="font-semibold">ananyapatel</span> commented: "Nice work!"
                </p>
                <p className="text-xs text-gray-500">5 hours ago</p>
              </div>
            </div>
          </div>

          {/* Notification 3 */}
          <div className="flex items-center justify-between p-5">
            <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/50"
                alt="profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm">
                  <span className="font-semibold">karanmehta</span> started following you.
                </p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>

            <button className="px-4 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition">
              Follow Back
            </button>
          </div>

          {/* Notification 4 */}
          <div className="flex items-center justify-between p-5">
            <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/50"
                alt="profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm">
                  <span className="font-semibold">sneha.verma</span> mentioned you in a comment.
                </p>
                <p className="text-xs text-gray-500">2 days ago</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Notifications;