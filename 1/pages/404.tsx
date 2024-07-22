import React from "react";
import Link from "next/link";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Oops! Page not found.</p>
      <Link href="/" className="text-blue-500 hover:text-blue-600 underline">
        Go back to homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
