import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #000;
  height: "80px";
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and(max-width:96px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 88px;
  z-index: 1;
  width: 100%;
  padding: 0 20px;
  max-width: 1100;
`;
export const NavbarLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-family: "Sacramento", cursive;
  text-decoration: none;
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 2rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavbarItems = styled.li`
  height: 80px;
`;
export const NavLinks = styled(Link)`
  margin-left: 2rem;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: "Noto Sans JP", sans-serif;
  &:active {
    border-bottom: 3px solid green;
  }
`;
