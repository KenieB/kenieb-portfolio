import { Container, Navbar, Nav } from "react-bootstrap";

function HeaderNavigation() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="info" className="bg-opacity-25">
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
                className="me-xs-1 me-lg-1 pe-lg-2 main-nav-link"
              >
                About
              </Nav.Link>
              <div className="vr text-light"></div>
              <Nav.Link
                href="/projects"
                className="mx-xs-1 mx-lg-1 px-lg-2 main-nav-link"
              >
                Projects
              </Nav.Link>
              <div className="vr text-light"></div>
              <Nav.Link
                href="/contact"
                className="ms-xs-1 ms-lg-1 ps-lg-2 main-nav-link"
              >
                Contact
              </Nav.Link>
            </Nav>{" "}
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNavigation;