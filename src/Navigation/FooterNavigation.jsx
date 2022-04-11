import { Container, Navbar, Nav } from "react-bootstrap";

function FooterNavigation() {
  return (
    <Navbar bg="info" className="bg-opacity-25">
      <Container fluid className="ms-lg-1 me-0 justify-content-center">
        <Nav>
          <Nav.Link
            href="https://www.linkedin.com/in/keniebetts/"
            className="me-xs-1 me-lg-2 pe-lg-2"
          >
            <img
              src="/src/_assets/images/linkedin-logo-sketch--bs-light.svg"
              height="50"
              alt="LinkedIn logo"
            />
          </Nav.Link>
          <Nav.Link
            href="mailto:kbetts001@gmail.com"
            className="mx-xs-1 mx-lg-4 px-lg-2"
          >
            <img
              src="/src/_assets/images/email-logo-sketch--bs-light.svg"
              height="50"
              alt="Email logo"
            />
          </Nav.Link>
          <Nav.Link
            href="https://www.github.com/KenieB"
            className="ms-xs-1 ms-lg-2 ps-lg-2"
          >
            <img
              src="/src/_assets/images/github-logo-sketch--bs-light.svg"
              height="50"
              alt="Github logo"
            />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default FooterNavigation;
