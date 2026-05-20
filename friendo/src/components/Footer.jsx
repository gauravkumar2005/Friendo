import React from "react";

import {
  Instagram,
  Facebook,
  Twitter,
  Github,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300 border-t border-white/10 mt-10">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* LOGO & ABOUT */}
          <div>

            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Friendo
            </h2>

            <p className="mt-4 text-sm text-gray-400 max-w-sm leading-6">
              Friendo is a modern social media platform where
              people connect, share memories, and build amazing
              friendships online.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <a
                  href="/"
                  className="hover:text-pink-400 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/profile"
                  className="hover:text-pink-400 transition"
                >
                  Profile
                </a>
              </li>

              <li>
                <a
                  href="/message"
                  className="hover:text-pink-400 transition"
                >
                  Messages
                </a>
              </li>

              <li>
                <a
                  href="/help"
                  className="hover:text-pink-400 transition"
                >
                  Help
                </a>
              </li>

            </ul>
          </div>

          {/* SOCIAL LINKS */}
          <div>

            <h3 className="text-white font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <button className="p-3 bg-white/5 hover:bg-pink-500 transition rounded-xl">
                <Instagram size={20} />
              </button>

              <button className="p-3 bg-white/5 hover:bg-blue-500 transition rounded-xl">
                <Facebook size={20} />
              </button>

              <button className="p-3 bg-white/5 hover:bg-sky-500 transition rounded-xl">
                <Twitter size={20} />
              </button>

              <button className="p-3 bg-white/5 hover:bg-gray-700 transition rounded-xl">
                <Github size={20} />
              </button>

            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

          <p>
            © 2026 Friendo. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <a
              href="#"
              className="hover:text-pink-400 transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-pink-400 transition"
            >
              Terms
            </a>

            <a
              href="#"
              className="hover:text-pink-400 transition"
            >
              Contact
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;