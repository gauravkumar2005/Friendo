import React from "react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* LOGO & ABOUT */}
          <div>

            <h1 className="text-3xl font-bold text-white">
              Friendo
            </h1>

            <p className="mt-4 text-sm text-gray-400 leading-6">
              Friendo is a modern social media platform where
              people connect, share memories and make friends.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h2 className="text-white text-lg font-semibold mb-4">
              
            </h2>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  to="/"
                  className="hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/profile"
                  className="hover:text-white transition"
                >
                  Profile
                </Link>
              </li>

              <li>
                <Link
                  to="/message"
                  className="hover:text-white transition"
                >
                  Messages
                </Link>
              </li>

              <li>
                <Link
                  to="/following"
                  className="hover:text-white transition"
                >
                  Following
                </Link>
              </li>

              <li>
                <Link
                  to="/help"
                  className="hover:text-white transition"
                >
                  Help
                </Link>
              </li>

            </ul>
          </div>

          {/* CONTACT */}
          <div>

            <h2 className="text-white text-lg font-semibold mb-4">
              Contact
            </h2>

            <p className="text-sm text-gray-400 mb-3">
              Email: friendo@gmail.com
            </p>

            <p className="text-sm text-gray-400 mb-3">
              Phone: +91 9097710004
            </p>

            <p className="text-sm text-gray-400">
              India
            </p>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

          <p>
            © 2026 Friendo. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <Link
              to="/privacy"
              className="hover:text-white transition"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="hover:text-white transition"
            >
              Terms
            </Link>

            <Link
              to="/contact"
              className="hover:text-white transition"
            >
              Contact
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;