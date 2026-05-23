import React from "react";

import {
  Search,
  Lock,
  Camera,
  ShieldAlert,
  Trash2,
  Mail,
} from "lucide-react";

function Help() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#111827] text-white px-4 py-10 flex justify-center">

      <div className="w-full max-w-4xl">

        {/* HEADER */}
        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold">
            Friendo Help Center
          </h1>

          <p className="text-gray-400 mt-3">
            Find answers to common questions and get support
          </p>

        </div>

        {/* SEARCH BAR */}
        <div className="relative mb-8">

          <Search
            size={20}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search for help..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

        </div>

        {/* FAQ SECTION */}
        <div className="space-y-5">

          {/* FAQ 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">

            <div className="flex items-center gap-4 mb-3">

              <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
                <Lock size={22} className="text-pink-400" />
              </div>

              <h2 className="text-xl font-semibold">
                How do I reset my password?
              </h2>

            </div>

            <p className="text-gray-400 leading-7">
              Go to the login page and click on
              "Forgot Password". Follow the steps
              sent to your email.
            </p>

          </div>

          {/* FAQ 2 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">

            <div className="flex items-center gap-4 mb-3">

              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Camera size={22} className="text-blue-400" />
              </div>

              <h2 className="text-xl font-semibold">
                How can I change my profile picture?
              </h2>

            </div>

            <p className="text-gray-400 leading-7">
              Visit your profile page and click on
              your profile image to upload a new photo.
            </p>

          </div>

          {/* FAQ 3 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">

            <div className="flex items-center gap-4 mb-3">

              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                <ShieldAlert
                  size={22}
                  className="text-yellow-400"
                />
              </div>

              <h2 className="text-xl font-semibold">
                How do I report a user?
              </h2>

            </div>

            <p className="text-gray-400 leading-7">
              Open the user's profile, click the options
              menu and select "Report User".
            </p>

          </div>

          {/* FAQ 4 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">

            <div className="flex items-center gap-4 mb-3">

              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                <Trash2 size={22} className="text-red-400" />
              </div>

              <h2 className="text-xl font-semibold">
                How can I delete my account?
              </h2>

            </div>

            <p className="text-gray-400 leading-7">
              Go to Settings → Privacy → Delete Account.
              This action is permanent and cannot be undone.
            </p>

          </div>

        </div>

        {/* CONTACT SUPPORT */}
        <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mb-5">

            <Mail size={28} />

          </div>

          <h2 className="text-2xl font-bold mb-3">
            Still Need Help?
          </h2>

          <p className="text-gray-400 mb-6">
            Our support team is always ready to help you.
          </p>

          <button className="px-8 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition shadow-lg font-medium">

            Contact Support

          </button>

        </div>

      </div>
    </div>
  );
}

export default Help;