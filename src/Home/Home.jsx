import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import homeAvatar from "/images/home_avatar.svg";

function Home() {
  return (
    <Container fluid className="px-0">
      <Row xs={1} md={2}>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <div className=" pb-2 pb-md-4">
            <h3 className="display-6 fst-italic">Hi, my name is</h3>
            <h1 className="display-3 text-center">
              Kenie B<span className="h-body-lowlight">etts.</span>
            </h1>
          </div>
          <h1 className="display-2 text-center">Full-Stack Web Developer</h1>
        </Col>
        <Col>
          <Image fluid src={homeAvatar} />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
