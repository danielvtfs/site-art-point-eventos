import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

import logo from '../../img/logo.png';
import './header.css';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

      <Navbar  color="dark" light expand="md">
        <div className="div-container">
        <NavbarBrand href="/">
          <img src={logo} className="imgLogo" alt="" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <div className=" itens">
            <Nav  navbar>
              <NavItem>
                <NavLink href="/eventos">EVENTOS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contato">CONTATO</NavLink>
              </NavItem>
            </Nav>
            </div>
        </Collapse>
        </div>
      </Navbar>

  );
};

export default Example;
