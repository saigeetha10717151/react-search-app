import React from "react";

function NavigationRightMenus() {
  return (
    <div className="flex-wrapper center-wrapper">
      <div>
        <i className="notification-icon far fa-bell"></i>
        <span className="badge absoulte-position"></span>
      </div>
      <div className="profile">
        <div className="profile-name">SS</div>
      </div>
      <i className="grid-icon fas fa-th-large"></i>
    </div>
  );
}

export default NavigationRightMenus;
