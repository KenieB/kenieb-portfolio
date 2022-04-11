import { useState } from "react";
import { Container, Row, Col, Navbar, Nav, Image } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Container fluid className="p-0">
        <Row>
          <Col>
            <header className="App-header">
              <Navbar
                sticky="top"
                collapseOnSelect
                expand="lg"
                bg="info"
                className="bg-opacity-25"
              >
                <Container className="ms-lg-1 me-0">
                  <Navbar.Brand href="/" className="text-light me-0">
                    <img
                      src="/src/assets/images/avatar.svg"
                      width="125"
                      className="d-inline-flex align-middle"
                      alt="Developer KenieB logo"
                    />
                    K<span className="header-lowlight">enie</span>B
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Container className="d-lg-flex justify-content-end me-xs-0 me-lg-1 pe-lg-0">
                      {" "}
                      <Nav>
                        <Nav.Link
                          href="/about"
                          className="me-xs-1 me-lg-2 pe-lg-2 main-nav-link"
                        >
                          About
                        </Nav.Link>
                        <Nav.Link
                          href="/projects"
                          className="mx-xs-1 mx-lg-2 px-lg-1 main-nav-link"
                        >
                          Projects
                        </Nav.Link>
                        <Nav.Link
                          href="/contactie"
                          className="ms-xs-1 ms-lg-2 ps-lg-2 main-nav-link"
                        >
                          Contact
                        </Nav.Link>
                      </Nav>{" "}
                    </Container>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </header>
          </Col>
        </Row>
        <Row className="p-2 justify-content-center">
          <Col xs={{ span: 10, offest: 1 }} className="d-flex">
            <Row xs={1} md={2}>
              <Col></Col>
              <Col>
                <Container className="px-0 py-1">
                  <Image fluid src="/src/assets/images/home_avatar.png" />
                </Container>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
