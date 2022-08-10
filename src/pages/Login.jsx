import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loginState, setLoginState] = useState(0);

  const navigate = useNavigate();

  // Different Login States
  function viewSignIn() {
    setLoginState(0);
  }
  function viewSignUp() {
    setLoginState(1);
  }
  function viewUserReset() {
    setLoginState(2);
  }
  // Sign Up Functions
  function handleSignUp() {
    alert("User Sign Up Successful");
    viewSignIn();
  }
  function handleDemoSignUp() {
    alert("Demo Sign Up Successful");
    viewSignIn();
  }
  // Login Functions
  function handleLogin() {
    alert("Logging In Successful");
    viewDashboard();
  }
  function handleDemoLogin() {
    alert("Logging In As Demo !");
    viewDashboard();
  }
  // Reset Cridentials
  function handleReset() {
    alert("Email Sent with Information To Reset Password.");
    viewSignIn();
  }

  function viewDashboard() {
    navigate("/dashboard");
  }

  console.log(loginState);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-tr from-black via-black to-green-900">
      <div className="p-8 flex flex-col justify-around rounded-xl shadow-lg bg-white">
        <div className="w-[450px]">
          <img
            src="/assets/Icon/Login Icon.jpg"
            alt="/"
            className="mb-4 mt-2 rounded-xl"
          />
        </div>
        <hr className="my-4" />
        {loginState === 0 ? (
          <form>
            {/* Login Form */}
            <div className="flex flex-col space-y-4">
              <input
                className="border-[3px] p-2 mr-2 rounded-md text-center bg-transparent border-transparent border-b-green-600 focus:outline-none focus:border-b-green-600 duration-300 "
                type="text"
                placeholder="Email"
              />
              <input
                className="border-[3px] p-2 mr-2 rounded-md text-center bg-transparent border-transparent border-b-green-600 focus:outline-none focus:border-b-green-600 duration-300 "
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex space-x-8 justify-center">
              <button
                onClick={handleLogin}
                className="w-full rounded-lg py-2 my-4 bg-green-600 text-white hover:scale-105 duration-500"
              >
                Sign In
              </button>
              <button
                onClick={viewSignUp}
                className="w-full rounded-md py-2 my-4 border-b-[3px] border-b-green-600 hover:text-green-500  duration-300"
              >
                Sign Up
              </button>
            </div>
            <hr className="mt-4" />
            <p className="text-center font-medium my-4">
              <span
                onClick={viewUserReset}
                className="hover:text-green-500 cursor-pointer duration-300"
              >
                Forgot Username or Password?
              </span>
            </p>
            <hr className="mb-4" />
            <button
              onClick={handleDemoLogin}
              className="w-full rounded-md py-2 my-4 border-b-[3px] border-b-green-600 hover:text-green-500  duration-300"
            >
              Login As Demo
            </button>
          </form>
        ) : null}
        {loginState === 1 ? (
          <form>
            {/* Sign Up Form */}
            <div className="grid grid-cols-2">
              <div className="flex flex-col space-y-4">
                <input
                  className="border-[3px] p-2 mr-2 rounded-md text-center bg-transparent border-transparent border-b-green-600 focus:outline-none focus:border-b-green-600 duration-300 "
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="border-[3px] p-2 mr-2 rounded-md text-center bg-transparent border-transparent border-b-green-600 focus:outline-none focus:border-b-green-600 duration-300 "
                  type="text"
                  placeholder="Username"
                />
                <input
                  className="border-[3px] p-2 mr-2 rounded-md text-center bg-transparent border-transparent border-b-green-600 focus:outline-none focus:border-b-green-600 duration-300 "
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <input
                  className="border-[3px] p-2 mr-2 rounded-md text-center bg-transparent border-transparent border-b-green-600 focus:outline-none focus:border-b-green-600 duration-300 "
                  type="text"
                  placeholder="Last Name"
                />
                <input
                  className="border-[3px] p-2 mr-2 rounded-md text-center bg-transparent border-transparent border-b-green-600 focus:outline-none focus:border-b-green-600 duration-300 "
                  type="text"
                  placeholder="Email"
                />
                <input
                  className="border-[3px] p-2 mr-2 rounded-md text-center bg-transparent border-transparent border-b-green-600 focus:outline-none focus:border-b-green-600 duration-300 "
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <hr className="mt-9" />
            <div className="flex space-x-8">
              <button
                onClick={viewSignIn}
                className="w-full rounded-lg py-2 my-4 bg-green-600 text-white hover:scale-105 duration-500"
              >
                Back
              </button>

              <button
                onClick={handleSignUp}
                className="w-full rounded-md py-2 my-4 border-b-[3px] border-b-green-600 hover:text-green-500  duration-300"
              >
                Submit
              </button>
            </div>
            <hr className="my-2" />
            <button
              onClick={handleDemoSignUp}
              className="w-full rounded-md py-2 my-4 border-b-[3px] border-b-green-600 hover:text-green-500  duration-300"
            >
              Sign Up As Demo
            </button>
          </form>
        ) : null}
        {loginState === 2 ? (
          <form>
            {/* Forgot Username or Password */}
            <div className="flex flex-col space-y-4">
              <input
                className="border-[3px] p-2 mr-2 rounded-md text-center bg-transparent border-transparent border-b-green-600 focus:outline-none focus:border-b-green-600 duration-300 "
                type="text"
                placeholder="Enter Email Address"
              />
              <input
                className="border-[3px] p-2 mr-2 rounded-md text-center bg-transparent border-transparent border-b-green-600 focus:outline-none focus:border-b-green-600 duration-300 "
                type="text"
                placeholder="Enter Username"
              />
            </div>

            <hr className="my-8" />
            <div className="flex space-x-8 justify-center">
              <button
                onClick={viewSignIn}
                className="w-full rounded-lg py-2 my-4 bg-green-600 text-white hover:scale-105 duration-500"
              >
                Back
              </button>
              <button
                onClick={handleReset}
                className="w-full rounded-md py-2 my-4 border-b-[3px] border-b-green-600 hover:text-green-500  duration-300"
              >
                Submit
              </button>
            </div>
            <hr className="mt-4" />
          </form>
        ) : null}
      </div>
    </div>
  );
}
