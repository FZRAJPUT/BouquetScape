import React from "react";
import { Link } from "react-router-dom"; // If using React Router

const NotFoundPage = () => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-pink-50 px-4">
      <div className="text-center">
        {/* Big 404 */}
        <h1 className="text-[8rem] font-extrabold text-pink-500 sm:text-[10rem]">
          404
        </h1>

        {/* Message */}
        <p className="mt-4 text-xl sm:text-2xl font-semibold text-pink-400">
          Oops! Page Not Found
        </p>
        <p className="mt-2 text-gray-500 max-w-md mx-auto">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>

        {/* Button to go home */}
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-pink-500 hover:bg-pink-400 text-white font-semibold rounded-lg shadow-lg transition duration-300"
        >
          Go Back Home
        </Link>
      </div>

      {/* Optional decorative background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-pink-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-40%] right-[-40%] w-[150%] h-[150%] bg-pink-200 rounded-full opacity-30 animate-pulse"></div>
      </div>
    </div>
  );
};

export default NotFoundPage;
