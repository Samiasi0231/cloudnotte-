import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for mobile menu

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Cloudnotte</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="#" className="hover:text-blue-500">Contact</Link></li>
          <li><Link to="#" className="hover:text-blue-500">About Us</Link></li>
          <li><Link to="/products" className="hover:text-blue-500">Products</Link></li>
        </ul>

        {/* Authentication Buttons (Hidden on Small Screens) */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Sign In
          </Link>
          <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Join Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4 flex flex-col items-center space-y-4">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="#" className="hover:text-blue-500">Contact</Link>
          <Link to="#" className="hover:text-blue-500">About Us</Link>
          <Link to="/products" className="hover:text-blue-500">Products</Link>
          <div className="flex flex-col space-y-2">
            <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Sign In
            </Link>
            <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Join Us
            </Link>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-[80vh] text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Welcome to Cloudnotte</h1>
        <h2 className="text-lg md:text-2xl text-gray-600 mt-2">
          Your go-to place for amazing products and services.
        </h2>
        <div className="mt-6 space-x-4">
          <Link to="/register" className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-600">
            Join Now
          </Link>
          <Link to="/products" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600">
            Explore Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
