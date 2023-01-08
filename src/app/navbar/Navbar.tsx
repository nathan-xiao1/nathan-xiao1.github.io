import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function _Navbar(): JSX.Element {
  return (
    <Navbar expand="lg" className="text-light">
      <Container>
        <Navbar.Brand className="text-light">Nathan Xiao</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link className="text-light" href="#link">
              LinkedIn
            </Nav.Link>
            <Nav.Link className="text-light" href="#home">
              GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { _Navbar as Navbar };
