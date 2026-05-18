import React from "react";

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-700 px-4">

      {/* CARD */}
      <div className="bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-8 w-full max-w-md text-white">

        {/* LOGO */}
        <h1 className="text-4xl font-extrabold text-center mb-2 tracking-wide">
          Friendo
        </h1>

        <p className="text-center text-sm text-gray-200 mb-8">
          Create your account and start connecting 🚀
        </p>

        {/* FORM */}
        <form className="space-y-5">

          {/* FULL NAME */}
          <div>
            <label className="block text-sm mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
            />
          </div>

          {/* USERNAME */}
          <div>
            <label className="block text-sm mb-2">
              Username
            </label>

            <input
              type="text"
              placeholder="Choose a username"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div>
            <label className="block text-sm mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
            />
          </div>

          {/* TERMS */}
          <div className="flex items-center gap-2 text-sm text-gray-200">
            <input
              type="checkbox"
              className="accent-pink-500"
            />

            <p>
              I agree to the{" "}
              <span className="underline cursor-pointer">
                Terms & Conditions
              </span>
            </p>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white text-purple-700 font-semibold hover:bg-gray-200 transition duration-300 shadow-lg"
          >
            Create Account
          </button>
        </form>

        {/* DIVIDER */}
        <div className="my-6 flex items-center">
          <div className="flex-1 h-px bg-white/40"></div>

          <span className="px-3 text-sm text-gray-200">
            OR
          </span>

          <div className="flex-1 h-px bg-white/40"></div>
        </div>

        {/* GOOGLE BUTTON */}
        <button className="w-full py-3 rounded-xl border border-white/40 hover:bg-white/20 transition mb-4">
          Continue with Google
        </button>

        {/* LOGIN LINK */}
        <p className="text-center text-sm text-gray-200">
          Already have an account?{" "}
          <a
            href="#"
            className="font-semibold underline hover:text-white"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;