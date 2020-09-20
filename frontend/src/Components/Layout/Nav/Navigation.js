import React,{useEffect, useState} from "react";
import {
  Collapse,
  Navbar,
  NavLink,
  NavbarToggler,
  NavbarBrand,
  NavbarText,
} from "reactstrap";
import './nav.css';

const Navigation = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    window.localStorage.clear();
    window.location.href = '/';
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">THE HASHING PYTHON</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <NavbarText className="navText">MadProcessors</NavbarText>
        </Collapse>
        <NavLink className='logout' onClick={logout} > 
          Logout
        </NavLink>
      </Navbar>
    </div>
  );
};
export default Navigation;
