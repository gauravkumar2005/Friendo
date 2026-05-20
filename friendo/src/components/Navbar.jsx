import React from "react";

import {
  Home,
  User,
  MessageCircle,
  Bell,
  CircleHelp,
  Users,
  LogOut,
} from "lucide-react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#111827] border-b border-white/10 text-white px-6 py-4 flex items-center justify-between shadow-lg sticky top-0 z-50">

      {/* LOGO */}
      <Link to="/">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Friendo
        </h1>
      </Link>

      {/* NAV LINKS */}
      <div className="hidden md:flex items-center gap-8">

        <Link
          to="/"
          className="flex items-center gap-2 hover:text-pink-400 transition"
        >
          <Home size={20} />
          Home
        </Link>

        <Link
          to="/profile"
          className="flex items-center gap-2 hover:text-pink-400 transition"
        >
          <User size={20} />
          Profile
        </Link>

        <Link
          to="/message"
          className="flex items-center gap-2 hover:text-pink-400 transition"
        >
          <MessageCircle size={20} />
          Messages
        </Link>

        <Link
          to="/following"
          className="flex items-center gap-2 hover:text-pink-400 transition"
        >
          <Users size={20} />
          Following
        </Link>

        <Link
          to="/notification"
          className="flex items-center gap-2 hover:text-pink-400 transition"
        >
          <Bell size={20} />
          Notifications
        </Link>

        <Link
          to="/help"
          className="flex items-center gap-2 hover:text-pink-400 transition"
        >
          <CircleHelp size={20} />
          Help
        </Link>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* LOGIN BUTTON */}
        <Link to="/login">
          <button className="hidden md:block px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
            Login
          </button>
        </Link>

        {/* SIGNUP BUTTON */}
        <Link to="/signup">
          <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition shadow-lg">
            Sign Up
          </button>
        </Link>

        {/* LOGOUT ICON */}
        <button className="p-2 rounded-xl hover:bg-white/10 transition">
          <LogOut size={20} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;