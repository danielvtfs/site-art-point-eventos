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
} from 'reactstrap';
import logo from '../../img/logo.png';
import './styles.css';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" light expand="md">
        <a href="/">
          <img className="imgLogo" src={logo} alt="Logo" />
        </a>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="navItem" href="/cursos">
                Cursos
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="navItem" nav caret>
                Serviços
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu" right>
                <DropdownItem className="dropdown-item" href="/luthier">
                  Luthier
                </DropdownItem>
                <DropdownItem className="dropdown-divider" divider />
                <DropdownItem href="/contato">Contato</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink className="navItem" href="/album">
                Fotos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navItem" href="/videos">
                Vídeos
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
