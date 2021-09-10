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
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">
          <img src={logo} className="imgLogo" alt="" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <div className="teste">
            <Nav className="mr-auto itens" navbar>
              <NavItem>
                <NavLink href="/eventos">Eventos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contato">Contato</NavLink>
              </NavItem>
            </Nav>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
