import React from "react";

function Messages() {
  return (
    <div className="min-h-screen bg-white flex">

      {/* LEFT CHAT LIST */}
      <div className="w-80 bg-gray-300 border-r hidden md:block">

        <div className="p-5 border-b">
          <h2 className="text-xl font-bold">Messages</h2>
        </div>

        {/* Chat Users */}
        <div className="p-4 space-y-4">

          <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
              R
            </div>
            <div>
              <h3 className="font-semibold">Rahul Sharma</h3>
              <p className="text-sm text-gray-500">Hey, how are you?</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">
              A
            </div>
            <div>
              <h3 className="font-semibold">Ananya Patel</h3>
              <p className="text-sm text-gray-500">Let’s meet tomorrow</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
              K
            </div>
            <div>
              <h3 className="font-semibold">Karan Mehta</h3>
              <p className="text-sm text-gray-500">Project completed ✅</p>
            </div>
          </div>

        </div>
      </div>


      {/* RIGHT CHAT AREA */}
      <div className="flex-1 flex flex-col">

        {/* Chat Header */}
        <div className="bg-white p-4 border-b flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
            R
          </div>
          <h3 className="font-semibold">Rahul Sharma</h3>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 space-y-4 overflow-y-auto">

          <div className="flex justify-start">
            <div className="bg-gray-200 px-4 py-2 rounded-2xl max-w-xs">
              Hey! How are you?
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl max-w-xs">
              I'm good 😊 What about you?
            </div>
          </div>

          <div className="flex justify-start">
            <div className="bg-gray-200 px-4 py-2 rounded-2xl max-w-xs">
              Let’s work on Friendo today 🚀
            </div>
          </div>

        </div>

        {/* Message Input */}
        <div className="bg-white p-4 border-t flex gap-3">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Send
          </button>
        </div>

      </div>

    </div>
  );
}

export default Messages;