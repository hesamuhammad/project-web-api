import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav, NavItem, NavLink
} from 'reactstrap';


const Navreactstrap = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const logOut = () => {
    localStorage.setItem("status", false);
    window.location = './';
  }
  const isLogin = JSON.parse(localStorage.getItem("status"));

  return (
    <div>
      <Navbar className="navigasiz" color="dark" dark expand="md">
        <NavbarBrand href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Deutsche_Bahn_AG-Logo.svg/1280px-Deutsche_Bahn_AG-Logo.svg.png" alt='gambar logo' /></NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/profile">About Us</NavLink>
                </NavItem>
            {isLogin ? (
              <React.Fragment>

                <NavItem>
                  <NavLink href="/mock">Officer</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/bebas">Project</NavLink>
                </NavItem>

                <NavItem style={{ cursor: "pointer" }}>
                  <NavLink onClick={logOut}>Logout</NavLink>
                </NavItem>

              </React.Fragment>
            ) : (
                <React.Fragment>
                  <NavItem>
                    <NavLink href="/login">Login</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/registration">Register</NavLink>
                  </NavItem>
                </React.Fragment>
              )}
          </Nav>
        </Collapse>
      </Navbar>

    </div>
  );
}

export default Navreactstrap;