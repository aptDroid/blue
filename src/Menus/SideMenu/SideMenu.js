import React from "react";
import "./SideMenu.css";

function SideMenu(props = { styleClass: "showSideMenu" }) {
  // ref = { props.sideMenuRef }
  return (
    <React.Fragment>
      <div
        className={
          props.styleClass ? "menuFadeBackground" : "menuFadeBackgroundHidden"
        }
      />
      <div
        className={
          props.styleClass ? "sideMenu " + props.styleClass : "sideMenu"
        }
      >
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default SideMenu;
