import { Container, Row, Col, Image } from "react-bootstrap";

/**
 * Defines the "Not Found" page that is displayed for any unmatched route.
 *
 * @returns {JSX.Element}
 */
function NotFound() {
  return (
    <>
      <Container fluid className="d-flex d-lg-none justify-content-center">
        <Image fluid src="/src/_assets/images/404-mobile.svg" />
      </Container>

      <Container fluid className="d-none d-lg-flex justify-content-center">
        <Image fluid src="/src/_assets/images/404.svg" />
      </Container>
    </>
  );
}

export default NotFound;
