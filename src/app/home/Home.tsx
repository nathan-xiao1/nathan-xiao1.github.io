import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Education } from './education';
import { Experience } from './experience';
import { Hero } from './hero';
import './Home.scss';

function Home(): JSX.Element {
  return (
    <React.Fragment>
      <Hero />
      <Container fluid>
        <Row>
          <Col lg={6}>
            <Education />
          </Col>
          <Col lg={6}>
            <Experience />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Home;
