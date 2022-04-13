import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function About() {
  return (
    <Row xs={1} className="w-100 gap-3" id="about-row">
      <Col className="border border-primary">
        <h1 className="display-2 text-center">About</h1>
      </Col>

      <Col className="border border-light" style={{ height: "400px" }}>
        <Container></Container>
      </Col>
    </Row>
  );
}

export default About;
