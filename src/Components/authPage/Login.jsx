import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user { id,name ,email
      }
    }
  }
`;

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({ variables: formData });

    if (response.data) {
      localStorage.setItem("token", response.data.loginUser.token);
      navigate("/"); 
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        {error && <p className="text-red-500">{error.message}</p>}
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
          {loading ? "Logging in..." : "Login"}
        </button>
        {data && <p className="text-green-500 mt-2">Login Successful!</p>}
        <p className="text-sm mt-3">
  Already have an account? <a href="/login" className="text-blue-500">Login</a>
</p>
      </form>
    </div>
    
  );
};

export default Login;
