import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/navbarSlice";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  if (!isMenuOpen) {
    return null;
  }
  return (
    <div id="mySidenav" className="sidenav">
      <a href="#" className="closebtn" onClick={() => toggleMenuHandler()}>
        &times;
      </a>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/admin">Admin</Link>
    </div>
  );
};

export default Sidebar;
