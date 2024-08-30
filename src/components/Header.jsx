import React from 'react';
import './Header.scss';  // Ensure you're importing the SCSS file
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  const menuItems = ['Home', 'Portfolio', 'Services', 'Gallery', 'Contact us'];

  return (
    <Navbar expand="lg" className='nav-bar'>
      <Container className='mt-0'>
        <Navbar.Brand href="#home">
          <img src="logo.png" alt="logo" height="60px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menuItems.map((item, index) => (
              <Nav.Link href={`#${item.toLowerCase()}`} key={index}>
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
