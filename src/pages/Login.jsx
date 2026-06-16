function Login () {
    return(
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 px-4">
      
      <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl rounded-3xl p-8 w-full max-w-md text-white">
        
        {/* Logo */}
        <h1 className="text-3xl font-bold text-center mb-2">
          Friendo
        </h1>
        <p className="text-center text-sm text-gray-200 mb-8">
          Connect. Share. Enjoy.
        </p>

        {/* Form */}
        <form className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-white/30 text-white placeholder-gray-200 border border-white/40 focus:outline-none focus:ring-2 focus:ring-white transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl bg-white/30 text-white placeholder-gray-200 border border-white/40 focus:outline-none focus:ring-2 focus:ring-white transition"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between text-sm text-gray-200">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-white" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-gray-200 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 h-px bg-white/40"></div>
          <span className="px-3 text-sm text-gray-200">OR</span>
          <div className="flex-1 h-px bg-white/40"></div>
        </div>

        {/* Social Login */}
        <button className="w-full py-3 rounded-xl border border-white/40 hover:bg-white/20 transition mb-3">
          Continue with Google
        </button>

        {/* Sign Up */}
        <p className="text-center text-sm text-gray-200 mt-4">
          Don't have an account?{" "}
          <a href="#" className="font-semibold underline">
            Sign Up
          </a>
        </p>

      </div>
    </div>
    );
}

export default Login;