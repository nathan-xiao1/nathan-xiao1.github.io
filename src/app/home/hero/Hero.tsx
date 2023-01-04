import React from 'react';
import { Container } from 'react-bootstrap';
import './Hero.scss';

function Hero(): JSX.Element {
  return (
    <Container
      fluid
      className="hero-container-main d-flex flex-column justify-content-center py-5"
    >
      <h1 className="hero-title display-6 fw-bold">Welcome</h1>
      <p className="hero-subtitle col-md-8 fs-5">
        {"Hello, I'm a Sydney based Software Engineer"}
      </p>
    </Container>
  );
}

export { Hero };
