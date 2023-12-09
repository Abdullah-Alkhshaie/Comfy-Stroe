import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-cyan-900 py-2 text-white flex justify-center  lg:justify-end">
      <p className="mr-10 cursor-pointer hover:underline">
        <Link to="/signin">
          <span>Sign in</span>
        </Link>{" "}
        /{" "}
        <Link to="/signup">
          <span>Creat Account</span>
        </Link>{" "}
      </p>
    </div>
  );
}

export default Header;
