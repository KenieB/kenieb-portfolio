import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function Work() {
  return (
    <Row xs={1} className="w-100 gap-3" id="work-row">
      <Col className="border border-primary">
        <h1 className="display-2 text-center">Work</h1>
      </Col>

      <Col className="border border-light" style={{ height: "400px" }}>
        <Container></Container>
      </Col>
    </Row>
  );
}

export default Work;
