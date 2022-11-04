import React from "react";
import { Navbar, Image, Nav } from "react-bootstrap";
import logo from "../../theme/images/logo.png";
import { HiOutlineMenu } from "react-icons/hi";

const Header = () => {
  return (
    <div className="navigation">
      <Navbar className="navigation__menu" expand="lg">
        <div className="navigation__container">
          <Navbar.Brand href="#home">
            <Image src={logo} fluid className="navigation__icon" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <HiOutlineMenu className="navbar-toggler-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
