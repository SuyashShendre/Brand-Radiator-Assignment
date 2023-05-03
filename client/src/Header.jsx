import React from "react";
import { useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
import { toggleMenu } from "./utils/navbar";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <div className="topnav">
        <a href="#home" className="active">
          Logo
        </a>
        <Sidebar />
        <a href="#" className="icon">
          {/* <i className="fa fa-bars"></i> */}
          <img
            onClick={() => toggleMenuHandler()}
            src="https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg"
            alt="hb"
            height="15px"
          />
        </a>
      </div>
    </>
  );
};

export default Header;
