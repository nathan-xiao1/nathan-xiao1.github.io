import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AboutMe } from './aboutme';
import { Education } from './education';
import { Experience } from './experience';
import { Hero } from './hero';
import './Home.scss';

function Home(): JSX.Element {
  return (
    <Container fluid className="home-container">
      <Row className="g-5">
        <Col lg={12}>
          <Container fluid>
            <Row>
              <Col className="home-hero home-hero-subsection" lg={6}>
                <Hero />
              </Col>
              <Col className="home-hero-subsection" lg={6}>
                <AboutMe />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col lg={6}>
          <Education />
        </Col>
        <Col lg={6}>
          <Experience />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
