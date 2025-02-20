import React from "react";
import BurgerMenu from "../BurgerMenu/Burger";
import Notification from "../NavRightMenus";
import "./navMenu.css";

function Navbar({ handleBurgerClick }) {
  return (
    <>
      <div className="navigation-wrapper flex-wrapper">
        <BurgerMenu handleBurgerClick={handleBurgerClick} />
        <Notification />
      </div>
    </>
  );
}

export default Navbar;
