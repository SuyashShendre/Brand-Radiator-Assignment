import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) {
    return null;
  }

  return (
    <>
      <div id="myLinks">
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </>
  );
};

export default Sidebar;
