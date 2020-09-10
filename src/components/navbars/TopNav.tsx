import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../../../public/logo3.png';

const TopNav: React.FC = ({ showModal }) => {
  function openNav() {
    document.querySelector('#mySidebar').style.width = '250px';
    document.querySelector('#main').style.marginLeft = '250px';
  }

  return (
    <Navbar className="sticky-nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <button className="openbtn bg-dark" onClick={openNav}>
        ☰
      </button>
      <img className="logo" src={logo} />
      <Navbar.Brand className="logo-text" href="#home">
        CanvasQL
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Form inline>
            <Button variant="primary" onClick={showModal}>
              Enter DB Link
            </Button>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNav;

/*                */
