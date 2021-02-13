import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import NotificationsIcon from "@material-ui/icons/Notifications";
import React from "react";
import logo_big from "../../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo_big} alt="Logo" />
      </div>
      <div className="header__center">
        <SearchIcon />
        <input type="text" placeholder="Search Mail..." />
        <ArrowDropDownIcon className="header__center-input" />
      </div>
      <div className="header__right">
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
