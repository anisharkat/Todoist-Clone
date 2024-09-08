import { Link } from "react-router-dom";


export const LoginForm = () => {
  return (
    <form>
        <div className="mb-4 w-96">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"

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
            placeholder="Enter Your password here"
            id="password"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button 
          type="submit"
          className=" bg-red-500 text-white font-bold py-2 rounded hover:bg-red-600 transition duration-300 w-96"
        >
          Login
        </button>
        <div className="flex flex-col">
            <Link className="text-gray-500 mt-3 text-sm underline" to={"/reset"}>Forgot your password?</Link>
            <p  className="w-96 text-gray-500 mt-3 text-sm">By continuing with Google, Apple, or Email, you agree to Todoist’s <Link className="underline" to={"/terms"}>Terms of Service</Link> and <Link className="underline" to={"/privacy"}>Privacy Policy</Link>.</p>
        </div>
        <p>Don’t have an account? <Link className="underline" to={"/signup"}><b>Sign up</b></Link></p>
    </form>
    
  );
};