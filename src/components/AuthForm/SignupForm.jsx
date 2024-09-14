import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";



export const SignupForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('User created successfully!');
      navigate("/login");
    } catch (error) {
      alert('Error signing up: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 w-96">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-4 w-96">
        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter your password here"
          required
        />
      </div>
      <button 
        type="submit"
        className="bg-red-500 text-white font-bold py-2 rounded hover:bg-red-600 transition duration-300 w-96"
      >
        Sign up
      </button>
      <div className="flex flex-col">
        <Link className="text-gray-500 mt-3 text-sm underline" to={"/reset"}>Forgot your password?</Link>
        <p className="w-96 text-gray-500 mt-3 text-sm">By continuing with Google, Apple, or Email, you agree to Todoist’s <Link className="underline" to={"/terms"}>Terms of Service</Link> and <Link className="underline" to={"/privacy"}>Privacy Policy</Link>.</p>
      </div>
      <p>Already have an account? <Link className="underline" to={"/login"}><b>Login</b></Link></p>
    </form>
  );
};
