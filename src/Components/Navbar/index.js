import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  MobileIcon,
  NavMenu,
  NavbarItems,
  NavLinks,
} from "./NavbarElements";

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavbarLogo to="/">Ashraful Malik</NavbarLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavbarItems>
              <NavLinks to="/">Home</NavLinks>
            </NavbarItems>
            <NavbarItems>
              <NavLinks to="/portfolio">Portfolio</NavLinks>
            </NavbarItems>
            <NavbarItems>
              <NavLinks to="/contact">Contact</NavLinks>
            </NavbarItems>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
