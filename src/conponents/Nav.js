import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/photo-website">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
