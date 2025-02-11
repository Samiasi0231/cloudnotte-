import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom"; 

const REGISTER_USER = gql`
  mutation RegisterUser($name: String!, $email: String!, $password: String!) {
    registerUser(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

const Register = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ variables: formData });
      navigate("/login"); 
    } catch (err) {
      console.error("Registration Error:", err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        {error && <p className="text-red-500">{error.message}</p>}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
        {data && <p className="text-green-500 mt-2">User Registered Successfully!</p>}
        <p className="text-sm mt-3">
  Already have an account? <a href="/login" className="text-blue-500">Login</a>
</p>

      </form>
    </div>
  );
};

export default Register;
