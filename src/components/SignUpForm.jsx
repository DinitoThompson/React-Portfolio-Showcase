import React from "react";

const SignUpForm = ({ setSignUp }) => {
  return (
    <div className="mt-2">
      <form>
        {/* Student Login Form */}
        <div className="flex flex-col space-y-4">
          <input
            className="border-[3px] p-2 mr-2 rounded-md text-center bg-transparent border-transparent border-b-green-600 focus:outline-none focus:border-b-green-600 duration-300 "
            type="text"
            placeholder="ID Number or Email"
          />
          <input
            className="border-[3px] p-2 mr-2 rounded-md text-center bg-transparent border-transparent border-b-green-600 focus:outline-none focus:border-b-green-600 duration-300 "
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex space-x-8">
          <button className="w-full rounded-md py-2 my-4 border-b-[3px] border-b-green-600 hover:text-green-500  duration-300">
            Sign Up
          </button>
        </div>

        <hr className="mb-4" />
        <button className="w-full rounded-md py-2 my-4 border-b-[3px] border-b-green-600 hover:text-green-500  duration-300">
          Login As Demo
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
