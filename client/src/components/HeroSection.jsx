import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-pink-50 dark:from-gray-900 dark:to-gray-800 py-20 px-6 sm:px-10 md:px-20">
      <div className="w-full max-h-screen max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white leading-tight mb-6">
            Discover Inspiring <span className="text-indigo-600 dark:text-indigo-400">Stories</span> <br />
            From Talented Minds
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            Your go-to platform for tech blogs, coding insights, and developer journeys. Start reading or publish your own!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/blogs"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition duration-300"
            >
              Explore Blogs
            </Link>
            <Link
              to="/create-post"
              className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold rounded-xl transition duration-300 flex items-center gap-2"
            >
              Write Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 rounded-xl">
          <img
            src="https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg"
            alt="Blogging illustration"
            className="w-full max-w-md mx-auto animate-fade-in"
          />
        </div>
      </div>
    </section>
  );
}
