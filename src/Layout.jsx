import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import HeaderNavigation from "./Navigation/HeaderNavigation";
import FooterNavigation from "./Navigation/FooterNavigation";

function Layout() {
  return (
    <>
      <Container fluid className="p-0">
        <Row>
          <Col>
            <header className="App-header">
              <HeaderNavigation />
            </header>
          </Col>
        </Row>
      </Container>
      <Container fluid className="d-flex p-0" id="layout-container">
        <Row className="p-2 min-vw-100 justify-content-center">
          <Col
            xs={{ span: 10, offest: 1 }}
            className="d-flex justify-content-center"
          >
            <Outlet />
          </Col>
        </Row>
      </Container>
      <Container fluid className="p-0">
        <Row>
          <Col>
            <FooterNavigation />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Layout;
