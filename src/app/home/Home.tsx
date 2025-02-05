import { useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Ninja, World } from 'website-pets';
import { AboutMe } from './aboutme';
import { Education } from './education';
import { Experience } from './experience';
import { Hero } from './hero';

import './Home.scss';

function Home(): JSX.Element {
  const homeContainerRef = useRef(null);

  useEffect(() => {
    const homeContainer = homeContainerRef.current;
    if (homeContainer != null) {
      const ninja = new Ninja({
        left: 0,
        top: 0,
        height: 50,
        width: 50,
        speed: 5,
      });
      const world = new World(ninja, homeContainer);
      world.makeEntityDraggable(ninja);
      world.start();
    }
  }, []);

  return (
    <Container fluid className="home-container" ref={homeContainerRef}>
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
