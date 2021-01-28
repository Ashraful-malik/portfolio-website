import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";
function Sidebar({ IsOpen, toggle }) {
  return (
    <>
      <SidebarContainer IsOpen={IsOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper />
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="/portfolio" onClick={toggle}>
            Portfolio
          </SidebarLink>
          <SidebarLink to="/contact" onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SidebarWrapper />
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
