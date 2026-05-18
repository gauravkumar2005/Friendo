import React from "react";
import {
  Search,
  SendHorizonal,
  Phone,
  Video,
  MoreVertical,
  Image,
  Smile,
} from "lucide-react";

function Messages() {
  const chats = [
    {
      name: "Rahul Sharma",
      message: "Hey! How are you?",
      color: "from-blue-500 to-cyan-500",
      active: true,
    },
    {
      name: "Ananya Patel",
      message: "Let's meet tomorrow 🚀",
      color: "from-pink-500 to-purple-500",
    },
    {
      name: "Karan Mehta",
      message: "Project completed ✅",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Priya Singh",
      message: "Check your email ✨",
      color: "from-orange-500 to-red-500",
    },
  ];

  const messages = [
    {
      text: "Hey! How are you?",
      sender: "other",
    },
    {
      text: "I'm doing great 😊",
      sender: "me",
    },
    {
      text: "Let's work on Friendo today 🚀",
      sender: "other",
    },
    {
      text: "Sure! I already improved the UI.",
      sender: "me",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex overflow-hidden">

      {/* SIDEBAR */}
      <div className="w-full md:w-96 bg-[#111827] border-r border-white/10 flex flex-col">

        {/* HEADER */}
        <div className="p-6 border-b border-white/10">

          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold">
              Messages
            </h2>

            <button className="p-2 rounded-xl hover:bg-white/10 transition">
              <MoreVertical size={20} />
            </button>
          </div>

          {/* SEARCH */}
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-3.5 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search chats..."
              className="w-full bg-white/10 border border-white/10 rounded-2xl py-3 pl-11 pr-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* CHAT LIST */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">

          {chats.map((chat, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                chat.active
                  ? "bg-blue-600/20 border border-blue-500/30"
                  : "hover:bg-white/5"
              }`}
            >

              {/* AVATAR */}
              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-r ${chat.color} flex items-center justify-center font-bold text-lg shadow-lg`}
              >
                {chat.name[0]}
              </div>

              {/* USER INFO */}
              <div className="flex-1">
                <h3 className="font-semibold">
                  {chat.name}
                </h3>

                <p className="text-sm text-gray-400 truncate">
                  {chat.message}
                </p>
              </div>

              {/* ONLINE DOT */}
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="hidden md:flex flex-1 flex-col">

        {/* CHAT HEADER */}
        <div className="bg-[#111827] border-b border-white/10 p-5 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center font-bold">
                R
              </div>

              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#111827]"></div>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Rahul Sharma
              </h3>

              <p className="text-sm text-green-400">
                Online
              </p>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">

            <button className="p-3 rounded-xl hover:bg-white/10 transition">
              <Phone size={20} />
            </button>

            <button className="p-3 rounded-xl hover:bg-white/10 transition">
              <Video size={20} />
            </button>

            <button className="p-3 rounded-xl hover:bg-white/10 transition">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>

        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-[#0f172a]">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "me"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-sm px-5 py-3 rounded-3xl text-sm shadow-lg ${
                  msg.sender === "me"
                    ? "bg-blue-600 text-white rounded-br-md"
                    : "bg-white/10 text-gray-200 rounded-bl-md"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* MESSAGE INPUT */}
        <div className="bg-[#111827] border-t border-white/10 p-5">

          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">

            <button className="text-gray-400 hover:text-white transition">
              <Smile size={22} />
            </button>

            <button className="text-gray-400 hover:text-white transition">
              <Image size={22} />
            </button>

            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"
            />

            <button className="bg-blue-600 hover:bg-blue-700 transition p-3 rounded-xl shadow-lg">
              <SendHorizonal size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;