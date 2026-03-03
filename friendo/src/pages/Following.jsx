import React from "react";

function Following() {
  return (
    <div className="min-h-screen bg-gray-300 flex justify-center p-6">
      
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg">

        {/* Header */}
        <div className="p-6 border-b text-center">
          <h2 className="text-2xl font-bold">Following</h2>
        </div>

        {/* Following List */}
        <div className="divide-y">

          {/* User 1 */}
          <div className="flex items-center justify-between p-5">
            <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/50"
                alt="profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">rahulsharma</h3>
                <p className="text-sm text-gray-500">Rahul Sharma</p>
              </div>
            </div>
            <button className="px-4 py-1 border rounded-lg text-sm hover:bg-gray-100">
              Following
            </button>
          </div>

          {/* User 2 */}
          <div className="flex items-center justify-between p-5">
            <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/50"
                alt="profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">ananyapatel</h3>
                <p className="text-sm text-gray-500">Ananya Patel</p>
              </div>
            </div>
            <button className="px-4 py-1 border rounded-lg text-sm hover:bg-gray-100">
              Following
            </button>
          </div>

          {/* User 3 */}
          <div className="flex items-center justify-between p-5">
            <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/50"
                alt="profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">karanmehta</h3>
                <p className="text-sm text-gray-500">Karan Mehta</p>
              </div>
            </div>
            <button className="px-4 py-1 border rounded-lg text-sm hover:bg-gray-100">
              Following
            </button>
          </div>

          {/* User 4 */}
          <div className="flex items-center justify-between p-5">
            <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/50"
                alt="profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">sneha.verma</h3>
                <p className="text-sm text-gray-500">Sneha Verma</p>
              </div>
            </div>
            <button className="px-4 py-1 border rounded-lg text-sm hover:bg-gray-100">
              Following
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Following;