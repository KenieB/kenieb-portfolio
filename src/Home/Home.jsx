import { Container, Row, Col, Image } from "react-bootstrap";
import HeaderNavigation from "../Navigation/HeaderNavigation";
import FooterNavigation from "../Navigation/FooterNavigation";

function Home() {
  return (
    <>
      <Row>
        <Col>
          <header className="App-header">
            <HeaderNavigation />
          </header>
        </Col>
      </Row>
      <Row className="p-2 justify-content-center">
        <Col xs={{ span: 10, offest: 1 }} className="d-flex">
          <Container fluid>
            <Row xs={1} md={2}>
              <Col md={6} className="d-flex flex-column justify-content-center">
                <div className=" pb-2 pb-md-4">
                  <h3 className="display-6 fst-italic">Hi, my name is</h3>
                  <h1 className="display-3 text-center">
                    Kenie B<span className="h-body-lowlight">etts.</span>
                  </h1>
                </div>
                <h1 className="display-2 text-center">
                  Full-Stack Web Developer
                </h1>
              </Col>
              <Col>
                <Image fluid src="/src/assets/images/home_avatar.svg" />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <FooterNavigation />
        </Col>
      </Row>
    </>
  );
}

export default Home;
