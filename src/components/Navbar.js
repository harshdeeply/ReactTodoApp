import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link className="navItem" to="/">
        Home
      </Link>
      &nbsp;
      {/* <Link className="navItem" to="about">About</Link> */}
      &nbsp;
      <Link className="navItem" to="api">
        Doggos
      </Link>
    </div>
  );
};

export default Navbar;
