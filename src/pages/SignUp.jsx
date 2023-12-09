import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e.target.value)
        ? ""
        : "Invalid email"
    );
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(
      e.target.value.length >= 8
        ? ""
        : "Password must be at least 8 characters long"
    );
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and password before submitting the form
    if (!emailError && !passwordError && password === confirmPassword) {
      // Handle signup logic here

      console.log("Username:", username);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Confirm Password:", confirmPassword);
    } else {
      console.error("Invalid form submission. Please fix the errors.");
    }
  };

  return (
    <div className="max-w-lg mx-auto my-20 shadow-lg p-10 rounded-lg">
      <div className="flex justify-center items-center mb-10">
        <h1 className="text-cyan-900 text-3xl font-semibold ">Register</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg  mb-2" htmlFor="email">
            Username:
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="username"
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg  mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className={`shadow appearance-none border ${
              emailError ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && (
            <p className="text-red-500 text-xs italic">{emailError}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg  mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className={`shadow appearance-none border ${
              passwordError ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && (
            <p className="text-red-500 text-xs italic">{passwordError}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg  mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 w-full duration-300 hover:bg-green-700 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="flex justify-center mt-5 text-lg">
        <p>Already a member ?</p>{" "}
        <Link to="/signin">
          <span className="text-blue-500">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
