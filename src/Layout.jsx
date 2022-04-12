import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import HeaderNavigation from "./Navigation/HeaderNavigation";
import FooterNavigation from "./Navigation/FooterNavigation";

function Layout() {
  return (
    <>
      <Container fluid className="p-0" id="header-nav-container">
        <Row>
          <Col>
            <header className="App-header">
              <HeaderNavigation />
            </header>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className="d-flex p-0 align-items-center w-100"
        id="layout-container"
      >
        <Row
          className="p-0 m-0 w-100 justify-content-center"
          id="layout-outlet-row"
        >
          <Col
            xs={{ span: 10, offest: 1 }}
            className="d-flex justify-content-center p-0"
            id="layout-outlet-col"
          >
            <Outlet />
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className="p-0 position-sticky-bottom"
        id="footer-nav-container"
      >
        <FooterNavigation />
      </Container>
    </>
  );
}

export default Layout;
