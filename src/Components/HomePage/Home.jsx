
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for mobile menu

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">Cloudnotte Text</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="#" className="hover:text-blue-500">Contact</Link>
          <Link to="#" className="hover:text-blue-500">About Us</Link>
          <Link to="/products" className="hover:text-blue-500">Products</Link>
        </div>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="bg-blue-500 no-underline border-none text-white px-4 py-2 rounded hover:bg-blue-600">
            Sign In
          </Link>
          <Link to="/register" className="bg-green-500 no-underline text-white px-4 py-2 rounded hover:bg-green-600">
            Join Us
          </Link>
        </div>

        
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

    
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 flex flex-col space-y-3">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="#" className="hover:text-blue-500">Contact</Link>
          <Link to="#" className="hover:text-blue-500">About Us</Link>
          <Link to="/products" className="hover:text-blue-500">Products</Link>
          <Link to="/login" className="bg-blue-500 no-underline text-white px-4 py-2 rounded hover:bg-blue-600 text-center">
            Sign In
          </Link>
          <Link to="/register" className="bg-green-500 no-underline text-white px-4 py-2 rounded hover:bg-green-600 text-center">
            Join Us
          </Link>
        </div>
      )}

      
      <div className="flex flex-col items-center justify-center h-auto py-20 text-center px-6">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">Welcome to MyWebsite</h1>
        <h2 className="text-lg md:text-2xl font-semibold text-gray-600 mt-2">
          Your go-to place for amazing products and services.
        </h2>

        {/*my Memo  */}
        <div className="mt-6 max-w-2xl text-left">
          <h3 className="text-lg md:text-xl font-semibold">Subject: Expression of Interest in Contributing to 
            <span className="text-blue-400"> Cloudnotte's</span> Vision
          </h3>

          <p className="text-sm md:text-lg mt-4">
            Dear Employer,  
            <br /><br />
            I hope this memo finds you well. I am writing to formally express my strong interest in contributing to the vision of  
            <span className="text-blue-400"> Cloudnotte</span>. I am deeply inspired by the company’s mission and would love the opportunity to be part of the team, bringing my skills and expertise to help achieve its goals.  
          </p>

          <p className="text-sm md:text-lg mt-4">
            As a front-end developer with a strong background in <b>React.js, Next.js, and Tailwind CSS</b>, I have honed my ability to build user-friendly, responsive, and scalable web applications. My expertise lies in:  
          </p>

          <ul className="list-disc ml-5 mt-3 text-sm md:text-lg">
            <li><b>React.js & Next.js:</b> Developing modern, high-performance, and interactive applications.</li>
            <li><b>Tailwind CSS:</b> Crafting clean and responsive UI designs.</li>
            <li><b>Component-Based Architecture:</b> Building reusable and optimized UI components.</li>
            <li><b>Performance Optimization:</b> Enhancing application performance with best practices.</li>
          </ul>

          <p className="text-sm md:text-lg mt-4">
            I am eager to bring these skills to <span className="text-blue-400">Cloudnotte</span> and contribute to the development of innovative solutions. If given the opportunity, I am committed to consistently delivering high-quality work, collaborating effectively with the team, and playing an active role in realizing the company's vision.  
          </p>

          <p className="text-sm md:text-lg mt-4">
            I would appreciate the chance to discuss this further. Thank you for considering my request. I look forward to your response.  
          </p>

          <h3 className="text-lg md:text-xl font-semibold mt-6">Best regards,</h3>
          <h2 className="text-xl md:text-2xl font-bold">Samuel Asime</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
