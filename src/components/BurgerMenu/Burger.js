import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MENU_ITEMS } from "../../constants";
import "./burgerMenu.css";

function BurgerMenu({ handleBurgerClick }) {
  const [isOpenBar, setIsOpenBar] = useState(true);

  const handleOnchange = () => {
    setIsOpenBar(!isOpenBar);
    handleBurgerClick();
  };

  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input
          type="checkbox"
          className="block-wrapper absoulte-position curser-pointer"
          id="menuCheckbox"
          onChange={handleOnchange}
        />
        {isOpenBar ? (
          <i className="margin-wrapper fa fa-bars"></i>
        ) : (
          <i className="margin-wrapper fas fa-times"></i>
        )}

        <div id="menu">
          <NavLink className="center-content-wrapper nav-link" to="menu/home">
            {MENU_ITEMS.HOME}
          </NavLink>
          <NavLink className="center-content-wrapper nav-link" to="menu/about">
            {MENU_ITEMS.ABOUT}
          </NavLink>
          <NavLink
            className="center-content-wrapper nav-link"
            to="menu/contact"
          >
            {MENU_ITEMS.CONTACT}
          </NavLink>
          <NavLink className="center-content-wrapper nav-link" to="menu/info">
            {MENU_ITEMS.INFO}
          </NavLink>
          <NavLink
            className="center-content-wrapper nav-link"
            to="menu/portfolio"
          >
            {MENU_ITEMS.PORTFOLIO}
          </NavLink>
          <NavLink
            className="center-content-wrapper nav-link"
            to="menu/services"
          >
            {MENU_ITEMS.SERVICES}
          </NavLink>
          <NavLink className="center-content-wrapper nav-link" to="/">
            {MENU_ITEMS.SEARCH}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default BurgerMenu;
