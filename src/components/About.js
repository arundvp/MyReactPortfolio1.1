import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../images/Portfolio_Headshot.png";
import "../css/About.css";

function About() {
  return (
    // About section
    <section id="about" className="py-5">
      <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={avatar} rounded fluid className="about-image" />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                </Card.Title>
                <Card.Text>
                Hello! I'm a passionate Software Developer with several years of experience specializing in full-stack web development. 
                I've been committed to solving problems through innovative technology solutions.
                </Card.Text>
                <Card.Text>
                In the tech world, emerging fields like AI, biotechnology, and renewable energy offer a myriad of possibilities for innovation and impact. There are challenges that have yet to be solved, and thus, opportunities for groundbreaking work.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export About
export default About;
