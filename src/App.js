import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/authPage/Register";
import Login from "./Components/authPage/Login";
import Home from "./Components/HomePage/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
