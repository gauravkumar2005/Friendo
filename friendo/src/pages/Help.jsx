import React from "react";

function Help() {
  return (
    <div className="min-h-screen bg-gray-400 flex justify-center p-6">

      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg">

        {/* Header */}
        <div className="p-8 border-b text-center">
          <h1 className="text-3xl font-bold">Friendo Help Center</h1>
          <p className="text-gray-500 mt-2">
            Find answers to common questions and get support.
          </p>
        </div>

        {/* Search Bar */}
        <div className="p-6">
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full border border-black rounded-xl p-3 focus:outline-none"
          />
        </div>

        {/* FAQ Section */}
        <div className="p-8 space-y-8">

          <div>
            <h3 className="font-semibold text-lg">
              How do I reset my password?
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Go to the login page and click on "Forgot Password".
              Follow the instructions sent to your email.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              How can I change my profile picture?
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Visit your profile page and click on your profile photo to upload a new one.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              How do I report a user?
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Open the user's profile, click the options menu, and select "Report".
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              How can I delete my account?
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Go to Settings → Privacy → Delete Account.
              Please note that this action is permanent.
            </p>
          </div>

        </div>

        {/* Contact Support */}
        <div className="p-6 border-t text-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
            Contact Support
          </button>
        </div>

      </div>

    </div>
  );
}

export default Help;