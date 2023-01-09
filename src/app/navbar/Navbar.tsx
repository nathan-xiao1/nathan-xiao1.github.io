import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import './Navbar.scss';

function _Navbar(): JSX.Element {
  return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="text-light">
          <span className="navbar-brand">Nathan Xiao</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link
              href="https://www.linkedin.com/in/nathan-xiao/"
              target="_blank"
            >
              LinkedIn
            </Nav.Link>
            <Nav.Link href="https://github.com/nathan-xiao1" target="_blank">
              GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { _Navbar as Navbar };
