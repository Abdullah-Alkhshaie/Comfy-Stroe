import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Validate email using the regex
    setEmailError(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e.target.value)
        ? ""
        : "Invalid email"
    );
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email before submitting the form
    if (!emailError) {
      // Handle authentication logic here

      console.log("Email:", email);
      console.log("Password:", password);
    } else {
      console.error("Invalid form submission. Please fix the errors.");
    }
  };

  return (
    <div className="max-w-lg mx-auto my-20 shadow-lg p-10 rounded-lg">
      <div className="flex justify-center items-center mb-10">
        <h1 className="text-cyan-900 text-3xl font-semibold ">Log in</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-10">
          <label className="block text-gray-700 text-lg  mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className={`shadow appearance-none border ${
              emailError ? "border-red-500" : "border-gray-300"
            } rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && (
            <p className="text-red-500 text-xs italic">{emailError}</p>
          )}
        </div>
        <div className="mb-10">
          <label
            className="block text-gray-700 text-lg  mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white w-full duration-300 mt-5  py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
      <div className="flex justify-center mt-5 text-lg">
        <p>Not a member yet ?</p>{" "}
        <Link to="/signup">
          <span className="text-blue-500">Register</span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
