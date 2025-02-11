import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">cloudenotte text</div>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li> {/* ✅ Fixed Home Link */}
          <li><Link to="#" className="hover:text-blue-500">Contact</Link></li>
          <li><Link to="#" className="hover:text-blue-500">About Us</Link></li>
          <li><Link to="/products" className="hover:text-blue-500">Products</Link></li> {/* ✅ Updated Link */}
        </ul>
        <div className="space-x-4">
          <Link to="/login" className="bg-blue-500 no-underline border-none text-white px-4 py-2 rounded hover:bg-blue-600">
            Sign In
          </Link>
          <Link to="/register" className="bg-green-500 no-underline text-white px-4 py-2 rounded hover:bg-green-600">
            Join Us
          </Link>
        </div>
      </nav>

      {/*my memo*/}
      <div className="flex flex-col items-center justify-center h-[80vh] text-center px-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to MyWebsite</h1>
        <h2 className="text-2xlfont-bold text-gray-600 mt-2">Your go-to place for amazing products and services.</h2>
      <p>
<h3 className="text-lg">Subject:Expression of Interest in Contributing to <span className="text-blue-400">Cloudnotte's</span>  Vision</h3> 

Dear Employer,  

I hope this memo finds you well. I am writing to formally express my strong interest in contributing to the vision of **Cloudnotte**. I am deeply inspired by the company’s mission and would love the opportunity to be part of the team, bringing my skills and expertise to help achieve its goals.  

As a front-end developer with a strong background in 
**React.js, Next.js, and Tailwind CSS**, I have honed my ability to build user-friendly, responsive, and scalable web applications. My expertise lies in:  

 **React.js & Next.js: Developing modern, high-performance, and interactive applications with efficient routing and server-side rendering.  
 **Tailwind CSS: Crafting clean and responsive UI designs with speed and precision.  
 **Component-Based Architecture: Building reusable and optimized UI components for seamless scalability.  
 **Performance Optimization: Enhancing application performance by implementing best practices such as lazy loading, code splitting, and optimized rendering.  

I am eager to bring these skills to <span className="text-blue-400">Cloudnotte</span> and contribute to the development of innovative solutions. If given the opportunity, I am committed to consistently delivering high-quality work, collaborating effectively with the team, and playing an active role in realizing the company's vision.  

I would appreciate the chance to discuss this further and explore how my expertise aligns with<span className="text-blue-400">Cloudnotte's</span> needs. Thank you for considering my request. I look forward to your response.  

Best regards,  
<h1>samuel Asime</h1>

      </p>
      </div>
    </div>
  );
};

export default Home;
