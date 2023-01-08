import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AboutMe } from '../aboutme';

import './Hero.scss';

export function Hero(): JSX.Element {
  return (
    <Container fluid className="hero-container">
      <Row className="hero-content-container">
        <Col className="hero-content-left" lg={true}>
          <div>
            <h1 className="hero-title text-primary text-xxxlarge">Welcome</h1>
            <p className="hero-subtitle text-large">
              {"Hello, I'm a Sydney based Software Engineer"}
            </p>
          </div>
        </Col>
        <Col className="hero-content-right" lg={true}>
          <p className="heading-text text-primary">About Me</p>
          <AboutMe />
        </Col>
      </Row>
    </Container>
  );
}
