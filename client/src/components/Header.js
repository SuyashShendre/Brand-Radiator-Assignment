import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { toggleMenu } from "../utils/navbarSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <>
        <header>
          <div className="container">
            <div className="col-div-6">
              <p className="logo">
                <Link to="/">Logo</Link>
              </p>
            </div>
            <div className="col-div-6">
              <img
                onClick={() => toggleMenuHandler()}
                className="nav"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
                alt="hb"
                height="40px"
              />
              <Sidebar />
            </div>
            <div className="clearfix" />
          </div>
        </header>
      </>
    </>
  );
};

export default Header;
