import React,{useState} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavbarText,
} from "reactstrap";
import './nav.css';

const Navigation = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">THE HASHING PYTHON</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <NavbarText className="navText">MadProcessors</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Navigation;
